import Image from 'next/image';

export default function GearUp() {
  return (
    <section className="px-4 py-8">
      <h2 className="text-xl font-semibold mb-6 ml-[45px]">Gear Up</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-[60px]">
        {/* Item 1 */}
        <div className="p-2 border border-gray-200 rounded flex flex-col items-center">
          <div className="relative">
            <Image
              src="/eight.png" // Replace with your image path
              alt="Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top"
              width={300}  // Decreased size of the image
              height={300} // Decreased size of the image
              className="rounded"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-sm font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
            <p className="text-gray-500 text-sm">Men Short-Sleeve Running Top</p>
            <p className="text-lg font-semibold mt-2">$ 100</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="p-2 border border-gray-200 rounded flex flex-col items-center">
          <Image
            src="/9.png" // Replace with your image path
            alt="Nike Dri-FIT Challenger Men's 2-in-1 Versatile Shorts"
            width={300}  // Decreased size of the image
            height={300} // Decreased size of the image
            className="rounded"
          />
          <div className="mt-4 text-center">
            <h3 className="text-sm font-medium">Nike Dri-FIT Challenger</h3>
            <p className="text-gray-500 text-sm">Men 18cm (approx.) 2-in-1 Versatile Shorts</p>
            <p className="text-lg font-semibold mt-2">$ 120</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="p-2 border border-gray-200 rounded flex flex-col items-center">
          <Image
            src="/10.png" // Replace with your image path
            alt="Nike Dri-FIT ADV Run Division Women's Long-Sleeve Running Top"
            width={300}  // Decreased size of the image
            height={300} // Decreased size of the image
            className="rounded"
          />
          <div className="mt-4 text-center">
            <h3 className="text-sm font-medium">Nike Dri-FIT ADV Run Division</h3>
            <p className="text-gray-500 text-sm">Women Long-Sleeve Running Top</p>
            <p className="text-lg font-semibold mt-2">$ 100</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="p-2 border border-gray-200 rounded flex flex-col items-center">
          <Image
            src="/11.png" // Replace with your image path
            alt="Nike Fast Women's Mid-Rise 7/8 Running Leggings"
            width={300}  // Decreased size of the image
            height={300} // Decreased size of the image
            className="rounded"
          />
          <div className="mt-4 text-center">
            <h3 className="text-sm font-medium">Nike Fast</h3>
            <p className="text-gray-500 text-sm">Women Mid-Rise 7/8 Running Leggings with Pockets</p>
            <p className="text-lg font-semibold mt-2">$ 120</p>
          </div>
        </div>
      </div>
    </section>
  );
}
