import { ReactNode } from 'react';

import './styles.scss';

interface TopNavProps {
  children: ReactNode;
}

function TopNav({ children }: TopNavProps) {
  return (
    <>
      <h1>TopNav</h1>
      {children}
    </>
  );
};

export default TopNav;
