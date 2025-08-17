import React from 'react';

export function JsonLd({ data }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
