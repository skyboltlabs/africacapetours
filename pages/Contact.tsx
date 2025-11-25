import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { FAQS, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 bg-safari-light min-h-screen">
      <div className="bg-safari-green py-16 text-center text-white">
        <h1 className="font-serif text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-300 mt-2">Plan your adventure today. We're here to help.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-safari-green mb-6">Get In Touch</h3>
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="bg-safari-sand p-3 rounded-full text-safari-brown">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Phone & WhatsApp</h4>
                      <p className="text-gray-600 mb-1">Available 7 days a week</p>
                      <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="text-safari-green font-bold text-lg hover:underline">{COMPANY_PHONE}</a>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="bg-safari-sand p-3 rounded-full text-safari-brown">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Email Us</h4>
                      <p className="text-gray-600 mb-1">We typically reply within 24 hours</p>
                      <a href={`mailto:${COMPANY_EMAIL}`} className="text-safari-green font-bold text-lg hover:underline">{COMPANY_EMAIL}</a>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="bg-safari-sand p-3 rounded-full text-safari-brown">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Our Office</h4>
                      <p className="text-gray-600">{COMPANY_ADDRESS}</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-sm relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.655979726883!2d18.4219!3d-33.9015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6766d3a80479%3A0x6b8109d43553250!2sV%26A%20Waterfront!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-safari-green text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-safari-brown">
                <h4 className="font-bold text-lg text-gray-800 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;