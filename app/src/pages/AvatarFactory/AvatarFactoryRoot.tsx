import { h } from 'preact';
import { Outlet } from 'react-router-dom';
import Base from '../Base';

export const AvatarFactoryRoot = () => {
  return (
    <Base title="Avatar Factory">
      <Outlet />
    </Base>
  );
};

export default AvatarFactoryRoot;
