export default async function handler(req, res) {
  // Check for secret token
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const path = req.query.path;
    const tag = req.query.tag;

    if (path) {
      await res.revalidate(path);
    }
    
    if (tag) {
      await res.revalidateTag(tag);
    }

    return res.json({ revalidated: true, path, tag });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
