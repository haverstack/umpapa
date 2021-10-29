import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import api from '../../lib/api';

const ID_LENGTH = 10;

interface Factory {
  name: string;
  description: string;
  document?: Document;
}

interface Document {
  layers: FactoryLayer[];
}

enum LayerType {
  single,
  multiple,
  background,
}

interface FactoryLayer {
  id: string;
  name: string;
  type: LayerType;
  selected: boolean;
  drawings: FactoryDrawing[];
  rotationPoint: Point;
  parentId: string | null;
}

enum ImageType {
  png,
  svg,
}

interface FactoryDrawing {
  id: string;
  type: ImageType;
  data: string;
}

interface Point {
  x: number;
  y: number;
  z: number;
}

const AvatarFactoryEdit = () => {
  const { slug } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [factoryError, setFactoryError] = useState<string | null>(null);
  const [factoryData, setFactoryData] = useState<Factory | null>(null);

  const getId = (): string => {
    return nanoid(ID_LENGTH);
  };

  useEffect(() => {
    const getFactoryData = async () => {
      try {
        const result = await api.get(`/avatar-factory/${slug}`);
        if (result instanceof Object) {
          const data = result as unknown as Factory;
          console.log('received data', data);
          if (!('document' in data)) {
            data.document = {
              layers: [
                {
                  id: getId(),
                  name: 'Background',
                  type: LayerType.background,
                  selected: true,
                  drawings: [
                    {
                      id: getId(),
                      type: ImageType.svg,
                      data: '<g><rect x="0" y="0" width="512" height="512" fill="#ffffff" stroke="#000000" pointer-events="all"/></g>',
                    },
                  ],
                  rotationPoint: { x: 0, y: 0, z: 0 },
                  parentId: null,
                },
              ],
            };
          }
          console.log('setting data', data);
          setFactoryData(data);
        } else {
          throw new Error(`Unexpected data type! ${result}`);
        }
      } catch (e) {
        setFactoryError(e instanceof Error ? e.message : String(e));
      }
      setIsLoaded(true);
    };
    getFactoryData();
  }, [slug]);

  if (!isLoaded || factoryData === null) {
    return <div>Loading...</div>;
  }
  if (factoryError) {
    return <div>{factoryError}</div>;
  }

  return (
    <article>
      <h2>Avatar Factory: {slug} Edit</h2>
      <code>{JSON.stringify(factoryData, null, 2)}</code>
    </article>
  );
};

export default AvatarFactoryEdit;
