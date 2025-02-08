"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
//import imageUrlBuilder from "@sanity/image-url";

//const builder = imageUrlBuilder(client);
const urlFor = (source: { asset?: { url: string } } | null | undefined) => {
  // Check if the source has an asset with a valid URL
  if (source?.asset?.url) {
    // Return the image URL directly if it's already available
    return source.asset.url;
  }
  // Return placeholder image if no valid URL is found
  return '/placeholder.png';
};
type Product = {
  productName: string;
  category: string;
  slug?: { current?: string };
  image?: { asset?: { url: string } };
  price?: number;
};

export default function KidsPage() {
  const category = "Kids"; // ✅ Hardcoded for Kids category
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && category == $category]{
          productName, category, slug, image { asset -> { url } }, price
        }`;
        const data = await client.fetch(query, { category });
        setProducts(data);
      } catch (error) {
        console.error("Sanity Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-xl">Loading Kids products...</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Kids Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Link href={`/product/${product.slug?.current}`} key={index}>
              <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                <Image
                  src={urlFor(product.image)}
                  alt={product.productName || "Product Image"}
                  width={200}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-md"
                />
                <h2 className="mt-2 font-semibold">{product.productName}</h2>
                <p className="text-gray-500">₹{product.price?.toLocaleString()}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600">No products found in this category.</p>
        )}
      </div>
    </div>
  );
}
