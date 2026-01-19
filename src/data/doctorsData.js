export const doctors = [
    {
      id: 1,
      name: "Dr. Dilnoza Rahimova",
      specialty: { uz: "Kardiolog", en: "Cardiologist", ru: "Кардиолог" },
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
      experience: "15+",
      rating: 4.9,
      about: {
        uz: "Dr. Dilnoza yurak kasalliklarini davolash bo'yicha 15 yillik tajribaga ega oliy toifali shifokor.",
        en: "Dr. Dilnoza is a top-category specialist with 15 years of experience in treating heart diseases.",
        ru: "Доктор Дильноза — врач высшей категории с 15-летним стажем лечения заболеваний сердца."
      },
      schedule: ["Mon", "Wed", "Fri"]
    },
    {
      id: 2,
      name: "Dr. Jamshid Sodiqov",
      specialty: { uz: "Nevrolog", en: "Neurologist", ru: "Невролог" },
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
      experience: "12+",
      rating: 4.8,
      about: {
        uz: "Dr. Jamshid asab tizimi kasalliklarini zamonaviy usullar bilan davolash bo'yicha mutaxassis.",
        en: "Dr. Jamshid is a specialist in treating nervous system diseases using modern methods.",
        ru: "Доктор Жамшид — специалист по лечению заболеваний нервной системы современными методами."
      },
      schedule: ["Tue", "Thu", "Sat"]
    },
    {
      id: 3,
      name: "Dr. Shahnoza Aliyeva",
      specialty: { uz: "Pediatr", en: "Pediatrician", ru: "Педиатр" },
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300",
      experience: "10+",
      rating: 5.0,
      about: {
        uz: "Dr. Shahnoza bolalar salomatligi va rivojlanishi bo'yicha yetuk mutaxassis.",
        en: "Dr. Shahnoza is a leading expert in child health and development.",
        ru: "Доктор Шахноза — ведущий специалист по здоровью и развитию детей."
      },
      schedule: ["Mon", "Tue", "Thu"]
    },
    {
      id: 4,
      name: "Dr. Sardor Kamilov",
      specialty: { uz: "Stomatolog", en: "Dentist", ru: "Стоматолог" },
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",
      experience: "8+",
      rating: 4.7,
      about: {
        uz: "Tishlarni davolash va estetik restavratsiya bo'yicha professional.",
        en: "Professional in dental treatment and aesthetic restoration.",
        ru: "Профессионал в лечении зубов и эстетической реставрации."
      },
      schedule: ["Wed", "Fri", "Sat"]
    },
    {
      id: 5,
      name: "Dr. Malika Usmanova",
      specialty: { uz: "Ginekolog", en: "Gynecologist", ru: "Гинеколог" },
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300",
      experience: "18+",
      rating: 4.9,
      about: {
        uz: "Ayollar salomatligi va homiladorlikni nazorat qilish bo'yicha ekspert.",
        en: "Expert in women's health and pregnancy monitoring.",
        ru: "Эксперт по женскому здоровью и ведению беременности."
      },
      schedule: ["Mon", "Thu", "Fri"]
    },
    {
      id: 6,
      name: "Dr. Farhod Yuldashev",
      specialty: { uz: "Jarroh", en: "Surgeon", ru: "Хирург" },
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300",
      experience: "20+",
      rating: 5.0,
      about: {
        uz: "Murakkab jarrohlik amaliyotlarini o'tkazishda katta tajribaga ega.",
        en: "Extensive experience in performing complex surgical operations.",
        ru: "Имеет большой опыт проведения сложных хирургических операций."
      },
      schedule: ["Tue", "Wed", "Thu"]
    },
    {
      id: 7,
      name: "Dr. Aziza Tursunova",
      specialty: { uz: "Dermatolog", en: "Dermatologist", ru: "Дерматолог" },
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=300",
      experience: "9+",
      rating: 4.8,
      about: {
        uz: "Teri kasalliklarini davolash va kosmetologiya bo'yicha mutaxassis.",
        en: "Specialist in treating skin diseases and cosmetology.",
        ru: "Специалист по лечению кожных заболеваний и косметологии."
      },
      schedule: ["Mon", "Fri"]
    },
    {
      id: 8,
      name: "Dr. Otabek Nazarov",
      specialty: { uz: "Urolog", en: "Urologist", ru: "Уролог" },
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=300",
      experience: "14+",
      rating: 4.7,
      about: {
        uz: "Erkaklar salomatligi va buyrak kasalliklari bo'yicha shifokor.",
        en: "Doctor specializing in men's health and kidney diseases.",
        ru: "Врач, специализирующийся на мужском здоровье и заболеваниях почек."
      },
      schedule: ["Tue", "Thu", "Sat"]
    },
    {
      id: 9,
      name: "Dr. Laylo Karimova",
      specialty: { uz: "Endokrinolog", en: "Endocrinologist", ru: "Эндокринолог" },
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_hybrid&w=740&q=80",
      experience: "11+",
      rating: 4.9,
      about: {
        uz: "Gormonal buzilishlar va qandli diabetni davolash bo'yicha ekspert.",
        en: "Expert in treating hormonal disorders and diabetes.",
        ru: "Эксперт по лечению гормональных нарушений и сахарного диабета."
      },
      schedule: ["Mon", "Wed"]
    },
    {
      id: 10,
      name: "Dr. Bekzod Abdullaev",
      specialty: { uz: "Travmatolog", en: "Traumatologist", ru: "Травматолог" },
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=300",
      experience: "16+",
      rating: 4.8,
      about: {
        uz: "Suyak sinishi va bo'g'im jarohatlarini davolash bo'yicha mutaxassis.",
        en: "Specialist in treating bone fractures and joint injuries.",
        ru: "Специалист по лечению переломов костей и травм суставов."
      },
      schedule: ["Mon", "Tue", "Wed", "Thu", "Fri"]
    },
    {
      id: 11,
      name: "Dr. Nodira Saidova",
      specialty: { uz: "Oftalmolog", en: "Ophthalmologist", ru: "Офтальмолог" },
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300",
      experience: "13+",
      rating: 4.9,
      about: {
        uz: "Ko'z kasalliklarini diagnostika qilish va davolash.",
        en: "Diagnosis and treatment of eye diseases.",
        ru: "Диагностика и лечение заболеваний глаз."
      },
      schedule: ["Tue", "Thu"]
    },
    {
      id: 12,
      name: "Dr. Rustam Ahmedov",
      specialty: { uz: "LOR Shifokor", en: "ENT Doctor", ru: "ЛОР Врач" },
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
      experience: "7+",
      rating: 4.6,
      about: {
        uz: "Quloq, burun va tomoq kasalliklarini davolash bo'yicha mutaxassis.",
        en: "Specialist in treating ear, nose, and throat diseases.",
        ru: "Специалист по лечению заболеваний уха, горла и носа."
      },
      schedule: ["Mon", "Wed", "Fri"]
    },
    {
      id: 13,
      name: "Dr. Umida Ibragimova",
      specialty: { uz: "Terapevt", en: "Therapist", ru: "Терапевт" },
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
      experience: "25+",
      rating: 5.0,
      about: {
        uz: "Umumiy kasalliklar diagnostikasi va davolash bo'yicha oliy toifali shifokor.",
        en: "Top-category doctor in general disease diagnosis and treatment.",
        ru: "Врач высшей категории по диагностике и лечению общих заболеваний."
      },
      schedule: ["Mon", "Tue", "Wed", "Thu", "Fri"]
    },
    {
      id: 14,
      name: "Dr. Sanjar Muhamedov",
      specialty: { uz: "Psixoterapevt", en: "Psychotherapist", ru: "Психотерапевт" },
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300",
      experience: "9+",
      rating: 4.8,
      about: {
        uz: "Ruhiy salomatlik va stress holatlarini davolash bo'yicha yordam beradi.",
        en: "Helps treat mental health and stress conditions.",
        ru: "Помогает в лечении психического здоровья и стрессовых состояний."
      },
      schedule: ["Sat", "Sun"]
    },
    {
      id: 15,
      name: "Dr. Feruza Qosimova",
      specialty: { uz: "Allergolog", en: "Allergist", ru: "Аллерголог" },
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=300",
      experience: "14+",
      rating: 4.7,
      about: {
        uz: "Allergik kasalliklar va immun tizimi muammolarini davolaydi.",
        en: "Treats allergic diseases and immune system problems.",
        ru: "Лечит аллергические заболевания и проблемы иммунной системы."
      },
      schedule: ["Tue", "Thu"]
    },
    {
      id: 16,
      name: "Dr. Davron Ismoilov",
      specialty: { uz: "Rentgenolog", en: "Radiologist", ru: "Рентгенолог" },
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=300",
      experience: "10+",
      rating: 4.9,
      about: {
        uz: "MRT va Rentgen diagnostikasi bo'yicha mutaxassis.",
        en: "Specialist in MRI and X-ray diagnostics.",
        ru: "Специалист по МРТ и рентген-диагностике."
      },
      schedule: ["Mon", "Wed", "Fri"]
    },
    {
      id: 17,
      name: "Dr. Gulnora Azizova",
      specialty: { uz: "Nutritsiolog", en: "Nutritionist", ru: "Нутрициолог" },
      image: "https://thumbs.dreamstime.com/b/asian-indian-female-woman-hospital-doctor-beautiful-medical-office-happy-smiling-stethoscope-83792446.jpg",
      experience: "6+",
      rating: 4.8,
      about: {
        uz: "To'g'ri ovqatlanish va parhez bo'yicha maslahatlar beradi.",
        en: "Provides advice on proper nutrition and diet.",
        ru: "Дает советы по правильному питанию и диете."
      },
      schedule: ["Mon", "Thu"]
    },
    {
      id: 18,
      name: "Dr. Bobur Rasulov",
      specialty: { uz: "Fizioterapevt", en: "Physiotherapist", ru: "Физиотерапевт" },
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=300",
      experience: "8+",
      rating: 4.7,
      about: {
        uz: "Reabilitatsiya va jismoniy davolash usullarini qo'llaydi.",
        en: "Applies rehabilitation and physical therapy methods.",
        ru: "Применяет методы реабилитации и физиотерапии."
      },
      schedule: ["Mon", "Wed", "Fri"]
    },
    {
      id: 19,
      name: "Dr. Sevara Rustamova",
      specialty: { uz: "Logoped", en: "Speech Therapist", ru: "Логопед" },
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300",
      experience: "12+",
      rating: 5.0,
      about: {
        uz: "Bolalar va kattalarda nutq nuqsonlarini tuzatish.",
        en: "Correction of speech defects in children and adults.",
        ru: "Коррекция дефектов речи у детей и взрослых."
      },
      schedule: ["Sat", "Sun"]
    },
    {
      id: 20,
      name: "Dr. Akmal To'rayev",
      specialty: { uz: "Onkolog", en: "Oncologist", ru: "Онколог" },
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300",
      experience: "22+",
      rating: 5.0,
      about: {
        uz: "O'sma kasalliklarini erta aniqlash va davolash.",
        en: "Early detection and treatment of tumor diseases.",
        ru: "Ранняя диагностика и лечение опухолевых заболеваний."
      },
      schedule: ["Mon", "Tue", "Thu"]
    }
  ];