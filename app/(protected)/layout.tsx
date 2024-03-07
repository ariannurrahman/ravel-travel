import { Header } from '@/ui/header';

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default ProtectedLayout;
