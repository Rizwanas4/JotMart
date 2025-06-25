import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext.jsx';
import toast from 'react-hot-toast';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      name: 'Gel Pen Set',
      price: '₹120',
      image: 'https://cdn.grofers.com/app/assets/products/sliding_images/jpeg/dca50666-7044-4b7a-b555-eecce53dcb15.jpg?ts=1723199050',
    },
    {
      name: 'Sticky Notes',
      price: '₹60',
      image: 'https://m.media-amazon.com/images/I/71fEqLRpyVL.jpg',
    },
    {
      name: 'Watercolor Kit',
      price: '₹230',
      image: 'https://m.media-amazon.com/images/I/71BvRvTZAYL.AC_UF1000,1000_QL80.jpg',
    },
    {
      name: 'A4 Size paper',
      price: '₹400',
      image: 'https://rukminim3.flixcart.com/image/850/1000/kkr72q80/paper/w/8/d/8902444892802-a4-paper-edumart-original-imagyf5ymrq9hsfw.jpeg?q=90&crop=false',
    },
    {
      name: 'Scissors',
      price: '₹55',
      image: 'https://m.media-amazon.com/images/I/71hHJujMqRL.jpg',
    },
    {
      name: 'Geometry box',
      price: '₹145',
      image: 'https://bbag.in/cdn/shop/files/h5edzsfT9Zi93zmj8XWG7efhZmXeTO0bxRV4FnIq_8e650587-5917-4997-821a-82b36c83bc0a.jpg?v=1704867803&width=1080',
    },
    {
      name: 'Spiral NoteBook',
      price: '₹150',
      image: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410204771001/FpC56e1Qkp-000000410204771001_1.jpeg',
    },
    {
      name: 'Pencil',
      price: '₹100',
      image: 'https://www.rapiddeliveryservices.in/uploads/webp/93703-.webp',
    },
    {
      name: 'Stapler',
      price: '₹90',
      image: 'https://m.media-amazon.com/images/I/611IBNRk2vL.jpg',
    },
    {
      name: 'Brown Sheet',
      price: '₹50',
      image: 'https://m.media-amazon.com/images/I/61niWcP91nL.jpg',
    },
    {
      name: 'Glue Stick',
      price: '₹100',
      image: 'https://monafstores.com/wp-content/uploads/2020/06/Fevi_Stick.jpg',
    },
    {
      name: 'Labels',
      price: '₹120',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4hYiTyMtA2fQnjZBDn9iRZhB6NNc0I-7MTJCnH5uHbt0VMp0bFUdJd6Krbq9YZme2Kob3YmwxJcxAY8bQeINa4-i1yHKYFBaFgyF7F16-om13Mk03RyDpSQ&usqp=CAc',
    },
    {
      name: 'Calculator',
      price: '₹1300',
      image: 'https://m.media-amazon.com/images/I/61ql7EF+icL.jpg',
    },
    {
      name: 'Ball Point Pen',
      price: '₹10',
      image: 'https://topperskit.com/cdn/shop/files/1_ce16e9a3-31f6-4d99-a670-70bb23856495.jpg?v=1740387985',
    },
    {
      name: 'Pencil Pouch',
      price: '₹80',
      image: 'https://market99.com/cdn/shop/files/pink-zipper-pencil-pouch-avacado-print-pen-and-pencil-cases-3_2048x.jpg?v=1737480854',
    },
    {
      name: 'NoteBook',
      price: '₹70',
      image: 'https://statmo.in/wp-content/uploads/2018/02/Classmate-Notebook-Five-Line-Pages-600x607.jpg',
    },
     {
      name: 'Scale',
      price: '₹15',
      image: 'https://artline-india.com/wp-content/uploads/2023/03/artline-india-scale-30cm-product1.webp',
    },
    {
      name: 'Eraser',
      price: '₹5',
      image: 'https://i0.wp.com/wisycart.com/wp-content/uploads/2023/01/apsara-non-dust-eraser-pack-of-5-419923_1800x1800-jpg.webp',
    },
{
      name: 'Sharpener',
      price: '₹5',
      image: 'https://www.ashokabook.com/wp-content/uploads/2024/06/17566529-1718685959919.jpg',
    },
    {
      name: 'Pencil Box',
      price: '₹100',
      image: 'https://www.vishalmegamart.com/dw/image/v2/BGHT_PRD/on/demandware.static/-/Sites-vmm-gm-master-catalog/default/dw19023b68/images/large/1233009440.jpg?sw=900&sh=900',
    },  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [showMobileMenu, setShowMobileMenu] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-200 to-purple-100 text-gray-800">
      {/* Navbar */}
     <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 py-4">
  <div className="flex items-center justify-between">
    <Link to="/" className="text-purple-600 font-bold text-3xl hover:text-purple-800 transition">
      JOTMART
    </Link>

    {/* Hamburger Icon */}
    <button
      className="md:hidden text-3xl text-purple-600 focus:outline-none"
      onClick={() => setShowMobileMenu(!showMobileMenu)}
    >
      ☰
    </button>

    {/* Desktop Menu */}
    <nav className="hidden md:flex space-x-6">
      <Link to="/" className="text-gray-700 text-lg hover:text-purple-600">Home</Link>
      <Link to="/products" className="text-gray-700 text-lg hover:text-purple-600">Products</Link>
      <Link to="/cart" className="text-gray-700 text-lg hover:text-purple-600">Cart</Link>
      <Link to="/contact" className="text-gray-700 text-lg hover:text-purple-600">Contact</Link>
    </nav>
  </div>

  {/* Mobile Menu */}
  {showMobileMenu && (
    <div className="md:hidden mt-4 space-y-2">
      <Link to="/" className="block text-gray-700 text-lg hover:text-purple-600">Home</Link>
      <Link to="/products" className="block text-gray-700 text-lg hover:text-purple-600">Products</Link>
      <Link to="/cart" className="block text-gray-700 text-lg hover:text-purple-600">Cart</Link>
      <Link to="/contact" className="block text-gray-700 text-lg hover:text-purple-600">Contact</Link>
    </div>
  )}
</header>


      {/* Search bar */}
      <div className="pt-32 px-4 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md p-3 rounded-lg border border-purple-300 bg-purple-50 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Product grid */}
      <main className="max-w-7xl mx-auto px-4 pb-16 pt-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 flex flex-col items-center space-y-2 shadow-md transform transition-transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain rounded"
              />
              <h3 className="text-lg font-semibold text-purple-700 text-center">
                {product.name}
              </h3>
              <p className="text-gray-800 font-bold">{product.price}</p>
              <button
  onClick={() => {
    addToCart({
      name: product.name,
      price: parseInt(product.price.replace("₹", "")),
      image: product.image
    });
    toast.success("Added to cart successfully");
  }}
  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition"
>
  Add to Cart
</button>

            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
