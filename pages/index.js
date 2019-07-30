import React from 'react';
import Link from 'next/link';

export default () => {
  return (
    <div>
      Hello world
      <div>
        <Link href="/static">
          <a>To Static</a>
        </Link>
      </div>
      <div>
        <Link href="/dynamic">
          <a>To Dynamic</a>
        </Link>
      </div>
    </div>
  );
};
