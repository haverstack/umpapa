import { ComponentChildren, h } from 'preact';
import { Link } from 'react-router-dom';

const Base = (props: { title?: string; children: ComponentChildren }) => {
  if (props.title) {
    document.title = `${props.title} | umpapa`;
  } else {
    document.title = 'umpapa';
  }
  return (
    <div id="base" class="bg-red-100 p-0 lg:p-4 h-screen">
      <header
        id="top-bar"
        class="container justify-between flex flex-col md:flex-row bg-white rounded-sm mx-auto mb-2 px-2"
      >
        <div class="text-2xl font-bold inline-flex">
          <Link class="px-2 py-1" to="/">
            umpapa
          </Link>
        </div>
        <nav id="main-menu" class="flex flex-wrap pr-2 leading-loose">
          <Link class="ml-2 px-2 py-1" to="/avatar-factory/new">
            New Avatar Factory
          </Link>
          <Link class="ml-2 px-2 py-1" to="/about">
            About
          </Link>
        </nav>
      </header>
      <main class="bg-white container rounded-sm mx-auto p-4">{props.children}</main>
      <footer class="container text-center prose mx-auto p-2 text-sm text-gray-500">
        Except where otherwise noted, everything by <a href="/">cuibonobo</a> on this website is{' '}
        <a
          title="Creative Commons CC0"
          href="http://creativecommons.org/publicdomain/zero/1.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          dedicated to the public domain
        </a>
        .
      </footer>
    </div>
  );
};

export default Base;
