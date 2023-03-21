const DATA = {
  id: '1',
  imageUrl: 'https://picsum.photos/seed/picsum/200/300',
  imageAlt: 'Ibanez mkII',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quasi distinctio vel deleniti a nostrum omnis fugit alias soluta maxime, iusto maiores facere quas quae corporis facilis adipisci animi ex?',
  rating: 4.2,
};

interface RatingProps {
  rating: number;
}
function Rating(props: RatingProps) {
  return <p className='text-amber-500 font-bold'>{props.rating}</p>;
}

interface ProductProps {
  data: {
    id: string;
    imageUrl: string;
    imageAlt: string;
    description: string;
    rating: number;
  };
}
function Product({ data }: ProductProps) {
  return (
    <div>
      <img src={data.imageUrl} alt={data.imageAlt} className='h-80 w-60' />
      <p className='w-60 font-light'>{data.description}</p>
      <Rating rating={data.rating} />
    </div>
  );
}

function ElectricGuitarPage() {
  return (
    <div className='flex flex-col relative flex-1 max-w-5xl w-full mx-auto bg-stone-100 h-screen '>
      <h1 className=' text-3xl font-bold text-center underline text-red-400 '>
        The Electric Guitar Page
      </h1>
      <div className='grid grid-cols-4 gap-4'>
        <Product data={DATA} />
      </div>
    </div>
  );
}

export default ElectricGuitarPage;
