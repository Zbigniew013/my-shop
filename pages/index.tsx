import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';

function HomePage() {
  return (
    <>
      <div>
        <div className='flex h-20 max-w-5xl w-full mx-auto flex-row items-center justify-around border-b border-stone-300 bg-white'>
          <div className='text-2xl font-thin '>
            <Link href='/'>Guitar Shop</Link>
          </div>
          <div className='items-center space-x-8 font-light'>
            <Link href='/products/electric'>Electric Guitars</Link>
            <Link href='/products/acoustic'>Acoustic Guitars</Link>
            <Link href='/products/strings'>Strings</Link>
            <Link href='account'>Account</Link>
            <Link href='cart'>Cart</Link>
          </div>
        </div>
      </div>
      <h1 className='text-3xl max-w-5xl mx-auto font-bold text-center w-full bg-stone-200 h-screen underline text-red-400'>
        Hello world!
      </h1>
      <div>
        <footer className='flex sticky max-w-5xl mx-auto h-20 w-full flex-row items-center justify-around border-t border-stone-300 bg-white font-light '>
          <div>GuitarShop ©️ 2023</div>
          <Link href='about'>About Us</Link>
          <Link href='contact'>Contact Us</Link>
        </footer>
      </div>
    </>
  );
}
export default HomePage;
