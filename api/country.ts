// A Vercel Function: which country the visitor is in, from the header
// Vercel adds to every request (worked out from their IP address, so no
// location permission is asked for). The page uses it to open in Indonesian,
// Chinese or English. Empty when Vercel doesn't know, e.g. running locally.

export function GET(request: Request) {
  const country = request.headers.get("x-vercel-ip-country") ?? ""
  return Response.json({ country }, { headers: { "cache-control": "private, no-store" } })
}
