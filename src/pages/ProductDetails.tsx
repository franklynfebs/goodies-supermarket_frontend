import { useParams } from "react-router-dom";
import Container from "../components/common/Container";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <Container>
        <h1 className="py-20 text-3xl font-bold">
          Product not found
        </h1>
      </Container>
    );
  }

  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <img
            src={product.image}
            alt={product.name}
            className="h-65 w-full rounded-lg object-cover transition duration-300 hover:scale-105"
          />

          <div>
            <h1 className="text-4xl font-bold">
              {product.name}
            </h1>

            <p className="mt-4 text-gray-600">
              {product.category}
            </p>

            <p className="mt-6 text-3xl font-bold text-green-600">
              Le{product.price}
            </p>

            <p className="mt-6 text-gray-700">
              {product.description}
            </p>

            <p className="mt-4">
              Stock Available: {product.stock}
            </p>

            <p className="mt-4">
              Rating: ⭐ {product.rating}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-8 rounded-lg bg-green-600 px-8 py-3 text-white transition-colors duration-300 hover:bg-green-700"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}