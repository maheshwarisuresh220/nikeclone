export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 200,
      },
    },
  ],
};
