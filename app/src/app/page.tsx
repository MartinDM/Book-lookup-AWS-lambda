'use client';
import { useState, useEffect } from 'react';
import {
  Field,
  Input,
  Button,
  Text,
  Heading,
  Container,
  InputGroup,
  Box,
  Em,
  CloseButton,
} from '@chakra-ui/react';
import { HiX } from 'react-icons/hi';
import { LuSearch } from 'react-icons/lu';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { type GoogleBooksResponse, type BookItem } from './types';
import { MdOutlineChromeReaderMode } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import useLocalStorage from './hooks/useLocalStorage';

const transformResponseIntoBooks = (data: GoogleBooksResponse): BookItem[] => {
  if (!data.items) return [];
  return data.items.map((item) => {
    const { volumeInfo, id, accessInfo } = item;
    return {
      id,
      infoLink: volumeInfo.infoLink || '',
      authors: volumeInfo?.authorsList?.join(', ') || [],
      publishedDate: volumeInfo.publishedDate,
      imageLinks: volumeInfo.imageLinks,
      title: volumeInfo.title,
      webReaderLink: accessInfo?.webReaderLink || '',
    };
  });
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useLocalStorage<BookItem[]>('books', []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Fetch searchTerm from localStorage after mount
    const stored = window?.localStorage.getItem('searchTerm');
    if (stored) setSearchTerm(JSON.parse(stored));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('searchTerm', JSON.stringify(searchTerm));
  }, [searchTerm]);

  const maxChars = 100;
  async function fetchAuthors(
    searchTerm: string,
    startIndex: number = 0,
  ): Promise<GoogleBooksResponse> {
    const res = await fetch(
      `/api/search?author=${encodeURIComponent(
        searchTerm,
      )}&startIndex=${startIndex}`,
    );
    const data: GoogleBooksResponse = await res.json();
    const booksData = transformResponseIntoBooks(data);
    if (startIndex === 0) {
      setBooks(booksData || []);
    } else {
      setBooks((prev) => [...prev, ...(booksData || [])]);
    }
    return data;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setBooks([]);
    setIsLoading(true);
    setHasSearched(true);
    try {
      await fetchAuthors(searchTerm, 0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextPage = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    try {
      const nextIndex = books.length;
      await fetchAuthors(searchTerm, nextIndex);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearResults = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setBooks([]);
    setHasSearched(false);
    setSearchTerm('');
  };

  const searchClear = searchTerm ? (
    <CloseButton
      variant="ghost"
      size="xs"
      onClick={() => {
        setSearchTerm('');
      }}
      me="-2"
    >
      <HiX />
    </CloseButton>
  ) : undefined;

  return (
    <Container maxW={'xl'}>
      <form onSubmit={handleSubmit} className="search">
        <Field.Root>
          <Field.Label>
            <Heading as={'h2'} size={'3xl'}>
              Search for an Author
            </Heading>
          </Field.Label>
          <InputGroup
            className="search_input"
            flex="1"
            startElement={<LuSearch />}
            endElement={searchClear}
          >
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
        {hasSearched && books.length === 0 && hasMounted && !isLoading && (
          <Text textStyle="md" className="no-results-text">
            No results found for &nbsp; 🥺 <br />
            <Em>&apos;{searchTerm}&apos;</Em>
          </Text>
        )}
        {books.map((book: BookItem) => {
          const {
            id,
            imageLinks,
            infoLink,
            title,
            authors,
            publishedDate,
            webReaderLink,
          } = book;
          return (
            <Box key={id} className="result">
              <Box className="book-info">
                <div>
                  <Heading size="md" as={'h4'}>
                    <Link href={infoLink} title={title}>
                      {typeof title === 'string'
                        ? title.slice(0, maxChars) +
                          (title.length > maxChars ? '...' : '')
                        : ''}
                    </Link>
                  </Heading>
                  <Text textStyle="sm">
                    {publishedDate &&
                      new Date(publishedDate).getFullYear() + ' | '}
                    {authors}
                  </Text>
                  <Box className="book-actions">
                    {webReaderLink && (
                      <Link
                        title="Read preview online"
                        href={webReaderLink}
                        target="_blank"
                      >
                        <MdOutlineChromeReaderMode size={24} />
                      </Link>
                    )}
                  </Box>
                </div>
                {imageLinks && webReaderLink && (
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
              Showing {books.length} results for{' '}
              <strong>&apos;{searchTerm}&apos;</strong>
            </Text>

            <Button
              onClick={handleNextPage}
              className="load-more"
              size="sm"
              variant="outline"
              isLoading={isLoading}
              disabled={isLoading}
              mt={2}
            >
              Load more
            </Button>
            {books.length > 0 && (
              <Button
                onClick={handleClearResults}
                className="clear"
                size="sm"
                variant="ghost"
                mt={2}
              >
                Clear results
              </Button>
            )}
          </Box>
        )}
      </div>
      {isLoading && <AiOutlineLoading3Quarters className={'loader'} />}
    </Container>
  );
}
