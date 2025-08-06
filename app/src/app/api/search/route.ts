import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Call AWS Lambda endpoint
  const { searchParams } = new URL(request.url);
  const author = searchParams.get('author') || '';
  const startIndex = searchParams.get('startIndex') || '0';
  const apiUrl = `https://37ey6hgnp4.execute-api.eu-west-2.amazonaws.com?startIndex=${startIndex}&author=${encodeURIComponent(
    author,
  )}`;
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch external API' },
        { status: res.status },
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error calling external API' },
      { status: 500 },
    );
  }
}
