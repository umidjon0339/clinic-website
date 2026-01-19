import { CheckCircle2, Award, Users, Building2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-16 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro */}
        <div className="text-center mb-20">
          <span className="text-teal-600 dark:text-teal-400 font-bold tracking-wider uppercase text-sm">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 mb-6">
            Pioneering Healthcare <br/> Since 1998
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            HealthPlus was founded with a simple yet powerful vision: to provide accessible, world-class medical care to our community. Over the decades, we have grown from a small clinic to a multi-specialty hospital.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Us?</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We combine professional expertise with modern technology to ensure the best outcome for every patient.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                "Experienced Doctors from Europe & USA",
                "Advanced Diagnostic Technology (MRI, CT)",
                "24/7 Emergency & Ambulance Service",
                "Affordable Prices & Insurance Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <CheckCircle2 className="text-teal-500 shrink-0" size={24} />
                  <span className="font-medium text-slate-800 dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
             <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="Hospital Building" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
             <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Modern Facilities</p>
                <p className="text-sm opacity-90">Tashkent, Uzbekistan</p>
             </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center border-t-4 border-teal-500 shadow-lg">
            <Award className="mx-auto text-teal-500 mb-4" size={40} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Excellence</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">We strive for the highest quality in everything we do.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center border-t-4 border-blue-500 shadow-lg">
            <Users className="mx-auto text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Compassion</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">We treat everyone with kindness and respect.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center border-t-4 border-purple-500 shadow-lg">
            <Building2 className="mx-auto text-purple-500 mb-4" size={40} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Integrity</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">We are honest, ethical, and transparent.</p>
          </div>
        </div>

      </div>
    </div>
  );
}