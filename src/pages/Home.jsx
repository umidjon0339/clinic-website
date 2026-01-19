import { Link, useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, UserCheck, Activity, ShieldCheck, MapPin, Star, ArrowRight, 
  Phone, Stethoscope, Banknote, CheckCircle2, Clock, Navigation 
} from 'lucide-react';

export default function Home() {
  const { lang } = useOutletContext(); 

  // --- 1. THE MINI IMAGES FOR SERVICES ---
  const serviceImages = [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500", // Therapy
    "https://cdn.medme.pl/zdjecie/16869,0,0/kardiolog.jpg", // Cardiology
    "https://partnersinpediatrics.com/wp-content/uploads/2019/07/partners-in-pediatrics-expectant-mother-family-pregnant-pregnancy-blog-choosing-a-pediatrician-for-your-newborn-baby-metro-denver-2.jpg", // Pediatrics
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=500"  // Surgery
  ];

  const content = {
    uz: {
      welcome: "Xush kelibsiz",
      clinicName: "HealthPlus",
      slogan: "Sizning Sog'lig'ingiz — Bizning Baxtimiz",
      desc: "Toshkentning eng zamonaviy klinikasida Yevropa standartlari. Biz sizga va oilangizga g'amxo'rlik qilamiz.",
      btnBook: "Qabulga Yozilish",
      btnCall: "Qo'ng'iroq",
      stats: [
        { num: "15+", label: "Yillik Tajriba" },
        { num: "50+", label: "Shifokorlar" },
        { num: "24/7", label: "Tez Yordam" },
      ],
      services: [
        { title: "Terapiya", desc: "Umumiy salomatlik va profilaktika." },
        { title: "Kardiologiya", desc: "Yurak va qon tomir kasalliklari." },
        { title: "Pediatriya", desc: "Bolalar uchun maxsus g'amxo'rlik." },
        { title: "Jarrohlik", desc: "Zamonaviy va xavfsiz operatsiyalar." },
      ],
      careTitle: "Jahon Standartlari",
      careList: [
        "Xalqaro Protokollar va Standartlar",
        "Zamonaviy MRT va MSKT Diagnostika",
        "Shinam VIP Palatalar",
        "Sug'urta Hamkorlari Qabul Qilinadi"
      ],
      pricingTitle: "Xizmatlar Narxi",
      pricingStart: "dan boshlab",
      prices: [
        { name: "Konsultatsiya", price: "150,000 so'm" },
        { name: "EKG Diagnostika", price: "80,000 so'm" },
        { name: "Umumiy Tahlil", price: "50,000 so'm" },
      ],
      locationTitle: "Bizning Manzil",
      locationDesc: "Bizni topish juda oson. Markaziy yo'l yoqasida.",
      address: "Amir Temur ko'chasi 108, Toshkent",
      hoursLabel: "Ish Vaqti:",
      hours: "Dushanba - Yakshanba: 08:00 - 22:00",
      contactLabel: "Aloqa:",
      getDir: "Yo'nalishni Ochish"
    },
    en: {
      welcome: "Welcome to",
      clinicName: "HealthPlus",
      slogan: "Your Health Is Our Top Priority",
      desc: "Experience world-class healthcare in Tashkent. Advanced technology, compassionate care, and expert doctors.",
      btnBook: "Book Appointment",
      btnCall: "Call Now",
      stats: [
        { num: "15+", label: "Years Exp" },
        { num: "50+", label: "Doctors" },
        { num: "24/7", label: "Support" },
      ],
      services: [
        { title: "Therapy", desc: "General health and prevention." },
        { title: "Cardiology", desc: "Heart and vascular health." },
        { title: "Pediatrics", desc: "Special care for children." },
        { title: "Surgery", desc: "Modern and safe operations." },
      ],
      careTitle: "World Class Care",
      careList: [
        "International Protocols & Standards",
        "Advanced MRI & CT Diagnostics",
        "Comfortable VIP Patient Rooms",
        "Insurance Partners Accepted"
      ],
      pricingTitle: "Our Pricing",
      pricingStart: "starting from",
      prices: [
        { name: "Consultation", price: "$15" },
        { name: "ECG Diagnostics", price: "$8" },
        { name: "General Checkup", price: "$5" },
      ],
      locationTitle: "Visit Us Today",
      locationDesc: "Easy to find. Located on the main avenue.",
      address: "108 Amir Temur Avenue, Tashkent",
      hoursLabel: "Working Hours:",
      hours: "Monday - Sunday: 08:00 - 22:00",
      contactLabel: "Contact:",
      getDir: "Get Directions"
    },
    ru: {
      welcome: "Добро пожаловать в",
      clinicName: "HealthPlus",
      slogan: "Ваше Здоровье — Наш Приоритет",
      desc: "Европейские стандарты медицины в центре Ташкента. Забота о вас и вашей семье 24/7.",
      btnBook: "Записаться",
      btnCall: "Позвонить",
      stats: [
        { num: "15+", label: "Лет Опыта" },
        { num: "50+", label: "Врачей" },
        { num: "24/7", label: "Помощь" },
      ],
      services: [
        { title: "Терапия", desc: "Общее здоровье и профилактика." },
        { title: "Кардиология", desc: "Здоровье сердца и сосудов." },
        { title: "Педиатрия", desc: "Особая забота о детях." },
        { title: "Хирургия", desc: "Современные и безопасные операции." },
      ],
      careTitle: "Мировые Стандарты",
      careList: [
        "Международные Протоколы Лечения",
        "МРТ и МСКТ Диагностика",
        "Комфортабельные VIP Палаты",
        "Работаем со Страховыми"
      ],
      pricingTitle: "Стоимость",
      pricingStart: "от",
      prices: [
        { name: "Консультация", price: "150,000 сум" },
        { name: "ЭКГ Диагностика", price: "80,000 сум" },
        { name: "Общий Анализ", price: "50,000 сум" },
      ],
      locationTitle: "Наш Адрес",
      locationDesc: "Нас легко найти. Мы на главной улице.",
      address: "Проспект Амира Темура 108, Ташкент",
      hoursLabel: "Время работы:",
      hours: "Понедельник - Воскресенье: 08:00 - 22:00",
      contactLabel: "Контакты:",
      getDir: "Маршрут"
    }
  };

  const t = content[lang] || content.en;

  // Icon mapping helper
  const getServiceIcon = (index) => {
    const icons = [<Stethoscope size={24}/>, <Activity size={24}/>, <UserCheck size={24}/>, <ShieldCheck size={24}/>];
    return icons[index];
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 pb-24 px-4">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal-200/20 dark:bg-teal-900/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-6 z-10"
          >
            <div>
              <span className="text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase text-sm mb-2 block pl-1">
                {t.welcome}
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                Health<span className="text-teal-500">Plus</span><span className="text-teal-500 text-6xl">.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-slate-500 dark:text-slate-300 mt-2">
                {t.slogan}
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed border-l-4 border-teal-200 dark:border-teal-800 pl-4">
              {t.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/appointment" className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                <Calendar size={20} />
                {t.btnBook}
              </Link>
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-white">
                <Phone size={20} className="text-teal-500" />
                {t.btnCall}
              </button>
            </div>
            <div className="flex gap-8 pt-8 opacity-80">
              {t.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.num}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="md:w-1/2 relative z-10"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white dark:border-slate-800">
              <img 
                src="https://cdn.prod.website-files.com/66bd394eedeb9d6ee29898c6/682f5450a046c241920c1e6f_Three%20doctors%20standing%20side%20by%20side%2C%20crossing%20their%20arms.jpg" 
                alt="Smiling Doctor" 
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-1000"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/20 flex items-center gap-3">
                 <div className="bg-teal-100 dark:bg-teal-900/50 p-2 rounded-full text-teal-600 dark:text-teal-400">
                    <ShieldCheck size={24} />
                 </div>
                 <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Certified</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Best Clinic '24</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES WITH MINI IMAGES (Interactive Cards) ================= */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {t.services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }} // Lift effect on hover
              className="group relative h-80 rounded-[2rem] overflow-hidden shadow-lg cursor-pointer"
            >
              {/* 1. Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${serviceImages[i]})` }}
              ></div>
              
              {/* 2. Gradient Overlay (Darkens image so text is readable) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

              {/* 3. Content at Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <div className="mb-3 bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center border border-white/30">
                  {getServiceIcon(i)}
                </div>
                <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                <p className="text-sm text-slate-200 opacity-80 line-clamp-2">{s.desc}</p>
                
                {/* Arrow appears on hover */}
                <div className="mt-4 flex items-center text-teal-300 font-bold text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Batafsil <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PRICING & INFO ================= */}
      <section className="py-20 bg-slate-100 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t.careTitle}</h2>
            <div className="space-y-4">
              {t.careList.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-500 shrink-0" size={24} />
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
             <div className="flex items-center gap-2 mb-2">
                <Banknote className="text-teal-500" />
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">{t.pricingTitle}</h3>
             </div>
             {t.prices.map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm flex justify-between items-center border border-slate-200 dark:border-slate-700 hover:border-teal-500 transition-colors">
                <span className="font-bold text-slate-700 dark:text-slate-200">{item.name}</span>
                <div className="text-right">
                  <span className="block text-xs text-slate-400 uppercase">{t.pricingStart}</span>
                  <span className="text-xl font-bold text-teal-600 dark:text-teal-400">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAP & INFO ================= */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">{t.locationTitle}</h2>
            <p className="text-slate-500 dark:text-slate-400">{t.locationDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="h-[400px] md:h-auto min-h-[400px] w-full bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-slate-100 dark:border-slate-800 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.347348951234!2d69.2797373154244!3d41.32118897927014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b518c0c5b1d%3A0x6b3e8e1c0c5b1d!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                title="Google Map"
              ></iframe>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center shadow-inner border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-teal-100 dark:bg-teal-900/50 p-4 rounded-2xl text-teal-600 dark:text-teal-400">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{content[lang].clinicName}</h3>
                  <p className="text-slate-500 dark:text-slate-400">{t.address}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase mb-1">{t.hoursLabel}</p>
                  <div className="flex items-center gap-3 text-lg font-medium text-slate-800 dark:text-slate-200">
                    <Clock className="text-teal-500" /> {t.hours}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase mb-1">{t.contactLabel}</p>
                  <div className="flex items-center gap-3 text-lg font-medium text-slate-800 dark:text-slate-200">
                    <Phone className="text-teal-500" /> +998 71 200-00-00
                  </div>
                </div>
                <a 
                  href="https://goo.gl/maps" 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-teal-600 text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
                >
                  <Navigation size={20} /> {t.getDir}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}