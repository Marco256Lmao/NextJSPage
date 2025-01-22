import { GetStaticPaths, GetStaticProps } from 'next';
import { mockedProducts, Product } from '../../data/MockedData';
import Image from 'next/image';
import Head from 'next/head';

interface ProductDetailProps {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockedProducts.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const product = mockedProducts.find((item) => item.id === Number(id));

  return {
    props: {
      product,
    },
  }
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name} product details</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="p-8 flex flex-col h-[calc(100%-5rem)] absolute md:top-20 md:left-72 md:w-[calc(100%-18rem)] md:flex-row flex-grow">
        <div className="w-full md:w-1/2 flex justify-center items-start">
          <Image src={product.picture} alt={product.name} className="w-[80%] max-h-[100%]" />
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <p className="text-gray-600">{product.description}</p>
          <div className="flex flex-row md:mt-40 mt-10">
            <h1 className="text-2xl text-orange-400 font-bold">Price :</h1>
            <h1 className="text-2xl text-black font-bold pl-8">{product.price}$</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
