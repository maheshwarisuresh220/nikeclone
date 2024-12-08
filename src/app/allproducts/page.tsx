import Image from 'next/image';
import Link from 'next/link';
import RelatedCategories from './relatedcategores';

export default function FilterPage() {
  return (
    <section className="px-4 py-8 mx-auto mt-[120px] max-w-screen-xl">
      <h2 className="text-xl font-semibold mb-6">New (500)</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4">
          <div className="border p-4 rounded">
            <h3 className="font-medium mb-4">Gender</h3>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Men
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Women
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Unisex
                </label>
              </li>
            </ul>

            <h3 className="font-medium mt-6 mb-4">Kids</h3>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Boys
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Girls
                </label>
              </li>
            </ul>

            <h3 className="font-medium mt-6 mb-4">Shop By Price</h3>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Under ₹2,500.00
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> ₹2,501.00 - ₹5,000.00
                </label>
              </li>
            </ul>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* Product Cards */}
          {Array.from({ length: 24 }, (_, i) => (
            <div key={i} className="border p-4 rounded">
              <Link href="/display">
                
                  <Image
                    src={`/${i + 1}.png`} // Replace with your image paths
                    alt={`Nike Product ${i + 1}`}
                    width={500}
                    height={500}
                    className="rounded"
                  />
            
              </Link>
              <h3 className="mt-4 text-sm font-medium">Just In</h3>
              <p className="text-sm">Nike Air Force 1 React</p>
              <p className="text-sm">Promo Exclusive</p>
              <p className="text-sm font-semibold">MRP: ₹7,995.00</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Categories Section */}
      <div className="mt-12">
        <RelatedCategories />
      </div>
    </section>
  );
}
