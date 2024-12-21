import { Icons } from "./icons"

export function Footer() {
  return (
    <footer className="bg-primary text-off-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Prmise</h2>
            <p className="text-sm opacity-80">
              "Self-confidence comes from making<br />
              and keeping promises to yourself"<br />
              - Chris Williamson
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
              <Icons.twitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <Icons.instagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <Icons.linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-off-white/20 text-center text-sm opacity-80">
          <p>&copy; 2023 Prmise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

