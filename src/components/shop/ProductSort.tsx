type ProductSortProps = {
  sort: string;
  setSort: (sort: string) => void;
};

export default function ProductSort({
  sort,
  setSort,
}: ProductSortProps) {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="product-sort"
        className="whitespace-nowrap font-medium text-gray-700"
      >
        Sort By
      </label>

      <select
        id="product-sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="rounded-lg border bg-white px-4 py-2 outline-none transition focus:border-green-600"
      >
        <option value="default">
          Default
        </option>

        <option value="price-low">
          Price: Low to High
        </option>

        <option value="price-high">
          Price: High to Low
        </option>

        <option value="name-a">
          Name: A to Z
        </option>

        <option value="name-z">
          Name: Z to A
        </option>
      </select>
    </div>
  );
}