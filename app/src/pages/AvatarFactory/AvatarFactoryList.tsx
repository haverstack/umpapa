import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import api from '../../lib/api';

const AvatarFactoryList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [factoryError, setFactoryError] = useState<string | null>(null);
  const [factoryIds, setFactoryIds] = useState<string[] | null>(null);

  useEffect(() => {
    const getFactories = async () => {
      try {
        const result = await api.get('/avatar-factory');
        if (result instanceof Object) {
          const data = result as unknown as JSONArray;
          console.log(data);
          setFactoryIds(data.map((item: JSONValue) => String(item).split(':')[1]));
        } else {
          throw new Error(`Unexpected data type! ${result}`);
        }
      } catch (e) {
        setFactoryError(e instanceof Error ? e.message : String(e));
      }
      setIsLoaded(true);
    };
    getFactories();
  }, []);
  if (!isLoaded || factoryIds === null) {
    return <div>Loading...</div>;
  }
  if (factoryError) {
    return <div>{factoryError}</div>;
  }

  return (
    <article>
      <h2>Avatar Factory List</h2>
      <ul>
        {factoryIds.map((id: string) => (
          <li key={id}>
            <a href={`/avatar-factory/${id}`}>{id}</a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default AvatarFactoryList;
