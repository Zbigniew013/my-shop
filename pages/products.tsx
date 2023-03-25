import { InferGetStaticPropsType } from 'next';
import { Product } from './product';

function ProductsPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='flex relative flex-1 max-w-5xl w-full mx-auto bg-stone-100 h-screen '>
      <ul className='grid grid-cols-4 mx-auto gap-5'>
        {data.map(product => {
          return (
            <li key={product.id}>
              <Product
                data={{
                  id: product.id,
                  imageUrl: product.image,
                  imageAlt: product.title,
                  description: product.description,
                  rating: product.rating.rate,
                }}
              />
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
