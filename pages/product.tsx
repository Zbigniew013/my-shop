const DATA = {
  id: 1,
  title: 'Ibanez',
  imageUrl: 'https://picsum.photos/seed/picsum/200/300',
  imageAlt: 'Ibanez mkII',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quasi distinctio vel deleniti a nostrum omnis fugit alias soluta maxime, iusto maiores facere quas quae corporis facilis adipisci animi ex?',
  rating: 4.2,
};

interface RatingProps {
  rating: number;
}
export function Rating(props: RatingProps) {
  return <p className='text-amber-500 font-bold px-4'>{props.rating}</p>;
}

interface ProductProps {
  data: {
    id: number;
    title: string;
    imageUrl: string;
    imageAlt: string;
    description: string;
    rating: number;
  };
}
export function Product({ data }: ProductProps) {
  return (
    <div>
      <img
        src={data.imageUrl}
        alt={data.imageAlt}
        className='h-80 w-60 object-contain'
      />
      <h2 className='font-bold text-2xl px-4 '>{data.title}</h2>
      <p className='w-60 font-light p-4'>{data.description}</p>
      <Rating rating={data.rating} />
    </div>
  );
}

export function Home() {
  return (
    <div>
      <Product data={DATA} />
    </div>
  );
}
