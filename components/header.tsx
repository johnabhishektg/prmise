import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons } from "./icons";

export function Header() {
  return (
    <nav className="py-4 px-4 flex items-center justify-center md:justify-between bg-off-white border-b border-zinc/20">
      <Icons.navLogo className="w-7 h-7 md:w-12 md:h-12" />
      <div className="block md:hidden text-2xl font-primary text-primary font-semibold">
        Prmise
      </div>
      <ul className="space-x-12 md:flex items-center hidden">
        <li>
          <Link
            href="#how-it-works"
            className="text-foreground hover:text-primary transition-colors"
          >
            How It Works
          </Link>
        </li>
        <li>
          <Link
            href="#faq"
            className="text-foreground hover:text-primary transition-colors"
          >
            FAQ
          </Link>
        </li>
      </ul>
      <Link href="/create">
        <Button className="bg-[#1A4B84] hidden md:block text-off-white hover:bg-primary/90">
          Get Started
        </Button>
      </Link>
    </nav>
  );
}
