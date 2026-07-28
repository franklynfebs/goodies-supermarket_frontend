import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

type MobileMenuProps = {
  open:boolean;
};

export default function MobileMenu({
  open,
}:MobileMenuProps){

if(!open) return null;


return (

<motion.div
initial={{opacity:0,height:0}}
animate={{opacity:1,height:"auto"}}
className="border-t py-4 md:hidden"
>

<nav className="flex flex-col gap-4">
<NavLinks/>
</nav>

</motion.div>

);

}