export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  if (!search) {
    return new Response(JSON.stringify({ error: 'Missing search parameter' }), { status: 400 });
  }

  const apiUrl = `https://api.svgl.app?search=${encodeURIComponent(search)}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'SVGL API error' }), { status: response.status });
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch from SVGL API' }), { status: 500 });
  }
}