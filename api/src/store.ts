import { nanoid } from 'nanoid';

const ID_SIZE = 14;
declare const UMPAPA: KVNamespace;

export enum StoreTypes {
  AvatarFactory = 'avatar-factory',
}

interface Store {
  get: (id: string) => Promise<JSONValue | null>;
  getKeys: () => Promise<string[]>;
  post: (data: JSONValue) => Promise<string>;
  put: (id: string, data: JSONValue) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

const generateId = (): string => {
  return nanoid(ID_SIZE);
};
const getKeyName = (type: StoreTypes, id: string) => `${type.toString()}:${id}`;
const get = async (type: StoreTypes, id: string): Promise<JSONValue | null> => {
  return UMPAPA.get(getKeyName(type, id), { type: 'json' });
};
const getKeys = async (type: StoreTypes): Promise<string[]> => {
  const list = await UMPAPA.list<JSONValue>({ prefix: `${type.toString()}:` });
  return list.keys.map((k) => k.name);
};
const post = async (type: StoreTypes, data: JSONValue): Promise<string> => {
  const id = generateId();
  await put(type, id, data);
  return id;
};
const put = async (type: StoreTypes, id: string, data: JSONValue): Promise<void> => {
  return UMPAPA.put(getKeyName(type, id), JSON.stringify(data), {
    metadata: { updated: new Date().toUTCString() },
  });
};
const del = async (type: StoreTypes, id: string): Promise<void> => {
  return UMPAPA.delete(getKeyName(type, id));
};

export const store = (type: StoreTypes): Store => {
  return {
    get: (id: string): Promise<JSONValue | null> => get(type, id),
    getKeys: (): Promise<string[]> => getKeys(type),
    post: (data: JSONValue): Promise<string> => post(type, data),
    put: (id: string, data: JSONValue): Promise<void> => put(type, id, data),
    delete: (id: string): Promise<void> => del(type, id),
  };
};
