import Link from 'next/link';

function Header() {
  return (
    <div>
      <header className='flex h-20 max-w-5xl w-full mx-auto flex-row items-center justify-around border-b border-stone-300 bg-white'>
        <div className='text-2xl font-thin '>
          <Link href='/'>Guitar Shop</Link>
        </div>
        <div className='items-center space-x-8 font-light'>
          <Link href='/products/electric'>Electric Guitars</Link>
          <Link href='/products/acoustic'>Acoustic Guitars</Link>
          <Link href='/products/strings'>Strings</Link>
          <Link href='/account'>Account</Link>
          <Link href='/cart'>Cart</Link>
        </div>
      </header>
    </div>
  );
}

export default Header;

{
  /* <button className='flex items-center space-x-3 rounded border border-stone-300 px-4 py-2 text-stone-600 transition hover:border-stone-600 hover:text-stone-900 '></button> */
}
