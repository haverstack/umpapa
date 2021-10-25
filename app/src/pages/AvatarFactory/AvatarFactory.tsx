import { h } from 'preact';
import { useParams } from 'react-router-dom';

const AvatarFactory = () => {
  const { slug } = useParams();

  return <article>Avatar Factory: {slug}</article>;
};

export default AvatarFactory;
