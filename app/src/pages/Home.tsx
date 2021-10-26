import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Base from './Base';
import api from '../lib/api';

const Home = () => {
  const [message, setMessage] = useState('Loading...');

  const getMessage = async () => {
    const data = await api.get('/');
    if (typeof data['message'] === 'string') {
      setMessage(data['message']);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return <Base>{message}</Base>;
};

export default Home;
