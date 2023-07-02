import Logo from '@/components/Logo.tsx';
import Link from 'next/link';
import Icon from '@/components/Icon.tsx';

export default function Home() {
  return (
    <section className="flex items-center justify-between h-20 bg-white p-4">
      <div className="flex items-center gap-x-4">
        <Logo width={100} height={100} />
        <a href="https://t.me/Den9_rcq" target="_blank" rel="noreferrer">
          <Icon icon="telegram" theme="brands" size="lg" />
        </a>
      </div>
      <div className="flex gap-x-2 relative">
        <input
          type="text"
          className="pl-8 pr-2 py-1 border border-400 rounded-md text-sm"
          placeholder="Поиск..."
        />
        <Icon
          icon="search"
          theme="solid"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
      <div className="flex items-center gap-x-4">
        <a href="tel:+79999999999">
          <Icon icon="phone" theme="solid" />
        </a>
        <a href="mailto:example@example.com">
          <Icon icon="envelope" theme="solid" />
        </a>
        <div className="flex gap-x-2">
          <Link href="/login">
            Вход
          </Link>
          <Link href="/registration">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}
