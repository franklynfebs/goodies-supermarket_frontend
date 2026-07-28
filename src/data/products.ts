import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Apples",
    category: "Fruits",
    price: 5,
    image: "/products/apples.png",
    description:
      "Fresh and healthy apples perfect for everyday consumption.",
    stock: 50,
    rating: 4.5,
    featured: true,
  },

  {
    id: 2,
    name: "Premium Rice",
    category: "Food",
    price: 20,
    image: "/products/rice.png",
    description:
      "High-quality rice suitable for family meals.",
    stock: 100,
    rating: 4.8,
    featured: true,
  },

  {
    id: 3,
    name: "Orange Juice",
    category: "Drinks",
    price: 8,
    image: "/products/juice.png",
    description:
      "Refreshing orange juice made from quality ingredients.",
    stock: 40,
    rating: 4.3,
    featured: true,
  },

  {
    id: 4,
    name: "Cooking Oil",
    category: "Household",
    price: 15,
    image: "/products/oil.png",
    description:
      "Reliable cooking oil for daily kitchen needs.",
    stock: 70,
    rating: 4.6,
    featured: true,
  },
];