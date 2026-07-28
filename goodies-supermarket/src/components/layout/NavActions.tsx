import { ShoppingCart, User, Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function NavActions() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/shop?search=${encodeURIComponent(search)}`);
  }

  return (
    <div className="flex items-center gap-4">
      {showSearch ? (
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2"
        >
          <input
            autoFocus
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-56 rounded-lg border px-3 py-2 text-sm outline-none focus:border-green-600"
          />

          <button type="submit">
            <Search size={20} />
          </button>

          <button
            type="button"
            onClick={() => {
              setShowSearch(false);
              setSearch("");
            }}
          >
            <X size={20} />
          </button>
        </form>
      ) : (
        <>
          <button onClick={() => setShowSearch(true)}>
            <Search size={20} />
          </button>

          <button>
            <User size={20} />
          </button>

          <Link
            to="/cart"
            className="relative"
          >
            <ShoppingCart size={20} />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-xs text-white">
              {cart.length}
            </span>
          </Link>
        </>
      )}
    </div>
  );
}