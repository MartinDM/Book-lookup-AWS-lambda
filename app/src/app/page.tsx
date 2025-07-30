'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Field,
  Input,
  Text,
  Heading,
  Container,
  InputGroup,
  Box,
  Link as ChakraLink,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { LuSearch } from 'react-icons/lu';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { type GoogleBooksResponse } from './types';
import { MdOutlineChromeReaderMode } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import useLocalStorage from './hooks/useLocalStorage';


const transformResponseIntoBooks = (
  data: GoogleBooksResponse
): GoogleBooksResponseItem[] => {
  return data.items.map((item) => {
    console.log(item);
    const { volumeInfo, id, accessInfo } = item;
    return { 
      id,
      infoLink: volumeInfo.infoLink || '',
      authors: volumeInfo.authorsList.join(', ') || [], 
      publishedDate: volumeInfo.publishedDate,
      imageLinks: volumeInfo.imageLinks,
      title: volumeInfo.title,
      webReaderLink: accessInfo?.webReaderLink || '', 
    };
  });
}


export default function Home() {
  const [searchTerm, setSearchTerm] = useLocalStorage<string>('searchTerm', '');
  const [books, setBooks] = useLocalStorage<GoogleBooksResponseItem[]>('books', []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const maxChars = 100;
  async function fetchAuthors(
    searchTerm: string,
    startIndex: number = 0
  ): Promise<GoogleBooksResponse> {
    const res = await fetch(
      `/api/search?author=${encodeURIComponent(
        searchTerm
      )}&startIndex=${startIndex}`
    );
    const data: GoogleBooksResponse = await res.json();
    const booksData = transformResponseIntoBooks(data);
    setBooks((prev) =>  [...prev, ...(booksData || [])]);
    console.log('Fetched books:', booksData);
    return data;
  }



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setBooks([]);
    setIsLoading(true);  
    try {
      await fetchAuthors(searchTerm);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextPage = async () => {
    setIsLoading(true);
    try {
      const nextIndex = books.length;
      await fetchAuthors(searchTerm, nextIndex);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxW={'xl'}>
      <form onSubmit={handleSubmit} className="search">
        <Field.Root>
          <Field.Label>
            <Heading as={'h2'} size={'3xl'}>
              Search for an Author
            </Heading>
          </Field.Label>
          <InputGroup flex="1" startElement={<LuSearch />}>
            <Input
              placeholder="Search authors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          <Button disabled={!searchTerm.trim().length} type="submit" size="xs">
            Search
          </Button>
        </Field.Root>
      </form>
      <div className="results">
        {books.length > 0 && (
          <Heading as="h2" size={'xl'}>
            Results
          </Heading>
        )}
        {books.map((book: GoogleBooksResponseItem) => {
          console.log(book);
          const { id, publishedDate, volumeInfo, accessInfo } = book;
          const { imageLinks, infoLink, title, authors } =  volumeInfo;
          const { webReaderLink, infoLink } = book.accessInfo;
           return (
            <Box key={id} className="result">
              <Box className="book-info">
                <div>
                  <Heading size="md" as={'h4'}>
                    <Link href={infoLink} title={title}>
                      {title?.slice(0, maxChars) + (title?.length > maxChars ? "..." : "")}
                    </Link>
                  </Heading>
                  <Text textStyle="sm">
                    {publishedDate &&
                      new Date(publishedDate).getFullYear() + ' | '}
                    {authors}
                  </Text>
                  <Box className="book-actions">
                    <Link
                      title="Read preview online"
                      href={webReaderLink}
                      target="_blank"
                    >
                      <MdOutlineChromeReaderMode size={24} />
                    </Link>
                  </Box>
                </div>
                {imageLinks && (
                  <Link
                    href={webReaderLink}
                    title={title}
                    className="thumbnail-container"
                  >
                    <Image
                      src={imageLinks.thumbnail}
                      alt={title}
                      width={128}
                      height={192}
                      className="thumbnail"
                    />
                  </Link>
                )}
              </Box>
            </Box>
          );
        })}
        {books.length > 0 && (
          <Box className="details">
            <Text textStyle="md" className="load-more-text">
              Showing {books.length} results for <strong>&apos;{searchTerm}&apos;</strong>
            </Text>

            <ChakraLink
              asChild
              href="#"
              onClick={handleNextPage}
              className="load-more"
            >
              <NextLink href="#"> Load more</NextLink>
            </ChakraLink>
          </Box>
        )}
      </div>
      {isLoading && <AiOutlineLoading3Quarters className={'loader'} />}
    </Container>
  );
}
