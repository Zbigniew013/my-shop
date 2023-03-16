import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

function Layout(props: { children: ReactNode }) {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
