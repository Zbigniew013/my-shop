import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

function Layout(props: { children: ReactNode }) {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
