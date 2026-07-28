import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <section className="py-16">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Shopping Cart
            </h1>

            <p className="mt-2 text-gray-600">
              Review the items in your cart.
            </p>
          </div>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="rounded-lg border border-red-500 px-4 py-2 text-red-600 transition hover:bg-red-50"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="mt-10 rounded-xl border bg-white p-10 text-center">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-600">
              Add some products from the shop to get started.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between rounded-xl border bg-white p-5 shadow-sm"
                >
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.product.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.product.category}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      $ {item.product.price.toFixed(2)} each
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.product.id)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-md border"
                      >
                        −
                      </button>

                      <span className="w-6 text-center font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.product.id)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-md border"
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-3 font-bold text-green-600">
                      $
                      {(
                        item.product.price * item.quantity
                      ).toFixed(2)}
                    </p>

                    <button
                      onClick={() =>
                        removeFromCart(item.product.id)
                      }
                      className="mt-2 text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="mt-3 flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="mt-3 flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <Link
                to="/checkout"
                className="mt-8 block w-full rounded-lg bg-green-600 py-3 text-center font-medium text-white transition hover:bg-green-700"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}