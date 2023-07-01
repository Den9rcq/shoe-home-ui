export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav>
        <button>Вход</button>
        <button>Регистрация</button>
      </nav>

      {children}
    </section>
  )
}
