'use client';

import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://192.168.1.10:5130/api/v1/product/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json:charset=utf-8',
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setProducts(r.map((product) => ({ ...product, image: product.image.split(',') })));
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!products.length && loading) {
      setProducts([
        {
          id: 1, name: 'Nike', price: 20000, image: 'img1.jpg',
        },
        {
          id: 2, name: 'Adidas', price: 15000, image: 'img2.jpg',
        },
        {
          id: 3, name: 'Puma', price: 18000, image: 'img3.jpg',
        },
        {
          id: 4, name: 'NB', price: 25000, image: 'img1.jpg',
        },
        {
          id: 5, name: 'Reebok', price: 12000, image: 'img2.jpg',
        },
      ]);
    }
  }, [loading]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={`http://192.168.1.14:5001/product/${product.id}`} className="group hover:opacity-75">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.image[0]}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {`${product.price.toFixed(2)} ₽`}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
