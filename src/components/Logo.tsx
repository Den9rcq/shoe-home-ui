import Image from 'next/image';
import Link from 'next/link';

interface ILogo {
  width: number
  height: number
  href?: string
}

export default function Logo({ width, height, href }: ILogo) {
  return (
    <Link href={href || '/'}>
      <Image
        src="/next.svg"
        alt="Логотип"
        width={width}
        height={height}
      />
    </Link>
  );
}
