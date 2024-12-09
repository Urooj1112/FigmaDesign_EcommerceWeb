
'use client';

import ProductCard from "./ProductCards.tsx";

const products = [
  {
    id: 1,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id1.png',
    department: 'English Department',
  },
  {
    id: 2,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id2.png',
    department: 'English Department',
  },
  {
    id: 3,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id3.png',
    department: 'English Department',
  },
  {
    id: 4,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id4.png',
    department: 'English Department',
  },
  {
    id: 5,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id5.png',
    department: 'English Department',
  },
  {
    id: 6,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id6.png',
    department: 'English Department',
  },
  {
    id: 7,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id7.png',
    department: 'English Department',
  },
  {
    id: 8,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id8.png',
    department: 'English Department',

  },
];

export default function BestProduct() {
  return (
    <div className="container  text-center mx-auto px-4 py-12">
      <h4 className="text-2xl font-bold mb-4 text-[#737373]">Featured Products</h4>
      <h3 className="text-3xl font-bold  text-[#252B42] mb-4">BESTSELLER PRODUCTS</h3>
      <p className="text-gray-600  mt-[-10px] mb-8 text-[#737373]">Explore our featured products available now.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            department={product.department}
            price={product.price}
            originalPrice={product.originalPrice}
            imageUrl={product.imageUrl}



          />
        ))}
      </div>
    </div>
  );
}
