const products = {
  companies: [
    { id: "1", name: "amazon" },
    { id: "2", name: "flipkart" },
    { id: "3", name: "walmart" },
    { id: "4", name: "indiamart" },
    { id: "5", name: "ebay" }
  ],
  products: [
    { id: "1", name: "Washing Machine LG" },
    { id: "2", name: "Google Smart Home" },
    { id: "3", name: "JBL Noise Cancellation Earbuds" },
    { id: "4", name: "Sony 4K Ultra HD TV" },
    { id: "5", name: "Apple iPhone 15 Pro" },
    { id: "6", name: "Dell XPS 15 Laptop" },
    { id: "7", name: "Samsung Galaxy S24 Ultra" },
    { id: "8", name: "PlayStation 5" },
    { id: "9", name: "MacBook Pro M3" },
    { id: "10", name: "OnePlus 12" }
  ]
};

const getProducts = () => products.products;
const getCompanies = () => products.companies;

module.exports = {
  getProducts,
  getCompanies
};