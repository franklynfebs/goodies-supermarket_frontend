export default function CustomerInfo() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Customer Information
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="First Name"
          className="rounded-lg border px-4 py-3"
        />

        <input
          type="text"
          placeholder="Last Name"
          className="rounded-lg border px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="rounded-lg border px-4 py-3 md:col-span-2"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="rounded-lg border px-4 py-3 md:col-span-2"
        />
      </div>
    </div>
  );
}