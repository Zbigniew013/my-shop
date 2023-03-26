import { InferGetStaticPropsType } from 'next';
// import Product from './product';

function ProductsPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='flex relative flex-1 max-w-5xl w-full mx-auto bg-stone-100 h-screen '>
      <ul className='grid grid-cols-4 mx-auto gap-5'>
        {data.map(product => {
          return (
            <li key={product.id}>
              <div>
                <picture>
                  <img
                    src={product.image}
                    alt={product.title}
                    className='h-80 w-60 object-contain'
                  />
                </picture>
                <h2 className='font-bold text-2xl px-4 '>{product.title}</h2>
                <p className='w-60 font-light p-4'>{product.description}</p>
                <p className='text-amber-500 font-bold px-4'>
                  {product.rating.rate}
                </p>
                {/* <Rating rating={product.rating} /> */}
              </div>
              {/* <Product
                data={{
                  id: product.id,
                  title: product.title,
                  imageUrl: product.image,
                  imageAlt: product.title,
                  description: product.description,
                  rating: product.rating.rate,
                }} */}
              {/* /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsPage;

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
