import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Brain, Baby, Stethoscope, Eye, Bone, 
  RotateCw, X, CheckCircle, ClipboardList, 
  AlertCircle, Coins, Award, ArrowRight
} from 'lucide-react';

export default function Services() {
  const { lang } = useOutletContext();
  
  // Stores the INDEX of the card that is currently flipped. 
  // If null, no card is flipped.
  const [flippedIndex, setFlippedIndex] = useState(null);
  
  const [selectedService, setSelectedService] = useState(null);

  // --- 1. Content & Translations ---
  const content = {
    uz: {
      title: "Bizning Bo'limlar",
      subtitle: "Eng zamonaviy texnologiyalar va tajribali shifokorlar xizmatingizda.",
      btnDetails: "Batafsil & Narxlar",
      btnProfile: "Shifokorlar",
      startFrom: "dan",
      // UPDATED: "Aylantirish" -> "Batafsil" (More meaningful)
      flipText: "Batafsil", 
      modal: {
        priceTitle: "Xizmatlar Narxnomasi",
        prepTitle: "Qabulga Tayyorgarlik",
        close: "Yopish",
        book: "Qabulga Yozilish"
      },
      services: [
        { 
          title: "Kardiologiya", 
          price: "150,000", 
          desc: "Yurak salomatligi diagnostikasi va murakkab jarrohlik amaliyotlari.",
          badge: "24/7 Tez Yordam",
          procedures: ["EKG Diagnostikasi", "Xolter Monitori", "Angiografiya", "Yurak UZI"],
          priceList: [
            { name: "Kardiolog Konsultatsiyasi", cost: "150,000 so'm" },
            { name: "EKG", cost: "50,000 so'm" },
            { name: "Exokardiografiya", cost: "200,000 so'm" }
          ],
          prep: "Qon tahlillari och qoringa topshirilishi kerak. Oldingi EKG natijalarini o'zingiz bilan oling."
        },
        { 
          title: "Nevrologiya", 
          price: "120,000", 
          desc: "Miya, asab tizimi va umurtqa pog'onasi kasalliklarini davolash.",
          badge: "Zamonaviy MRT",
          procedures: ["Bosh miya MRT", "EEG Tekshiruvi", "Umurtqa davolash", "Insult profilaktikasi"],
          priceList: [
            { name: "Nevrolog Konsultatsiyasi", cost: "120,000 so'm" },
            { name: "MRT (Bosh miya)", cost: "450,000 so'm" },
            { name: "EEG", cost: "180,000 so'm" }
          ],
          prep: "MRT tekshiruvi uchun metall buyumlarni yechib qo'ying. Tinchlaning va uxlashga harakat qiling."
        },
        { 
          title: "Pediatriya", 
          price: "80,000", 
          desc: "Yangi tug'ilgan chaqaloqlar va bolalar salomatligi g'amxo'rligi.",
          badge: "Bolalar Uchun Qulay",
          procedures: ["Emlashlar", "Rivojlanish nazorati", "Pediatr ko'rigi", "Bolalar massaji"],
          priceList: [
            { name: "Pediatr Ko'rigi", cost: "80,000 so'm" },
            { name: "Emlash (Vaksina)", cost: "100,000 so'm" },
            { name: "Umumiy Tahlil", cost: "40,000 so'm" }
          ],
          prep: "Bolaning emlash kartasini olib keling. Agar tana harorati yuqori bo'lsa, oldindan xabar bering."
        },
        { 
          title: "Umumiy Terapiya", 
          price: "50,000", 
          desc: "Doimiy tekshiruvlar, shamollashni davolash va birlamchi yordam.",
          badge: "Tezkor Laboratoriya",
          procedures: ["Qon tahlillari", "Check-up", "Grippni davolash", "Qon bosimi nazorati"],
          priceList: [
            { name: "Terapevt Ko'rigi", cost: "50,000 so'm" },
            { name: "Qon Tahlili (Umumiy)", cost: "35,000 so'm" },
            { name: "Tomchi Dori (Kapelnitsa)", cost: "60,000 so'm" }
          ],
          prep: "Tahlillar uchun ertalab ovqatlanmasdan keling. Ko'p suyuqlik ichish tavsiya etiladi."
        },
        { 
          title: "Oftalmologiya", 
          price: "100,000", 
          desc: "Ko'rish qobiliyatini tiklash, lazer korreksiya va ko'z jarrohligi.",
          badge: "Lazer Texnologiyasi",
          procedures: ["Ko'rishni tekshirish", "Lazer korreksiya", "Katarakta", "Glaukoma davosi"],
          priceList: [
            { name: "Ko'z Tekshiruvi", cost: "100,000 so'm" },
            { name: "Lazer Korreksiya (1 ko'z)", cost: "3,000,000 so'm" },
            { name: "Ko'z Tubi Tekshiruvi", cost: "70,000 so'm" }
          ],
          prep: "Ko'zoynak yoki linzalaringizni olib keling. Tekshiruvdan keyin rul boshqarmaslik tavsiya etiladi."
        },
        { 
          title: "Ortopediya", 
          price: "110,000", 
          desc: "Suyak, bo'g'im, mushak jarohatlari va tayanch-harakat tizimi.",
          badge: "Reabilitatsiya Zali",
          procedures: ["Rentgen", "Gips qo'yish", "Bo'g'im operatsiyasi", "Sport jarohatlari"],
          priceList: [
            { name: "Ortoped Konsultatsiyasi", cost: "110,000 so'm" },
            { name: "Rentgen", cost: "90,000 so'm" },
            { name: "Gips Qo'yish", cost: "150,000 so'm" }
          ],
          prep: "Jarohatlangan joyni qimirlatmaslikka harakat qiling. Rentgen uchun metall buyumlarni yechish kerak."
        },
      ]
    },
    en: {
      title: "Medical Departments",
      subtitle: "State-of-the-art technology and expert care for you.",
      btnDetails: "Details & Prices",
      btnProfile: "Doctors",
      startFrom: "from",
      flipText: "More Info",
      modal: {
        priceTitle: "Service Price List",
        prepTitle: "How to Prepare",
        close: "Close",
        book: "Book Now"
      },
      services: [
        { 
          title: "Cardiology", 
          price: "$15", 
          desc: "Complete heart health diagnostics and complex surgeries.",
          badge: "24/7 Urgency",
          procedures: ["ECG Diagnostics", "Holter Monitor", "Angiography", "Heart Ultrasound"],
          priceList: [
            { name: "Cardiologist Consultation", cost: "$15" },
            { name: "ECG", cost: "$5" },
            { name: "Echocardiography", cost: "$20" }
          ],
          prep: "Come on an empty stomach for blood tests. Bring previous ECG results if available."
        },
        { 
          title: "Neurology", 
          price: "$12", 
          desc: "Care for brain, nervous system and spine disorders.",
          badge: "Advanced MRI",
          procedures: ["Brain MRI", "EEG Scan", "Spine Therapy", "Stroke Prevention"],
          priceList: [
            { name: "Neurologist Consultation", cost: "$12" },
            { name: "MRI (Brain)", cost: "$45" },
            { name: "EEG", cost: "$18" }
          ],
          prep: "Remove metal objects for MRI. Try to relax and sleep well before EEG."
        },
        { 
          title: "Pediatrics", 
          price: "$8", 
          desc: "Specialized healthcare for infants and children.",
          badge: "Kid Friendly",
          procedures: ["Vaccinations", "Growth Check", "Pediatric Exam", "Baby Massage"],
          priceList: [
            { name: "Pediatric Exam", cost: "$8" },
            { name: "Vaccination", cost: "$10" },
            { name: "General Checkup", cost: "$4" }
          ],
          prep: "Bring the child's vaccination card. Inform us if the child has a high fever."
        },
        { 
          title: "General Therapy", 
          price: "$5", 
          desc: "Routine checkups, flu treatment and primary care.",
          badge: "Quick Lab",
          procedures: ["Blood Tests", "Full Check-up", "Flu Treatment", "BP Control"],
          priceList: [
            { name: "Therapist Consultation", cost: "$5" },
            { name: "Blood Test", cost: "$3" },
            { name: "IV Drip", cost: "$6" }
          ],
          prep: "Do not eat in the morning for blood tests. Drink plenty of water."
        },
        { 
          title: "Ophthalmology", 
          price: "$10", 
          desc: "Vision correction, laser technology and eye surgery.",
          badge: "Laser Tech",
          procedures: ["Vision Test", "Laser Correction", "Cataract", "Glaucoma Care"],
          priceList: [
            { name: "Eye Exam", cost: "$10" },
            { name: "Laser Correction", cost: "$300" },
            { name: "Retina Check", cost: "$7" }
          ],
          prep: "Bring your glasses or lenses. Avoid driving immediately after the exam."
        },
        { 
          title: "Orthopedics", 
          price: "$11", 
          desc: "Treatment for bones, joints, and musculoskeletal issues.",
          badge: "Rehab Gym",
          procedures: ["X-Ray", "Casting", "Joint Surgery", "Sports Injury"],
          priceList: [
            { name: "Orthopedist Consultation", cost: "$11" },
            { name: "X-Ray", cost: "$9" },
            { name: "Cast Application", cost: "$15" }
          ],
          prep: "Immobilize the injured area. Remove metal objects for X-Ray."
        },
      ]
    },
    ru: {
      title: "Наши Отделения",
      subtitle: "Современные технологии и экспертная помощь.",
      btnDetails: "Детали и Цены",
      btnProfile: "Врачи",
      startFrom: "от",
      flipText: "Подробнее",
      modal: {
        priceTitle: "Прайс-лист",
        prepTitle: "Подготовка к приему",
        close: "Закрыть",
        book: "Записаться"
      },
      services: [
        { 
          title: "Кардиология", 
          price: "150,000", 
          desc: "Диагностика сердца и сложные хирургические операции.",
          badge: "24/7 Помощь",
          procedures: ["ЭКГ", "Холтер", "Ангиография", "УЗИ Сердца"],
          priceList: [
            { name: "Консультация Кардиолога", cost: "150,000 сум" },
            { name: "ЭКГ", cost: "50,000 сум" },
            { name: "Эхокардиография", cost: "200,000 сум" }
          ],
          prep: "Анализы крови сдавать натощак. Возьмите с собой результаты предыдущих ЭКГ."
        },
        { 
          title: "Неврология", 
          price: "120,000", 
          desc: "Лечение заболеваний мозга, нервной системы и позвоночника.",
          badge: "МРТ Центр",
          procedures: ["МРТ Мозга", "ЭЭГ", "Лечение спины", "Профилактика инсульта"],
          priceList: [
            { name: "Консультация Невролога", cost: "120,000 сум" },
            { name: "МРТ (Голова)", cost: "450,000 сум" },
            { name: "ЭЭГ", cost: "180,000 сум" }
          ],
          prep: "Снимите металлические предметы для МРТ. Постарайтесь расслабиться перед ЭЭГ."
        },
        { 
          title: "Педиатрия", 
          price: "80,000", 
          desc: "Специализированная помощь для новорожденных и детей.",
          badge: "Забота о Детях",
          procedures: ["Вакцинация", "Контроль роста", "Осмотр педиатра", "Детский массаж"],
          priceList: [
            { name: "Осмотр Педиатра", cost: "80,000 сум" },
            { name: "Вакцинация", cost: "100,000 сум" },
            { name: "Общий Анализ", cost: "40,000 сум" }
          ],
          prep: "Возьмите карту прививок ребенка. Сообщите, если у ребенка высокая температура."
        },
        { 
          title: "Общая Терапия", 
          price: "50,000", 
          desc: "Регулярные осмотры, лечение гриппа и первичная помощь.",
          badge: "Экспресс Лаб",
          procedures: ["Анализы крови", "Чек-ап", "Лечение гриппа", "Контроль давления"],
          priceList: [
            { name: "Консультация Терапевта", cost: "50,000 сум" },
            { name: "Анализ Крови", cost: "35,000 сум" },
            { name: "Капельница", cost: "60,000 сум" }
          ],
          prep: "Сдавать анализы строго натощак. Пейте больше воды."
        },
        { 
          title: "Офтальмология", 
          price: "100,000", 
          desc: "Коррекция зрения, лазерные технологии и хирургия глаз.",
          badge: "Лазерные Тех.",
          procedures: ["Проверка зрения", "Лазерная коррекция", "Катаракта", "Глаукома"],
          priceList: [
            { name: "Осмотр Глаз", cost: "100,000 сум" },
            { name: "Лазерная Коррекция", cost: "3,000,000 сум" },
            { name: "Осмотр Сетчатки", cost: "70,000 сум" }
          ],
          prep: "Возьмите очки или линзы. Не рекомендуется водить машину сразу после осмотра."
        },
        { 
          title: "Ортопедия", 
          price: "110,000", 
          desc: "Лечение костей, суставов и опорно-двигательного аппарата.",
          badge: "Реабилитация",
          procedures: ["Рентген", "Гипс", "Операции суставов", "Спорт травмы"],
          priceList: [
            { name: "Консультация Ортопеда", cost: "110,000 сум" },
            { name: "Рентген", cost: "90,000 сум" },
            { name: "Наложение Гипса", cost: "150,000 сум" }
          ],
          prep: "Обездвижьте поврежденную зону. Снимите металл для рентгена."
        },
      ]
    }
  };

  const t = content[lang] || content.en;

  // --- 2. Static Assets (Mapped by index) ---
  const staticAssets = [
    { icon: <Heart size={32} />, color: "from-red-500 to-rose-600", img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=600" },
    { icon: <Brain size={32} />, color: "from-purple-500 to-violet-600", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600" },
    { icon: <Baby size={32} />, color: "from-yellow-400 to-orange-500", img: "https://partnersinpediatrics.com/wp-content/uploads/2019/07/partners-in-pediatrics-expectant-mother-family-pregnant-pregnancy-blog-choosing-a-pediatrician-for-your-newborn-baby-metro-denver-2.jpg" },
    { icon: <Stethoscope size={32} />, color: "from-blue-500 to-cyan-600", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" },
    { icon: <Eye size={32} />, color: "from-teal-500 to-emerald-600", img: "https://dmclinic.uz/wp-content/uploads/2023/12/1-oftalmologiya-v-tashkente-dmc.jpg" },
    { icon: <Bone size={32} />, color: "from-orange-500 to-amber-600", img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-4 transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
          >
            {t.title}
          </motion.h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* --- GRID OF 3D FLIP CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => {
            const asset = staticAssets[index];
            
            // ✅ CRITICAL FIX: Only set isFlipped if the current index matches state
            const isFlipped = flippedIndex === index;

            return (
              <div key={index} className="group h-[500px] perspective-1000 relative">
                <motion.div
                  className="w-full h-full relative transition-all duration-700"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  
                  {/* === FRONT FACE === */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700/50 flex flex-col"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    
                    {/* Image Header */}
                    <div className="relative h-1/2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                      <img src={asset.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      
                      {/* Floating Trust Badge */}
                      <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wide flex items-center gap-1.5">
                        <Award size={14} className="text-yellow-400" />
                        {service.badge}
                      </div>

                      {/* Icon */}
                      <div className={`absolute -bottom-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${asset.color} flex items-center justify-center text-white shadow-lg z-20`}>
                        {asset.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-12 px-8 pb-8 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">{service.title}</h3>
                        <div className="text-right">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">{t.startFrom}</span>
                          <span className="text-lg font-bold text-teal-600 dark:text-teal-400">{service.price}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                      
                      {/* Flip Button */}
                      <div className="mt-auto flex gap-4">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation(); // ✅ Stop accidental clicks
                            setFlippedIndex(index);
                          }}
                          className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        >
                          <RotateCw size={16} /> {t.flipText}
                        </button>
                        <Link 
                           to="/doctors"
                           className="flex-1 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                           {t.btnProfile}
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* === BACK FACE (FLIPPED) === */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-slate-900 text-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col p-8 bg-gradient-to-br from-slate-900 to-slate-800"
                    style={{ 
                      backfaceVisibility: "hidden", 
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <div className="flex justify-between items-center mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${asset.color} flex items-center justify-center`}>
                        {asset.icon}
                      </div>
                      {/* Close (X) Button */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // ✅ FIXED: Stop bubbling so it actually works
                          setFlippedIndex(null);
                        }}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer z-50"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    
                    {/* Procedures List */}
                    <ul className="space-y-3 mb-8">
                      {service.procedures.map((proc, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                          <CheckCircle size={18} className="text-teal-400 flex-shrink-0" />
                          <span className="text-sm font-medium">{proc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Open Modal Button */}
                    <div className="mt-auto">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService({ ...service, asset });
                        }}
                        className="w-full bg-white text-slate-900 py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-teal-50 transition-colors shadow-lg shadow-white/10"
                      >
                        <ClipboardList size={20} />
                        {t.btnDetails}
                      </button>
                    </div>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

        {/* --- QUICK VIEW MODAL --- */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />
              
              {/* Modal Content */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className={`bg-gradient-to-r ${selectedService.asset.color} p-8 text-white flex justify-between items-start`}>
                  <div>
                    <h2 className="text-3xl font-black mb-1">{selectedService.title}</h2>
                    <p className="opacity-90 font-medium">{t.modal.priceTitle}</p>
                  </div>
                  <button onClick={() => setSelectedService(null)} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"><X size={24} /></button>
                </div>

                <div className="p-8 space-y-8">
                  
                  {/* Price Table */}
                  <div className="space-y-4">
                    {selectedService.priceList.map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                          <Coins className="text-teal-500" size={20} />
                          <span className="font-bold text-slate-700 dark:text-slate-200">{item.name}</span>
                        </div>
                        <span className="font-black text-slate-900 dark:text-white">{item.cost}</span>
                      </div>
                    ))}
                  </div>

                  {/* Preparation Info */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50 flex gap-4">
                    <AlertCircle className="text-blue-600 dark:text-blue-400 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">{t.modal.prepTitle}</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-200 leading-relaxed">
                        {selectedService.prep}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                     <button onClick={() => setSelectedService(null)} className="flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                       {t.modal.close}
                     </button>
                     <Link to="/appointment" className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center hover:shadow-xl transition-all">
                       {t.modal.book}
                     </Link>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}