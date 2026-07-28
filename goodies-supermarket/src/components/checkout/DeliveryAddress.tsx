export default function DeliveryAddress() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Delivery Address
      </h2>

      <div className="mt-6 grid gap-4">
        <input
          type="text"
          placeholder="Street Address"
          className="rounded-lg border px-4 py-3"
        />

        <input
          type="text"
          placeholder="City"
          className="rounded-lg border px-4 py-3"
        />

        <input
          type="text"
          placeholder="State / Region"
          className="rounded-lg border px-4 py-3"
        />

        <input
          type="text"
          placeholder="Postal Code"
          className="rounded-lg border px-4 py-3"
        />
      </div>
    </div>
  );
}