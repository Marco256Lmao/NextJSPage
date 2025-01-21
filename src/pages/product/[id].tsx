import { useRouter } from 'next/router';
import { mockedProducts } from '../../data/MockedData';
import Image from 'next/image';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = mockedProducts.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
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
  );
};

export default ProductDetail;
