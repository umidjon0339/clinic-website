import { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, FileText, ChevronDown, CheckCircle, Stethoscope, Clock } from 'lucide-react';

export default function Appointment() {
  const { lang } = useOutletContext();
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', doctor: '', notes: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Translations ---
  const content = {
    uz: {
      title: "Qabulga Yozilish",
      subtitle: "Sog'lig'ingizni kechiktirmang. Bugunoq onlayn navbat oling.",
      labels: {
        name: "To'liq Ismingiz",
        phone: "Telefon Raqamingiz",
        date: "Qabul Sanasi",
        doctor: "Bo'lim / Shifokor",
        notes: "Qo'shimcha Izoh (Ixtiyoriy)",
        btn: "Tasdiqlash"
      },
      placeholders: {
        name: "Ali Valiyev",
        phone: "+998 90 123 45 67",
        notes: "Shikoyatingiz haqida qisqacha..."
      },
      options: ["Umumiy Tekshiruv", "Kardiologiya", "Nevrologiya", "Pediatriya", "Stomatologiya"],
      success: {
        title: "Arizangiz Qabul Qilindi!",
        desc: "Tez orada operatorlarimiz siz bilan bog'lanib, vaqtni tasdiqlashadi.",
        btn: "Bosh Sahifaga"
      }
    },
    en: {
      title: "Book an Appointment",
      subtitle: "Don't delay your health. Schedule your visit online today.",
      labels: {
        name: "Full Name",
        phone: "Phone Number",
        date: "Preferred Date",
        doctor: "Department / Doctor",
        notes: "Additional Notes (Optional)",
        btn: "Confirm Booking"
      },
      placeholders: {
        name: "John Doe",
        phone: "+998 90 123 45 67",
        notes: "Briefly describe your symptoms..."
      },
      options: ["General Checkup", "Cardiology", "Neurology", "Pediatrics", "Dentistry"],
      success: {
        title: "Request Received!",
        desc: "Our operators will contact you shortly to confirm your appointment time.",
        btn: "Back to Home"
      }
    },
    ru: {
      title: "Записаться на Прием",
      subtitle: "Не откладывайте здоровье. Запишитесь онлайн уже сегодня.",
      labels: {
        name: "Ф.И.О.",
        phone: "Номер Телефона",
        date: "Дата Приема",
        doctor: "Отделение / Врач",
        notes: "Дополнительно (Необязательно)",
        btn: "Подтвердить"
      },
      placeholders: {
        name: "Иван Иванов",
        phone: "+998 90 123 45 67",
        notes: "Кратко опишите жалобы..."
      },
      options: ["Общий Осмотр", "Кардиология", "Неврология", "Педиатрия", "Стоматология"],
      success: {
        title: "Заявка Принята!",
        desc: "Наши операторы свяжутся с вами в ближайшее время для подтверждения.",
        btn: "На Главную"
      }
    }
  };

  const t = content[lang] || content.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-4 overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700/50 overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              // --- THE FORM ---
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -50 }}
                onSubmit={handleSubmit} 
                className="p-8 md:p-12 space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide ml-1">
                      {t.labels.name}
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors" size={20} />
                      <input 
                        required
                        type="text" 
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-medium"
                        placeholder={t.placeholders.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide ml-1">
                      {t.labels.phone}
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors" size={20} />
                      <input 
                        required
                        type="tel" 
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-medium"
                        placeholder={t.placeholders.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Date Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide ml-1">
                      {t.labels.date}
                    </label>
                    <div className="relative group">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors" size={20} />
                      <input 
                        required
                        type="date" 
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-medium"
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Doctor Select */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide ml-1">
                      {t.labels.doctor}
                    </label>
                    <div className="relative group">
                      <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors" size={20} />
                      <select 
                        required
                        className="w-full pl-12 pr-10 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-medium appearance-none"
                        onChange={e => setFormData({...formData, doctor: e.target.value})}
                      >
                        <option value="">Choose...</option>
                        {t.options.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                    </div>
                  </div>
                </div>

                {/* Notes Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide ml-1">
                    {t.labels.notes}
                  </label>
                  <div className="relative group">
                    <FileText className="absolute left-4 top-6 text-slate-400 group-focus-within:text-teal-500 transition-colors" size={20} />
                    <textarea 
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-medium h-32 resize-none"
                      placeholder={t.placeholders.notes}
                      onChange={e => setFormData({...formData, notes: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg py-5 rounded-xl hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-1 transition-all"
                >
                  {t.labels.btn}
                </button>

              </motion.form>
            ) : (
              // --- SUCCESS STATE ---
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center flex flex-col items-center justify-center min-h-[500px]"
              >
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-green-500 w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                  {t.success.title}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md">
                  {t.success.desc}
                </p>
                <Link 
                  to="/" 
                  className="bg-teal-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/30"
                >
                  {t.success.btn}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}