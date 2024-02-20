// pages/Chutlunds.js

import React from 'react';

function data2({ data }) {
  // Render your component with fetched data
  return (
    <div>
      {/* Render fetched data */}
      <ul>
        {JSON.stringify(data)}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch('https://chutlunds.com/api/spangbang/homepage');
  const data = await res.json();

  // Pass data to the page component props
  return {
    props: {
      data,
    },
  };
}

export default data2;
export const runtime = "edge";
