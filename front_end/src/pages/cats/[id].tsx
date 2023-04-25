import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Products = ({product}:any) => {
  const router = useRouter();
  console.log("=====>",product);
   if(router.isFallback){
    return<div>Уншиж байна...</div>
   }
  return (
    <div className='bg-cyan-500 h-full'>
      <div className='container mx-auto'>
        <h1 className='text-voilet-600 text-4xl'>{product.title}</h1>
        <div className='group'>
          <Image src={product.poster} width={300}height={200}alt='poster'/>
          <p className='text-bold'>
            {product.rating}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Products