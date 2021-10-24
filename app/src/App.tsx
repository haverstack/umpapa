import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const BASE_URL = process.env.NODE_ENV == "production" ? "https://umpapa-api.haverstack.workers.dev" : "http://localhost:8787";

const App = () => {
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
    <div class="bg-red-100 p-4 h-screen">
      <div class="bg-white container rounded-sm mx-auto p-4">{ message }</div>
    </div>
  );
};

export default App;
