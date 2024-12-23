import { Icons } from "./icons";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <div className="bg-off-white md:h-screen mx-auto">
      <div className="flex justify-center items-center">
        <div className="bg-primary md:w-5/6 md:h-[460px] text-off-white rounded-xl">
          <div className="flex justify-center items-center p-6">
            <div>
              <h1 className="font-normal text-xl md:text-5xl">
                “Self-confidence comes from making and keeping promises to
                yourself”
              </h1>
              <p className="font-primary md:text-left text-center text-xs md:text-md tracking-wide mt-2">
                - Chris Williamson
              </p>
              <div className="flex items-center justify-center mt-6 space-y-2 md:space-x-4">
                <Button
                  size="xl"
                  className="hidden md:block rounded-xl bg-[#1A4B84] text-off-white hover:bg-[#1B365D]/90 text-xl font-semibold font-primary"
                >
                  Make Your Promise
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className=" text-primary py-12">
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
                href="https://www.linkedin.com/in/johnabhishek/"
                aria-label="LinkedIn"
                className="hover:opacity-80 transition-opacity"
              >
                <Icons.linkedin className="h-6 w-6" />
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
                href="https://x.com/johhnabhishek"
                aria-label="Twitter"
                className="hover:opacity-80 transition-opacity"
              >
                <Icons.twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-off-white/20 text-center text-sm opacity-80">
            <p>&copy; 2024 Prmise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
