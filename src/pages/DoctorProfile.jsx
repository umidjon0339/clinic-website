import { useParams, Link, useOutletContext } from 'react-router-dom';
import { doctors } from '../data/doctorsData';
import { motion } from 'framer-motion';
import { Star, Clock, Calendar, CheckCircle, ArrowLeft, ShieldCheck, MapPin, User } from 'lucide-react';

export default function DoctorProfile() {
  const { id } = useParams();
  const { lang } = useOutletContext(); // Get language from Layout

  // --- Translations ---
  const content = {
    uz: {
      back: "Orqaga qaytish",
      rating: "Reyting",
      aboutTitle: "Shifokor Haqida",
      expLabel: "Tajriba",
      expUnit: "yil",
      patientsLabel: "Bemorlar",
      patientsCount: "1000+",
      bookTitle: "Qabulga Yozilish",
      daysLabel: "Qabul Kunlari:",
      bookBtn: "Hozir Band Qilish",
      notFound: "Shifokor topilmadi",
      verified: "Tasdiqlangan Shifokor"
    },
    en: {
      back: "Back to Doctors",
      rating: "Rating",
      aboutTitle: "About Doctor",
      expLabel: "Experience",
      expUnit: "years",
      patientsLabel: "Patients",
      patientsCount: "1000+",
      bookTitle: "Book Appointment",
      daysLabel: "Available Days:",
      bookBtn: "Book Now",
      notFound: "Doctor not found",
      verified: "Verified Specialist"
    },
    ru: {
      back: "Назад к списку",
      rating: "Рейтинг",
      aboutTitle: "О Враче",
      expLabel: "Опыт",
      expUnit: "лет",
      patientsLabel: "Пациенты",
      patientsCount: "1000+",
      bookTitle: "Записаться на прием",
      daysLabel: "Дни приема:",
      bookBtn: "Записаться",
      notFound: "Врач не найден",
      verified: "Проверенный Врач"
    }
  };

  const t = content[lang] || content.en;

  // Find Doctor by ID
  const doctor = doctors.find(d => d.id === parseInt(id));

  // 404 State
  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 pt-32">
        <h2 className="text-3xl font-bold">{t.notFound}</h2>
      </div>
    );
  }

  return (
    // Added pt-36 here to make sure it clears the Floating Navbar
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pt-36 pb-20 px-4 transition-colors duration-300">
      
      {/* Background Decor (Fixed z-index to not cover navbar) */}
      <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <Link 
          to="/doctors" 
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 font-bold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          {t.back}
        </Link>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* ================= LEFT: PROFILE CARD (Sticky) ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Sticky top-36 ensures it stays visible under the navbar while scrolling
            className="col-span-1 lg:sticky lg:top-36"
          >
            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl p-8 border border-slate-100 dark:border-slate-700 relative overflow-hidden">
              
              {/* Badge */}
              <div className="absolute top-6 right-6 text-teal-500" title={t.verified}>
                <ShieldCheck size={28} />
              </div>

              {/* Image */}
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-teal-500 rounded-full blur-2xl opacity-20"></div>
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg relative z-10"
                />
                <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 z-20"></div>
              </div>

              {/* Name & Spec */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{doctor.name}</h1>
                <p className="text-teal-600 dark:text-teal-400 font-bold uppercase text-sm tracking-wider">
                  {doctor.specialty[lang]}
                </p>
              </div>

              {/* Rating Box */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 flex items-center justify-between border border-slate-100 dark:border-slate-700/50">
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{t.rating}</span>
                <div className="flex items-center gap-1.5 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-xl">
                  <Star fill="#EAB308" className="text-yellow-500" size={16} />
                  <span className="font-bold text-slate-900 dark:text-white">{doctor.rating}</span>
                </div>
              </div>

              {/* Location */}
              <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
                <MapPin size={16} /> Tashkent, Uzbekistan
              </div>

            </div>
          </motion.div>

          {/* ================= RIGHT: DETAILS & BOOKING ================= */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 }}
             className="col-span-1 lg:col-span-2 space-y-8"
          >
            {/* About Section */}
            <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <User className="text-teal-500" /> {t.aboutTitle}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                {doctor.about[lang]}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-3xl flex items-center gap-4 border border-blue-100 dark:border-blue-900/20">
                  <div className="bg-blue-500 text-white p-3 rounded-2xl shadow-lg shadow-blue-500/30">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{t.expLabel}</div>
                    <div className="text-xl font-black text-slate-900 dark:text-white">{doctor.experience} {t.expUnit}</div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/10 p-5 rounded-3xl flex items-center gap-4 border border-green-100 dark:border-green-900/20">
                  <div className="bg-green-500 text-white p-3 rounded-2xl shadow-lg shadow-green-500/30">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{t.patientsLabel}</div>
                    <div className="text-xl font-black text-slate-900 dark:text-white">{t.patientsCount}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl shadow-teal-500/30 relative overflow-hidden">
              {/* Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Calendar className="text-teal-200" /> {t.bookTitle}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-teal-100 text-sm font-medium uppercase tracking-wide opacity-80">{t.daysLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {doctor.schedule.map((day, i) => (
                        <span key={i} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg font-bold text-sm border border-white/20">
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/appointment" 
                  className="bg-white text-teal-700 px-8 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl w-full md:w-auto text-center"
                >
                  {t.bookBtn}
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}