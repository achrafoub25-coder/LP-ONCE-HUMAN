export function GET(request) {
  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('X-Vercel-IP-Country') ||
    'US';

  const region =
    request.headers.get('x-vercel-ip-country-region') ||
    request.headers.get('X-Vercel-IP-Country-Region') ||
    '';

  const city =
    request.headers.get('x-vercel-ip-city') ||
    request.headers.get('X-Vercel-IP-City') ||
    '';

  return new Response(
    JSON.stringify({ country, region, city }),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store'
      }
    }
  );
}
