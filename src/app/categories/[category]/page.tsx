"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

// Sanity image URL generation function with fallback
const urlFor = (source: { asset?: { url: string } } | null | undefined) => {
  if (source?.asset?.url) {
    console.log("Image URL:", builder.image(source).url()); // Log the generated URL for debugging
    return builder.image(source).url(); // Generate image URL using imageUrlBuilder
  }
  console.log("No valid image URL found, returning placeholder.");
  return '/placeholder.png'; // Fallback to placeholder image if no URL is available
};

type Product = {
  productName: string;
  category: string;
  slug?: { current?: string };
  image?: { asset?: { url: string } };
  price?: number;
};

export default function CategoryPage() {
  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : params.category; // Ensure category is a string

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return; // Prevent fetching if category is undefined

    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && lower(category) == $category]{
          productName, category, slug, image { asset -> { url } }, price
        }`;
        const data = await client.fetch(query, { category: category.toLowerCase() });
        setProducts(data);
      } catch (error) {
        console.error("Sanity Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <p className="text-center text-xl">Loading {category} products...</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category} Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Link href={`/product/${product.slug?.current}`} key={index}>
              <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                <Image
                  src={urlFor(product.image)} // Ensure urlFor generates the correct image URL
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
