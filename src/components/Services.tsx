import { Stethoscope, Activity, Syringe, Users, Heart, ClipboardList } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Comprehensive primary care for all ages with thorough examinations and diagnosis.'
  },
  {
    icon: Activity,
    title: 'Health Checkups',
    description: 'Regular preventive health screenings to maintain your wellbeing and detect issues early.'
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Complete vaccination services for children and adults to protect your health.'
  },
  {
    icon: Users,
    title: 'Family Care',
    description: 'Holistic healthcare solutions for your entire family under one roof.'
  },
  {
    icon: Heart,
    title: 'Chronic Disease Management',
    description: 'Expert care and monitoring for diabetes, hypertension, and other chronic conditions.'
  },
  {
    icon: ClipboardList,
    title: 'Medical Consultations',
    description: 'Professional medical advice and treatment planning tailored to your needs.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical care designed to meet all your health needs with excellence and dedication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition group"
            >
              <div className="w-14 h-14 bg-[#e3f2fd] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1e3a5f] transition">
                <service.icon className="text-[#1e3a5f] group-hover:text-white transition" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
