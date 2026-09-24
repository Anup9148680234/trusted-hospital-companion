import { useState } from "react";
import { HeartHandshake, Menu, X, Phone } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123B4A] text-white shadow-sm">
            <HeartHandshake size={21} strokeWidth={2} />
          </div>

          <div>
            <span className="block text-sm font-extrabold leading-none tracking-tight text-[#123B4A] sm:text-base">
              Trusted Companion
            </span>

            <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:block">
              Patient Support Services
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#services"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#0F766E]"
          >
            Services
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#0F766E]"
          >
            How It Works
          </a>

          <a
            href="#why-us"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#0F766E]"
          >
            Why Us
          </a>

          <a
            href="#faq"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#0F766E]"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="/request-assistance"
            className="inline-flex items-center gap-2 rounded-xl bg-[#123B4A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d2d39]"
          >
            <Phone size={16} />
            Request Assistance
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-[#123B4A] transition hover:bg-slate-100 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <nav className="flex flex-col">
            <a
              href="#services"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700"
            >
              Services
            </a>

            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700"
            >
              How It Works
            </a>

            <a
              href="#why-us"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700"
            >
              Why Us
            </a>

            <a
              href="#faq"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700"
            >
              FAQ
            </a>

            <a
              href="/request-assistance"
              onClick={closeMenu}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[#123B4A] px-5 py-3.5 text-sm font-bold text-white"
            >
              <Phone size={16} />
              Request Assistance
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;