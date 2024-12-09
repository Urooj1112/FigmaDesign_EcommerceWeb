
'use client';

import ShopProductCard from "./ShopProductCard";

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

export default function ShopProduct() {
    return (
        <div className="container  text-center mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ShopProductCard
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
