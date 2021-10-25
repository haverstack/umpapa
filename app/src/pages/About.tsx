import { h } from 'preact';
import Base from './Base';

const About = () => {
  return (
    <Base title="About">
      <article class="prose">
        <p>
          This is <strong>umpapa</strong>, an app for creating avatars out of swappable parts! (The
          name sounds like a 🥁.)
        </p>
        <p>
          This app was heavily inspired by{' '}
          <a href="https://picrew.me/" target="_blank" rel="noopener noreferrer">
            Picrew
          </a>
          . I was motivated to create my own version because:
        </p>
        <ul>
          <li>
            Picrew is a Japanese app and I thought it would be cool to adapt it to an
            English-speaking audience
          </li>
          <li>
            I wanted to make it even easier for artists to create their own avatar generators by
            allowing them to draw directly in the app
          </li>
        </ul>
        <p>
          If you have suggestions or just want to say hello, I would love to hear from you! You can
          find me on{' '}
          <a href="https://twitter.com/cuibonobo" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>{' '}
          or find other ways to reach me on my{' '}
          <a href="https://cuibonobo.com" target="_blank" rel="noreferrer">
            website
          </a>
          .
        </p>
      </article>
    </Base>
  );
};

export default About;
