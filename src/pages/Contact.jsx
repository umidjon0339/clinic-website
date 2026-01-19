import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const { lang } = useOutletContext(); 

  // --- 1. Translations ---
  const content = {
    uz: {
      title: "Biz Bilan Bog'laning",
      subtitle: "Savollaringiz bormi? Biz sizga yordam berishdan mamnunmiz.",
      infoTitle: "Aloqa Ma'lumotlari",
      formTitle: "Xabar Yuborish",
      labels: {
        address: "Manzil",
        phone: "Telefon",
        email: "Email",
        hours: "Ish Vaqti",
        firstName: "Ismingiz",
        lastName: "Familiyangiz",
        msg: "Xabaringiz",
        btn: "Xabarni Yuborish"
      },
      data: {
        address: "Amir Temur ko'chasi 108, Toshkent",
        hours: "Dushanba - Yakshanba: 08:00 - 22:00"
      }
    },
    en: {
      title: "Get in Touch",
      subtitle: "Have questions? We are here to help you 24/7.",
      infoTitle: "Contact Information",
      formTitle: "Send a Message",
      labels: {
        address: "Our Location",
        phone: "Phone Number",
        email: "Email Address",
        hours: "Working Hours",
        firstName: "First Name",
        lastName: "Last Name",
        msg: "Your Message",
        btn: "Send Message"
      },
      data: {
        address: "108 Amir Temur Avenue, Tashkent",
        hours: "Monday - Sunday: 08:00 - 22:00"
      }
    },
    ru: {
      title: "Свяжитесь с Нами",
      subtitle: "У вас есть вопросы? Мы рады помочь вам в любое время.",
      infoTitle: "Контактная Информация",
      formTitle: "Отправить Сообщение",
      labels: {
        address: "Наш Адрес",
        phone: "Номер Телефона",
        email: "Электронная Почта",
        hours: "Время Работы",
        firstName: "Имя",
        lastName: "Фамилия",
        msg: "Ваше Сообщение",
        btn: "Отправить"
      },
      data: {
        address: "Проспект Амира Темура 108, Ташкент",
        hours: "Понедельник - Воскресенье: 08:00 - 22:00"
      }
    }
  };

  const t = content[lang] || content.en;

  // Animation Config
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-4 overflow-hidden transition-colors duration-300">
      
      {/* Background Blobs (Like Services Page) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-bold uppercase tracking-wider mb-4">
              {t.labels.phone} / {t.labels.email}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* --- Left Column: Info Cards --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Location Card */}
            <div className="group bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700/50 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.labels.address}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.data.address}</p>
              </div>
            </div>

            {/* Phone & Email Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700/50">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t.labels.phone}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">+998 71 200-00-00</p>
              </div>

              <div className="group bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700/50">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t.labels.email}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">info@healthplus.uz</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="group bg-gradient-to-br from-teal-500 to-emerald-600 p-8 rounded-[2rem] shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.labels.hours}</h3>
                  <p className="text-teal-100 font-medium">{t.data.hours}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-lg backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Hozir ochiq (Open Now)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- Right Column: Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700/50 relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <MessageSquare size={120} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              {t.formTitle}
            </h3>

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide ml-1">
                    {t.labels.firstName}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-medium" 
                    placeholder="Ali" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide ml-1">
                    {t.labels.lastName}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-medium" 
                    placeholder="Valiyev" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide ml-1">
                  {t.labels.email}
                </label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-medium" 
                  placeholder="ali@example.com" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide ml-1">
                  {t.labels.msg}
                </label>
                <textarea 
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-medium h-32 resize-none" 
                  placeholder="..."
                ></textarea>
              </div>

              <button className="group w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all flex items-center justify-center gap-2">
                <span>{t.labels.btn}</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}