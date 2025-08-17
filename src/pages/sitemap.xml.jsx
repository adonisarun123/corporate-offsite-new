import { generateSitemap } from '../lib/sitemap';

export default function Sitemap() {
  // This page is rendered as XML, not HTML
  return null;
}

export async function getServerSideProps({ res }) {
  const sitemap = await generateSitemap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
