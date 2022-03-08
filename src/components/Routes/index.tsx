import { ReactNode } from 'react';

interface RoutesProps {
  children: ReactNode;
}

function Routes({ children }: RoutesProps) {
  return (
    <>
      <h1>Routes</h1>
      {children}
    </>
  );
}

export default Routes;
