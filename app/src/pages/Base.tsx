import { ComponentChildren, h, Fragment } from 'preact';
import { Link } from 'react-router-dom';

const ContainerApp = (props: { children: ComponentChildren }) => {
  return (
    <>
      <main class="bg-white container rounded-sm mx-auto p-4 max-w-4xl">{props.children}</main>
      <footer class="container text-center prose mx-auto p-2 text-sm text-gray-500 max-w-4xl">
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
    </>
  );
};

const FullScreenApp = (props: { children: ComponentChildren }) => {
  return <main class="bg-white w-screen h-screen">{props.children}</main>;
};

const Base = (props: { title?: string; isFullScreen?: boolean; children: ComponentChildren }) => {
  if (props.title) {
    document.title = `${props.title} | umpapa`;
  } else {
    document.title = 'umpapa';
  }
  return (
    <div id="base" class="bg-red-100 w-screen h-screen flex flex-col">
      <header
        id="top-bar"
        class={`w-screen justify-between flex flex-col md:flex-row bg-white px-2 ${
          props.isFullScreen ? 'border-b border-red-200' : 'mb-2'
        }`}
      >
        <div class="text-xl font-bold inline-flex">
          <Link class="px-2" to="/">
            🥁 umpapa
          </Link>
        </div>
        <nav id="main-menu" class="flex flex-wrap leading-loose">
          <Link class="px-2" to="/avatar-factory/new">
            New Avatar Factory
          </Link>
          <Link class="px-2" to="/about">
            About
          </Link>
        </nav>
      </header>
      {props.isFullScreen ? (
        <FullScreenApp>{props.children}</FullScreenApp>
      ) : (
        <ContainerApp>{props.children}</ContainerApp>
      )}
    </div>
  );
};

export default Base;
