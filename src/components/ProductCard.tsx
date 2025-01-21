import React from 'react';
import { Product, ProductStatus } from 'data/MockedData';
import { IconButton } from '@mui/material';
import { Description, Paid, Visibility } from '@mui/icons-material';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getStatusText = () => {
    switch (product.status) {
      case ProductStatus.ACTIVATED:
        return 'Activation';
      case ProductStatus.DEACTIVATED:
        return 'Deactivated';
      case ProductStatus.SUSPENDED:
        return 'Suspended';
    }
  }

  const getStatusBgColor = () => {
    switch (product.status) {
      case ProductStatus.ACTIVATED:
        return 'bg-white';
      case ProductStatus.DEACTIVATED:
        return 'bg-red-50';
      case ProductStatus.SUSPENDED:
        return 'bg-yellow-50';
    }
  }

  const getStatusTextColor = () => {
    switch (product.status) {
      case ProductStatus.ACTIVATED:
        return 'text-green-400';
      case ProductStatus.DEACTIVATED:
        return 'text-red-400';
      case ProductStatus.SUSPENDED:
        return 'text-yellow-400';
    }
  }

  return (
    <>
      <div key={product.id} className={`${getStatusBgColor()} p-5 rounded-lg shadow-md`}>
        <div className="w-full relative">
          <h2 className="text-blue-400 font-bold">{product.name}</h2>
          <Link key={product.id} href={`/product/${product.id}`}>
            <IconButton className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:text-blue-300 bg-blue-50">
              <Visibility className="text-blue-400" />
            </IconButton>
          </Link>
        </div>
        <div className="flex flex-col mt-4 mb-3">
          <div className="flex flex-row mb-1">
            <Paid className="text-orange-400 mr-2" />
            <p className="text-gray-400 mr-2">Price:</p>
            <p className="text-gray-400 font-semibold">{product.price}$</p>
          </div>
          <div className="flex flex-row">
            <Description className="text-orange-400 mr-2" />
            <p className="text-gray-400 truncate">{product.description}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-row">
          <p className={`normal-case mr-3 ${getStatusTextColor()}`}>{getStatusText()}:</p>
          <p className={`font-semibold ${getStatusTextColor()}`}>{product.date}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
