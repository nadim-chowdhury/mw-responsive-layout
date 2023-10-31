export default function Header() {
  return (
    <header className="p-4 bg-white shadow sticky top-0">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="uppercase text-3xl font-bold bg-gradient-to-tr from-[#0099aa] to-[#00aa99] text-transparent bg-clip-text">
          Nadim
        </h1>
        <button className="px-3 py-1 rounded bg-gradient-to-tr from-[#0099aa] to-[#00aa99] text-white">
          Dashboard
        </button>
      </nav>
    </header>
  );
}
