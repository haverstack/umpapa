import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Base from './Base';
import api from '../lib/api';

const Home = () => {
  const [message, setMessage] = useState('Loading...');

  const getMessage = async () => {
    const resp = await api.get('/');
    setMessage(await resp.text());
  };

  useEffect(() => {
    getMessage();
  }, []);

  return <Base>{message}</Base>;
};

export default Home;
