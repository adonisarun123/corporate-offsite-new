import { generateRobots } from '../lib/robots';

export default function Robots() {
  // This page is rendered as text, not HTML
  return null;
}

export async function getServerSideProps({ res }) {
  const robots = generateRobots();

  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();

  return {
    props: {},
  };
}
