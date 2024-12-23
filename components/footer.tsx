import { Icons } from "./icons";

export function Footer() {
  return (
    <footer className="bg-off-white text-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-0.5">
              <Icons.navLogo className="w-7 h-7 md:w-11 md:h-11" />
              <div className="text-4xl font-primary text-primary font-semibold">
                Prmise
              </div>
            </div>
            <p className="text-[#ADADAD] text-xs ml-1">
              Build habits, or change lives.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              target="_blank"
              href="https://x.com/johhnabhishek"
              aria-label="Twitter"
              className="hover:opacity-80 transition-opacity"
            >
              <Icons.twitter className="h-6 w-6" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/johhntg"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              <Icons.instagram className="h-6 w-6" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/johnabhishek/"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity"
            >
              <Icons.linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-off-white/20 text-center text-sm opacity-80">
          <p>&copy; 2024 Prmise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
