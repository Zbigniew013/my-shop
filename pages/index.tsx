import Footer from '@/components/footer';
import Header from '@/components/header';

function HomePage() {
  return (
    <div className='group flex flex-col h-screen'>
      {/* <Header /> */}
      <main className='max-w-5xl w-full mx-auto bg-stone-100 h-screen '>
        <h1 className='text-3xl font-bold text-center underline text-red-400 '>
          Main Page
        </h1>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
export default HomePage;
