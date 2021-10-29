import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Base from './Base';
import api from '../lib/api';

const Home = () => {
  const [message, setMessage] = useState('Loading...');

  const getMessage = async () => {
    try {
      const data = await api.get('/');
      if (
        data instanceof Object &&
        typeof (data as Record<string, string>)['message'] === 'string'
      ) {
        setMessage((data as Record<string, string>)['message']);
      }
    } catch (e) {
      setMessage(e instanceof Error ? e.message : String(e));
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return <Base>{message}</Base>;
};

export default Home;
