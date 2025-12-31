import { Award, Users, Clock, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              About Nefi Asad Klinik
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              At Nefi Asad Klinik, we believe in providing healthcare that goes beyond treatment.
              Our mission is to create a welcoming environment where patients feel heard, respected,
              and cared for with the highest medical standards.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Our team of dedicated healthcare professionals combines years of experience with
              a genuine commitment to patient wellbeing. We take the time to understand your
              unique health needs and provide personalized care that makes a difference.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-[#1e3a5f] mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-[#1e3a5f] mb-2">5000+</div>
                <div className="text-gray-600">Patients Served</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#1e3a5f]">
              <Award className="text-[#1e3a5f] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">Excellence in Care</h3>
              <p className="text-gray-600">
                Committed to maintaining the highest standards of medical practice and patient safety.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#1e3a5f]">
              <Users className="text-[#1e3a5f] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">Patient-Centered</h3>
              <p className="text-gray-600">
                Your health and comfort are at the heart of everything we do.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#1e3a5f]">
              <Heart className="text-[#1e3a5f] mb-4" size={36} />
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">Compassionate Team</h3>
              <p className="text-gray-600">
                Caring professionals dedicated to your health and wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
