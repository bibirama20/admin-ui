import "./App.css";

function App() {
  return (
    <div className="p-6 space-y-10">
      {/* LATIHAN 1 — NAVBAR FLEXBOX */}
      <section>
        <h2 className="text-xl font-bold mb-2">LATIHAN 1</h2>
        <nav className="flex flex-col md:flex-row justify-between  bg-gray-100 p-4 rounded-lg">
          {/* Logo kiri */}
          <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>
          {/* Menu kanan */}
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </section>
 <hr />

      {/* LATIHAN 2 - GRID GALERI */}
<h2 className="mb-2 font-semibold text-gray-800">LATIHAN 2</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <img
    src="https://www.placehold.co/200x200"
    alt="Gambar Galeri"
    className="h-48 "
  />
  <img
    src="https://www.placehold.co/200x200"
    alt="Gambar Galeri"
    className="h-48 "
  />
  <img
    src="https://www.placehold.co/200x200"
    alt="Gambar Galeri"
    className="h-48"
  />
  <img
    src="https://www.placehold.co/200x200"
    alt="Gambar Galeri"
    className="h-48"
  />
  <img
    src="https://www.placehold.co/200x200"
    alt="Gambar Galeri"
    className="h-48"
  />
  <img
    src="https://www.placehold.co/200x200"
    alt="Gambar Galeri"
    className="h-48"
  />
</div>
 <hr />

      {/* LATIHAN 4 — LAYOUT DASHBOARD */}
      <section>
        <h2 className="text-xl font-bold mb-2">LATIHAN 4</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 min-h-[100vh] gP-2">
          <header className="bg-gray-300 p-4 md:col-span-12 rounded">Header</header>
          <aside className="bg-gray-200 p-4 md:col-span-3 rounded">Sidebar</aside>
          <main className="bg-white p-4 border md:col-span-9 rounded">Content</main>
          <footer className="bg-gray-300 p-4 md:col-span-12 rounded">Footer</footer>
        </div>
      </section>

      <hr />

      {/* LATIHAN 5 — CARD PRODUCT FLEXBOX */}
  <section>
  <h2 className="mb-2 text-lg font-semibold text-gray-800">LATIHAN 5</h2>
  <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow md:flex-row md:items-start md:text-left md:gap-4 bg-white hover:shadow-lg transition">
    <img
      src="https://www.placehold.co/100x100"
      alt="Gambar Produk"
      className="rounded-md object-cover"
    />
    <div className="flex flex-col p-4">
      <h3 className="font-bold text-lg text-gray-600">Nama Produk</h3>
      <p className="text-sm text-gray-600 mt-1">
        Deskripsi produk singkat
      </p>
    </div>
  </div>
</section>

    </div>
  );
}

export default App;
