import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { useCart } from "../../context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover transition duration-300 hover:scale-105"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold">
            {product.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {product.category}
          </p>

          <p className="mt-3 text-lg font-bold text-green-600">
            ${product.price}
          </p>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full rounded-lg bg-green-600 py-2 font-medium text-white transition hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}