import { getRequestContext } from '@cloudflare/next-on-pages'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  let responseText = 'Hello World'

  const body = await req.json();

  // log the body to the console
  console.log({ body });

  return new Response(responseText)
}
