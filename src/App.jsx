import image from './assets/thmb.jpg'

function App() {

  return (
    <>
      <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <a href="/home" className="text-2xl font-bold text-gray-800">GameZero</a>
              <ul className="flex space-x-6">
                  <li><a href="/home" className="text-gray-800 hover:text-gray-600">Home</a></li>
                  <li><a href="/menu" className="text-gray-800 hover:text-gray-600">About</a></li>
                  <li><a href="/products" className="text-gray-800 hover:text-gray-600">Products</a></li>
                  <li><a href="/contact" className="text-gray-800 hover:text-gray-600">Contact</a></li>
              </ul>
          </div>
      </nav>
      <main>
        <div className="">
          <img className='h-full' src={image} alt="" />
          <h1 className='text-black text-7xl w-[30rem] ml-28	'>YOUR OWN WORLD IN ONE SINGLE PAGE</h1>
          <button className='p-1 m-1 bg-[#964B00] text-white rounded-lg ml-28 mt-5'>Contact US</button>
        </div>

      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
            <p className="mb-4">&copy; 2024 GameZero. All rights reserved.</p>
            <ul className="flex justify-center space-x-6">
                <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            </ul>
        </div>
      </footer>
    </>
  )
}

export default App
