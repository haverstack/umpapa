import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Base from './Base';

const BASE_URL = process.env.NODE_ENV == "production" ? "https://umpapa-api.haverstack.workers.dev" : "http://localhost:8787";

const Home = () => {
  const [message, setMessage] = useState("Loading...");

  const getMessage = async () => {
    const resp = await fetch(
      BASE_URL
    );
    setMessage(await resp.text());
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <Base>
      { message }
    </Base>
  );
};

export default Home;
