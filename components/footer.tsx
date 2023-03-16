import Link from 'next/link';

function Footer() {
  return (
    <div>
      <footer className='flex max-w-5xl mx-auto h-20 w-full flex-row items-center justify-around border-t border-stone-300 bg-white font-light '>
        <div>GuitarShop ©️ 2023</div>
        <Link href='/about'>About Us</Link>
        <Link href='/contact'>Contact Us</Link>
      </footer>
    </div>
  );
}

export default Footer;
