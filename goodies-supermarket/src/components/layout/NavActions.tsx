import { ShoppingCart, User, Search } from "lucide-react";

export default function NavActions() {
  return (
    <div className="flex items-center gap-4">

      <button>
        <Search size={20} />
      </button>

      <button>
        <User size={20} />
      </button>

      <button className="relative">
        <ShoppingCart size={20} />

        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-xs text-white">
          0
        </span>

      </button>

    </div>
  );
}