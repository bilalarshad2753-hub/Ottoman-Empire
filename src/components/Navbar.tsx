import { Link, useLocation } from "react-router-dom";
import { Crown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ottoman-gold/40 to-transparent" />
        <div className="container mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <Crown className="w-6 h-6 sm:w-7 sm:h-7 text-ottoman-gold group-hover:text-ottoman-red transition-colors duration-300" />
              <div className="absolute inset-0 w-6 h-6 sm:w-7 sm:h-7 bg-ottoman-gold/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-display text-lg sm:text-xl font-bold ottoman-gradient-text tracking-wider">
              Ottoman Empire
            </span>
          </Link>

          {/* Desktop nav - logo serves as home link */}
          <div className="hidden md:flex items-center gap-6" />

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-ottoman-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-display text-2xl tracking-wider transition-colors duration-300 ${
                    location.pathname === link.to
                      ? "ottoman-gradient-text"
                      : "text-muted-foreground hover:text-ottoman-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
