import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        LATIHAN 1
        <nav className="p-4 bg-gray-100 flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-4 md:mb-0">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-48 h-48 object-cover"
          />
        </div>
        <hr />
        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2 text-center items-center">
          <div className="bg-gray-200 p-6 rounded">
            <h3 className="text-lg mb-2">Basic</h3>
            <p className="text-xl">Rp 50.000</p>
          </div>
          <div className="bg-blue-400 text-white p-7 rounded">
            <h3 className="text-lg mb-2">Pro</h3>
            <p className="text-xl">Rp 100.000</p>
          </div>
          <div className="bg-gray-200 p-6 rounded">
            <h3 className="text-lg mb-2">Premium</h3>
            <p className="text-xl">Rp 200.000</p>
          </div>
        </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 min-h-screen">
          <header className="bg-gray-300 p-6 col-span-full">
            <h2 className="text-gray-700">Header</h2>
          </header>
          <aside className="bg-gray-200 p-6 md:col-span-3">
            <h3 className="text-gray-700">Sidebar</h3>
          </aside>
          <main className="bg-white p-6 border border-gray-400 md:col-span-9">
            <h3 className="text-gray-700">Content</h3>
          </main>
          <footer className="bg-gray-300 p-6 col-span-full">
            <h2 className="text-gray-700">Footer</h2>
          </footer>
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border border-gray-400 rounded flex flex-col md:flex-row gap-4 items-center md:items-center">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="w-20 h-20 object-cover flex-shrink-0"
          />
          <div className="text-center md:text-left md:flex md:flex-col md:justify-center">
            <h3 className="font-bold text-base mb-1">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
