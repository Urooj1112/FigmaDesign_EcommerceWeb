'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ShopProductCardProps {
    id: number;
    title: string;
    department: string;
    originalPrice: string;
    price: string;
    imageUrl: string;


}

export default function ShopProductCard({ id, title, price, originalPrice, imageUrl, department }: ShopProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/images/products/${id}`}>

                <Image
                    src={imageUrl}
                    alt={title}
                    width={200}
                    height={300}
                    className="w-full"
                />

            </Link>
            <div className="p-4">
                <h5 className="text-xl font-bold text-[#252B42] mb-2">{title}</h5>
                <p className="text-[#737373] mb-2">{department}</p>
                <div className="flex items-center justify-between">
                    <span className="text-[#BDBDBD] font-bold line-through ml-[50px]">${originalPrice}</span>
                    <span className="text-[#23856D] font-bold mr-[50px]">${price}</span>

                </div>
            </div>
        </div>
    );
}