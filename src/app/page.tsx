import Logo from '@/components/Logo.tsx';
import Link from 'next/link';
import Icon from '@/components/Icon.tsx';

export default function Home() {
  return (
    <section className="flex items-center justify-between h-20 bg-white p-4">
      <Logo width={100} height={100} />
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
      <div className="flex gap-x-2">
        <Link href="/login">
          Вход
        </Link>
        <Link href="/registration">
          Регистрация
        </Link>
      </div>
    </section>
  );
}
