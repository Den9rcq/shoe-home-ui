import Link from 'next/link';

export default function Home() {
  return (
    <section className="p-10">
      <Link className="p-2 border-2 border-gray-400 rounded-md hover:shadow" href="/dashboard">
        Dashboard
      </Link>
    </section>
  );
}
