'use client';

import Marquee from 'react-fast-marquee';

import Image from 'next/image';
import adidas from '../icon/adidas.svg';
import tommyHilfiger from '../icon/tommy-hilfiger.svg';
import vans from '../icon/vans.svg';
import calvinKlein from '../icon/calvin-klein.svg';
import fila from '../icon/fila.svg';
import newBalance from '../icon/new-balance.svg';
import salomon from '../icon/salomon.svg';
import reebok from '../icon/reebok.svg';
import puma from '../icon/puma.svg';
import nike from '../icon/nike.svg';
import asics from '../icon/asics.svg';

const brands = [adidas, tommyHilfiger, vans, calvinKlein, fila,
  newBalance, salomon, reebok, puma, nike, asics,
];

function MarqueeBrands() {
  return (
    <Marquee
      autoFill
      pauseOnHover
      speed={100}
      gradient
      gradientColor={[243, 244, 246]}
    >
      {brands.map((brand, i) => (
        <Image
            // eslint-disable-next-line react/no-array-index-key
          key={i}
          src={brand}
          alt="brand"
          width={120}
          className="mr-[130px]"
        />
      ))}
    </Marquee>
  );
}

export default MarqueeBrands;
