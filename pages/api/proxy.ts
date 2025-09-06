import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Example API route that acts as a proxy. In a real application you can
 * forward requests to external services here and return sanitized results.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  if (!url || Array.isArray(url)) {
    res.status(400).json({ error: 'URL parameter is required' });
    return;
  }
  // In this stub we simply return the URL back to the client. Implement your
  // own fetch logic here but ensure you validate and sanitize inputs to
  // prevent SSRF or credential leakage.
  res.status(200).json({ proxiedUrl: url });
}
