import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav>
        <button type="button">Вход</button>
        <button type="button">Регистрация</button>
      </nav>

      {children}
    </section>
  );
}
