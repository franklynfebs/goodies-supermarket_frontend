import { useCart } from "../../context/CartContext";

export default function OrderSummary() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  const delivery = 5;

  const total = subtotal + delivery;

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">
        {cart.map((item) => (
          <div
            key={item.product.id}
            className="flex justify-between"
          >
            <span>
              {item.product.name} × {item.quantity}
            </span>

            <span>
              $
              {(
                item.product.price * item.quantity
              ).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <hr className="my-6" />

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>

          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>

          <span>${delivery.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>

          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}