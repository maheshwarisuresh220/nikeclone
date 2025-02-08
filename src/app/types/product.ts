export interface Product {
    _id : string;
    _type : "product";
    productName: string;
  price: number;
  category: string;
  image?: { asset?: { url: string } };
  slug?: { 
    _type : "slug" 
    current: string };
}