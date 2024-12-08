import Image from 'next/image';

export default function slider3() {
  return (
    <section className="px-4 py-8 mx-[50px]">
      <h2 className="text-xl font-semibold mb-6">The Essentials</h2>
      <div className="flex flex-wrap justify-between">
        {/* Men's Section */}
        <div className="w-full md:w-1/3 p-2 border border-gray-200 rounded relative">
          <Image
            src="/12.png" // Replace with your image path
            alt="Men's Essentials"
            width={500}
            height={500}
            className="rounded"
          />
          <button className="absolute bottom-4 left-4 bg-white px-3 py-1 text-sm font-medium rounded-full hover:bg-gray-200 transition duration-300">
            Men
          </button>
        </div>

        {/* Women's Section */}
        <div className="w-full md:w-1/3 p-2 border border-gray-200 rounded relative">
          <Image
            src="/13.png" // Replace with your image path
            alt="Women's Essentials"
            width={500}
            height={500}
            className="rounded"
          />
          <button className="absolute bottom-4 left-4 bg-white px-3 py-1 text-sm font-medium rounded-full hover:bg-gray-200 transition duration-300">
            Women
          </button>        </div>

        {/* Kids' Section */}
        <div className="w-full md:w-1/3 p-2 border border-gray-200 rounded relative">
          <Image
            src="/14.png" // Replace with your image path
            alt="Kids' Essentials"
            width={500}
            height={500}
            className="rounded"
          />
          <button className="absolute bottom-4 left-4 bg-white px-3 py-1 text-sm font-medium rounded-full hover:bg-gray-200 transition duration-300">
            Kids
          </button>
        </div>
      </div>

      {/* Links Section */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="hover:text-gray-700 transition duration-300">
          <h3 className="font-medium mb-2">Icons</h3>
          <ul>
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        <div className="hover:text-gray-700 transition duration-300">
          <h3 className="font-medium mb-2">Shoes</h3>
          <ul>
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        <div className="hover:text-gray-700 transition duration-300">
          <h3 className="font-medium mb-2">Clothing</h3>
          <ul>
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        <div className="hover:text-gray-700 transition duration-300">
          <h3 className="font-medium mb-2">Kids</h3>
          <ul>
            <li>Infant & Toddler Shoes</li>
            <li>Kids Shoes</li>
            <li>Kids  Jordan Shoes</li>
            <li>Kids  Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
