import { ReactNode } from 'react';

interface CustomersProps {
  children: ReactNode;
}

function Customers({ children }: CustomersProps) {
  return (
    <>
      <h1>Customers</h1>
      {children}
    </>
  );
}

export default Customers;
