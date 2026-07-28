type ProductSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search products..."
      className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
    />
  );
}