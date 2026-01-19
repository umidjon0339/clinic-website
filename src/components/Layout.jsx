import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Globe, ChevronDown, Check } from 'lucide-react';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('uz');
  const [theme, setTheme] = useState('dark');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  
  const location = useLocation();

  // --- Dark Mode Logic ---
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // --- Translations ---
  const content = {
    uz: { home: "Bosh Sahifa", doctors: "Shifokorlar", services: "Xizmatlar", contact: "Aloqa", book: "Qabulga Yozilish", nav_menu: "Menu" },
    en: { home: "Home", doctors: "Find Doctors", services: "Services", contact: "Contact", book: "Book Visit", nav_menu: "Menu" },
    ru: { home: "Главная", doctors: "Врачи", services: "Услуги", contact: "Контакты", book: "Записаться", nav_menu: "Меню" }
  };
  const t = content[lang];

  // --- Navigation Links Data ---
  const navLinks = [
    { path: '/', label: t.home },
    { path: '/doctors', label: t.doctors },
    { path: '/services', label: t.services },
    { path: '/contact', label: t.contact },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-slate-50 dark:bg-slate-900 selection:bg-teal-500 selection:text-white">
      
      {/* ================= FLOATING GLASS NAVBAR ================= */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
        <nav className="w-full max-w-7xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-2xl shadow-slate-200/20 dark:shadow-black/20 rounded-2xl transition-all duration-300">
          <div className="px-4 sm:px-6">
            <div className="flex justify-between items-center h-16 md:h-20">
              
              {/* --- Logo --- */}
              <Link to="/" className="flex items-center gap-2 group relative z-10">
                <div className="relative w-10 h-10 flex items-center justify-center">
                   <div className="absolute inset-0 bg-teal-500 rounded-xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform"></div>
                   <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                     H+
                   </div>
                </div>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  HealthPlus
                </span>
              </Link>

              {/* --- Desktop Nav (With Animated Pill) --- */}
              <div className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link 
                      key={link.path} 
                      to={link.path}
                      className={`relative px-5 py-2 rounded-full text-sm font-bold transition-colors duration-300 z-10 ${isActive ? 'text-teal-700 dark:text-teal-300' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-sm"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* --- Right Utilities --- */}
              <div className="hidden md:flex items-center gap-3">
                
                {/* Language Switcher */}
                <div className="relative">
                  <button 
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 font-medium text-sm"
                  >
                    <Globe size={18} className="text-teal-600 dark:text-teal-400" />
                    <span className="uppercase">{lang}</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {langMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 top-full mt-2 w-40 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-xl p-2 overflow-hidden z-50"
                      >
                        {['uz', 'en', 'ru'].map((l) => (
                          <button 
                            key={l}
                            onClick={() => { setLang(l); setLangMenuOpen(false); }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${lang === l ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                          >
                            <span className="flex items-center gap-2">
                              {l === 'uz' ? "🇺🇿 O'zbek" : l === 'en' ? "🇺🇸 English" : "🇷🇺 Русский"}
                            </span>
                            {lang === l && <Check size={14} />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme} 
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:scale-105 active:scale-95 transition-all"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>

                {/* CTA Button */}
                <Link to="/appointment" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-0.5 transition-all">
                  {t.book}
                </Link>
              </div>

              {/* --- Mobile Toggle --- */}
              <div className="md:hidden flex items-center gap-3">
                 <button onClick={toggleTheme} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400">
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-800 dark:text-white">
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>

            </div>
          </div>

          {/* --- Mobile Menu (Collapsible) --- */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-slate-100 dark:border-slate-800"
              >
                <div className="px-4 py-6 space-y-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.path}
                      onClick={() => setIsOpen(false)} 
                      to={link.path} 
                      className={`block py-3 px-4 rounded-xl font-medium transition-colors ${location.pathname === link.path ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                  {/* Mobile Lang Selector */}
                  <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                    {['uz', 'en', 'ru'].map((l) => (
                      <button 
                        key={l} 
                        onClick={() => setLang(l)}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold capitalize transition-all ${lang === l ? 'bg-white dark:bg-slate-700 shadow-sm text-teal-700 dark:text-teal-300' : 'text-slate-500 dark:text-slate-400'}`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>

                  <Link onClick={() => setIsOpen(false)} to="/appointment" className="block w-full text-center bg-teal-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-teal-600/20">
                    {t.book}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* ================= CONTENT WRAPPER ================= */}
      <main className="flex-grow pt-4"> 
        {/* Pass the lang to all children via Outlet Context */}
        <Outlet context={{ lang }} />
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">H+</div>
            <span className="font-bold text-xl text-slate-900 dark:text-white">HealthPlus</span>
          </div>
          <p className="text-sm">&copy; 2026 HealthPlus Clinic. {lang === 'uz' ? "Barcha huquqlar himoyalangan." : "All rights reserved."}</p>
        </div>
      </footer>

    </div>
  );
}