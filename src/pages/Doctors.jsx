import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { doctors } from '../data/doctorsData';
import { Search, MapPin, Star, Clock, Stethoscope, ArrowRight, XCircle, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Doctors() {
  const { lang } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All"); // New Filter State

  const content = {
    uz: {
      title: "Bizning Shifokorlar",
      subtitle: "Malakali mutaxassislarimiz sizning xizmatingizda",
      searchPlaceholder: "Shifokor ismi...",
      available: "Qabul ochiq",
      viewProfile: "Batafsil ma'lumot",
      experience: "tajriba",
      // Filter Categories
      all: "Barchasi",
      filters: ["Kardiolog", "Nevrolog", "Pediatr", "Stomatolog", "Jarroh", "Dermatolog", "Urolog", "Endokrinolog", "Oftalmolog", "Terapevt"] 
    },
    en: {
      title: "Our Doctors",
      subtitle: "Meet our highly qualified specialists",
      searchPlaceholder: "Search by doctor name...",
      available: "Available Today",
      viewProfile: "View Profile",
      experience: "exp",
      all: "All Specialists",
      filters: ["Cardiologist", "Neurologist", "Pediatrician", "Dentist", "Surgeon", "Dermatologist", "Urologist", "Endocrinologist", "Ophthalmologist", "Therapist"]
    },
    ru: {
      title: "Наши Врачи",
      subtitle: "Наши квалифицированные специалисты",
      searchPlaceholder: "Поиск врача...",
      available: "Прием открыт",
      viewProfile: "Подробнее",
      experience: "стаж",
      all: "Все",
      filters: ["Кардиолог", "Невролог", "Педиатр", "Стоматолог", "Хирург", "Дерматолог", "Уролог", "Эндокринолог", "Офтальмолог", "Терапевт"]
    }
  };

  const t = content[lang] || content.en;

  // --- Advanced Filtering Logic ---
  const filteredDoctors = doctors.filter(doc => {
    // 1. Text Search (Name)
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // 2. Category Filter
    // We compare the translated specialty in the DB with the clicked button text
    const matchesFilter = activeFilter === "All" || doc.specialty[lang] === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 pt-32 pb-16 px-4 relative overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 dark:from-white dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-semibold max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* --- SEARCH & FILTERS SECTION --- */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          
          {/* 1. Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-30 group-focus-within:opacity-30 transition duration-300"></div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="text-slate-400 group-focus-within:text-cyan-500 transition-all duration-300 group-focus-within:scale-110" size={22} />
              </div>
              <input 
                type="text" 
                placeholder={t.searchPlaceholder} 
                className="w-full pl-16 pr-6 py-5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-3xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 shadow-xl focus:shadow-2xl focus:shadow-cyan-500/20 font-semibold text-base"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>

          {/* 2. Filter Chips (Horizontal Scroll) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap justify-center gap-3"
          >
            {/* "All" Button */}
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 border-2 ${
                activeFilter === "All"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/30 scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-cyan-400 hover:text-cyan-600"
              }`}
            >
              <Filter size={14} />
              {t.all}
            </button>

            {/* Specialty Buttons */}
            {t.filters.map((filterName) => (
              <button
                key={filterName}
                onClick={() => setActiveFilter(filterName)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border-2 ${
                  activeFilter === filterName
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/30 scale-105"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-cyan-400 hover:text-cyan-600"
                }`}
              >
                {filterName}
              </button>
            ))}
          </motion.div>
        </div>

        {/* --- DOCTORS GRID --- */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredDoctors.map((doc, index) => (
                <motion.div 
                  layout // This makes items slide gracefully when filtering
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8 }}
                  key={doc.id}
                  className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 border-2 border-transparent hover:border-cyan-500/30 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 flex flex-col overflow-hidden"
                >
                  {/* ... (Existing Card UI - Unchanged) ... */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className="relative">
                          <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-2xl object-cover ring-4 ring-slate-100 dark:ring-slate-700 group-hover:ring-cyan-500 transition-all duration-500 group-hover:scale-105 shadow-lg" />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 -z-10 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        </div>
                        <motion.div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 text-xs font-black px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1" whileHover={{ scale: 1.1, rotate: 3 }}>
                          <Clock size={10} /><span>{doc.experience} {t.experience}</span>
                        </motion.div>
                      </div>
                      <motion.div className="flex items-center gap-1.5 bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 px-3 py-2 rounded-2xl border-2 border-yellow-200 dark:border-yellow-800/50 shadow-md" whileHover={{ scale: 1.05 }}>
                        <Star fill="#EAB308" className="text-yellow-500" size={16} />
                        <span className="text-base font-black text-amber-900 dark:text-yellow-100">{doc.rating}</span>
                      </motion.div>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-3 leading-tight">{doc.name}</h3>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-cyan-300 px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wide border border-blue-200 dark:border-blue-800/50 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 group-hover:translate-x-1">
                        <Stethoscope size={14} /><span>{doc.specialty[lang]}</span>
                      </div>
                    </div>
                    <div className="border-t-2 border-dashed border-slate-200 dark:border-slate-700 my-6"></div>
                    <div className="flex items-center justify-between text-sm mb-6">
                      <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold"><MapPin size={16} className="text-slate-400" />Tashkent</span>
                      <span className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800/50 relative">
                        <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
                        {t.available}
                      </span>
                    </div>
                    <Link to={`/doctors/${doc.id}`} className="group/btn relative block w-full text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-700 dark:to-slate-600 text-white py-4 rounded-2xl font-black text-base transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative flex items-center justify-center gap-2"><span>{t.viewProfile}</span><ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" /></span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* --- NO RESULTS STATE --- */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <XCircle size={48} className="text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {lang === 'uz' ? "Hech narsa topilmadi" : lang === 'ru' ? "Ничего не найдено" : "No results found"}
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              {lang === 'uz' ? "Boshqa so'z bilan qidirib ko'ring yoki filtrni o'zgartiring." : lang === 'ru' ? "Попробуйте другое ключевое слово или измените фильтр." : "Try searching for a different keyword or change the filter."}
            </p>
            <button 
              onClick={() => {setSearchTerm(""); setActiveFilter("All");}}
              className="mt-6 text-cyan-600 dark:text-cyan-400 font-bold hover:underline"
            >
              {lang === 'uz' ? "Filtrlarni tozalash" : lang === 'ru' ? "Сбросить фильтры" : "Clear Filters"}
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
}