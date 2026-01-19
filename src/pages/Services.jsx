import { Link, useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Brain, Baby, Stethoscope, Eye, Bone, ArrowRight, Activity, Award, Tag } from 'lucide-react';

export default function Services() {
  const { lang } = useOutletContext(); 

  // --- 1. Static Assets (Images & Icons) ---
  const serviceAssets = [
    { 
      icon: <Heart size={32} />, 
      img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=600",
      color: "from-red-500 to-rose-600",
      glowColor: "shadow-red-500/30"
    },
    { 
      icon: <Brain size={32} />, 
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600",
      color: "from-purple-500 to-violet-600",
      glowColor: "shadow-purple-500/30"
    },
    { 
      icon: <Baby size={32} />, 
      // UPDATED PHOTO FOR PEDIATRICS

      img: "https://partnersinpediatrics.com/wp-content/uploads/2019/07/partners-in-pediatrics-expectant-mother-family-pregnant-pregnancy-blog-choosing-a-pediatrician-for-your-newborn-baby-metro-denver-2.jpg",

      color: "from-yellow-400 to-orange-500",

      glowColor: "shadow-yellow-500/30"
    },
    { 
      icon: <Stethoscope size={32} />, 
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
      color: "from-blue-500 to-cyan-600",
      glowColor: "shadow-blue-500/30"
    },
    { 
      icon: <Eye size={32} />, 
      img: "https://dmclinic.uz/wp-content/uploads/2023/12/1-oftalmologiya-v-tashkente-dmc.jpg",
      color: "from-teal-500 to-emerald-600",
      glowColor: "shadow-teal-500/30"
    },
    { 
      icon: <Bone size={32} />, 
      img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600",
      color: "from-orange-500 to-amber-600",
      glowColor: "shadow-orange-500/30"
    }
  ];

  // --- 2. Translations (Added Prices) ---
  const content = {
    uz: {
      title: "Bizning Bo'limlar",
      subtitle: "Biz eng zamonaviy texnologiyalar va tajribali shifokorlar yordamida keng ko'lamli tibbiy xizmatlarni taqdim etamiz.",
      btnText: "Shifokorlarni Ko'rish",
      startFrom: "dan boshlab",
      list: [
        { title: "Kardiologiya", price: "150,000 so'm", desc: "Yurak salomatligi diagnostikasi va jarrohligi." },
        { title: "Nevrologiya", price: "120,000 so'm", desc: "Miya va asab tizimi kasalliklarini davolash." },
        { title: "Pediatriya", price: "80,000 so'm", desc: "Bolalar va o'smirlar uchun maxsus g'amxo'rlik." },
        { title: "Umumiy Terapiya", price: "50,000 so'm", desc: "Doimiy tekshiruvlar va birlamchi tibbiy yordam." },
        { title: "Oftalmologiya", price: "100,000 so'm", desc: "Ko'rish qobiliyatini tiklash va ko'z jarrohligi." },
        { title: "Ortopediya", price: "110,000 so'm", desc: "Suyak, bo'g'im va mushak muammolarini davolash." },
      ]
    },
    en: {
      title: "Our Medical Departments",
      subtitle: "We provide a wide range of medical services using state-of-the-art technology and expert care.",
      btnText: "View Specialists",
      startFrom: "from",
      list: [
        { title: "Cardiology", price: "$15", desc: "Complete heart health diagnostics and surgery." },
        { title: "Neurology", price: "$12", desc: "Advanced care for brain and nervous system disorders." },
        { title: "Pediatrics", price: "$8", desc: "Specialized healthcare for infants and children." },
        { title: "General Therapy", price: "$5", desc: "Routine checkups and primary care services." },
        { title: "Ophthalmology", price: "$10", desc: "Vision correction and eye surgery specialists." },
        { title: "Orthopedics", price: "$11", desc: "Treatment for bones, joints, and musculoskeletal issues." },
      ]
    },
    ru: {
      title: "Наши Отделения",
      subtitle: "Мы предоставляем широкий спектр медицинских услуг, используя современные технологии и экспертный подход.",
      btnText: "Наши Специалисты",
      startFrom: "от",
      list: [
        { title: "Кардиология", price: "150,000 сум", desc: "Диагностика и хирургия заболеваний сердца." },
        { title: "Неврология", price: "120,000 сум", desc: "Лечение заболеваний мозга и нервной системы." },
        { title: "Педиатрия", price: "80,000 сум", desc: "Специализированная помощь для детей и подростков." },
        { title: "Общая Терапия", price: "50,000 сум", desc: "Регулярные осмотры и первичная медицинская помощь." },
        { title: "Офтальмология", price: "100,000 сум", desc: "Коррекция зрения и хирургия глаз." },
        { title: "Ортопедия", price: "110,000 сум", desc: "Лечение заболеваний костей, суставов и мышц." },
      ]
    }
  };

  const t = content[lang] || content.en;

  // Animation Config
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950 pt-32 pb-20 px-4 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Animated Header */}
        <div className="text-center mb-20">
          
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight tracking-tight"
          >
            {t.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-semibold"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.list.map((service, index) => {
            const asset = serviceAssets[index];
            return (
              <motion.div 
                key={index}
                variants={itemAnim}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
              >
                {/* Background Image with Zoom Effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${asset.img})` }}
                ></div>

                {/* Dark Overlay with Enhanced Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20 group-hover:from-slate-900 group-hover:via-slate-900/70 transition-all duration-500"></div>

                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-white/20 transition-all duration-500"></div>
                
                {/* Top Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${asset.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  
                  {/* Top Row: Price Badge (Left) & Icon (Right) */}
                  <div className="flex justify-between items-start w-full">
                    
                    {/* Glassmorphism Price Badge */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-2xl font-bold flex items-center gap-2 shadow-lg"
                    >
                      <Tag size={16} className="text-white/80" />
                      <div className="flex flex-col leading-none">
                        <span className="text-[10px] uppercase opacity-70 font-semibold">{t.startFrom}</span>
                        <span className="text-lg">{service.price}</span>
                      </div>
                    </motion.div>

                    {/* Floating Icon */}
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${asset.color} flex items-center justify-center text-white shadow-2xl ${asset.glowColor}`}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {asset.icon}
                    </motion.div>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-4">
                    {/* Title with Slide Animation */}
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description with Fade Effect */}
                    <p className="text-slate-200 text-base md:text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 group-hover:line-clamp-none">
                      {service.desc}
                    </p>

                    {/* Divider */}
                    <div className="w-16 h-1 bg-gradient-to-r from-white/60 to-transparent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                    {/* Button with Arrow Animation */}
                    <Link 
                      to="/doctors" 
                      className="inline-flex items-center gap-3 text-white font-bold text-lg group/btn opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <span className="relative">
                        {t.btnText}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover/btn:w-full transition-all duration-300"></span>
                      </span>
                      <ArrowRight 
                        size={22} 
                        className="transform group-hover/btn:translate-x-2 transition-transform duration-300" 
                      />
                    </Link>
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link 
            to="/doctors"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-indigo-500/30 hover:shadow-3xl hover:shadow-indigo-500/40 transform hover:-translate-y-1 transition-all duration-300"
          >
            <Award size={24} />
            <span>View All Our Specialists</span>
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}