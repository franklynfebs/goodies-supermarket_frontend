export default function PaymentMethod() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Payment Method
      </h2>

      <div className="mt-6 space-y-3">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            defaultChecked
          />

          Cash on Delivery
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
          />

         Visa Card / MasterCard
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
          />

          Mobile Money
        </label>

         <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
          />

          PayPal
        </label>

         <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
          />

          Stripe
        </label>
      </div>
    </div>
  );
}