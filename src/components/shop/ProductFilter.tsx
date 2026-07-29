type ProductFilterProps = {
  category: string;
  setCategory: (category: string) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
};

const categories = [
  "All",
  "Fruits",
  "Food",
  "Drinks",
  "Household",
];

export default function ProductFilter({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
}: ProductFilterProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="border-b pb-4 text-xl font-semibold">
        Filters
      </h3>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 outline-none focus:border-green-600"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Maximum Price
        </label>

        <p className="mb-2 text-sm text-gray-600">
          Le{maxPrice}
        </p>

        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Number(e.target.value))
          }
          className="w-full accent-green-600"
        />
      </div>

      <button
        onClick={() => {
          setCategory("All");
          setMaxPrice(100);
        }}
        className="mt-8 w-full rounded-lg bg-gray-100 px-4 py-3 font-medium transition hover:bg-gray-200"
      >
        Clear Filters
      </button>
    </div>
  );
}