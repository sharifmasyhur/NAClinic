import { Heart, Shield, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-[#e3f2fd] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a5f] mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience compassionate, professional medical care at Nefi Asad Klinik.
            We are dedicated to providing exceptional healthcare services to our community.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#1e3a5f] text-white px-8 py-4 rounded-full text-lg hover:bg-[#2d5082] transition shadow-lg"
          >
            Get In Touch
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="w-16 h-16 bg-[#e3f2fd] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-[#1e3a5f]" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">Compassionate Care</h3>
            <p className="text-gray-600">Patient-centered approach with personalized attention</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="w-16 h-16 bg-[#e3f2fd] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-[#1e3a5f]" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">Expert Team</h3>
            <p className="text-gray-600">Experienced medical professionals you can trust</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="w-16 h-16 bg-[#e3f2fd] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-[#1e3a5f]" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">Convenient Hours</h3>
            <p className="text-gray-600">Flexible scheduling to accommodate your needs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
