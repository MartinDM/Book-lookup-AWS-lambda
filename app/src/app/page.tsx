"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {  Field, Input, Text } from "@chakra-ui/react";
import { type Author, type AuthorsApiResponse } from "./types";

export default function Home() { 
  const [searchTerm, setSearchTerm ] = useState<string>("");

  async function fetchAuthors(searchTerm: string): Promise<AuthorsApiResponse> {
    console.log('submitted');
    const res = await fetch(`/api/author?author=${encodeURIComponent(searchTerm)}`);
    const data = await res.json();
    console.log(data);
    setAuthors(data.docs || []);
    return data;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetchAuthors(searchTerm); 
  };

  const [authors, setAuthors] = useState<Author[]>([]) 
  return (
    <main className="grid grid-cols-2 gap-4 flex justify-center items-center min-h-screen p-2">
           <form onSubmit={handleSubmit} className="content-center flex flex-col gap-4">
            <Field.Root>
              <Field.Label>
                <Text fontWeight="normal" textStyle="md" className='font-cyan-500 text-black bg-white text-center p-6'>
                  Search for an Author
                </Text>
              </Field.Label>
              <Input
                name="name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Field.Root>
            <Button type='submit' size="xs">Search</Button>
          </form> 
        <div className="border-l-2 border-cyan-500 pl-8">
          <h2 className="font-bold text-cyan-500">Authors</h2>
          {
            authors.map((author) => (
              <div key={author.key} className="mb-4">
                <h3 className="text-lg font-semibold">{author.name}</h3>
                {author.birth_date && <p>Born: {author.birth_date}</p>}
                {author.top_work && <p>Top Work: {author.top_work}</p>}
                {author.work_count && <p>Works: {author.work_count}</p>}
              </div>
            ))
          }
        </div> 
    </main>
  );
}
