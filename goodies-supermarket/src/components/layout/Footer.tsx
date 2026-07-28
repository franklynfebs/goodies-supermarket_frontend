import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
export default function Footer() {
  return (
    <footer className="border-t bg-zinc-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">

        <div>
          <h2 className="text-2xl font-bold">
            Goodies Supermarket
          </h2>

          <p className="mt-4 text-sm text-zinc-400">
            Your trusted destination for fresh groceries, quality products,
            and everyday essentials.
          </p>
        </div>


        <div>
          <h3 className="font-semibold">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.path} className="hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="font-semibold">
            Contact
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            <li>Phone: +232 73 189 213</li>
            <li>Email: info@goodies.com</li>
            <li>Freetown, Sierra Leone</li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold">
            Follow Us
          </h3>

          <div className="mt-4 flex gap-4">

<FaFacebook className="text-xl text-zinc-400 hover:text-white" />
<FaInstagram className="text-xl text-zinc-400 hover:text-white" />
<FaTwitter className="text-xl text-zinc-400 hover:text-white" />

          </div>
        </div>

      </div>


      <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">

        © 2026 Goodies Supermarket. All rights reserved.

      </div>

    </footer>
  );
}