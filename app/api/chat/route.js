import fetch from 'node-fetch';
import { NextResponse } from 'next/server'

export const POST = async ({ body }) => { 
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.MY_API_KEY}`,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    return NextResponse.error({ status: 500 , message: 'An error occurred', data })
  }

  return new NextResponse.JSON(data);
}