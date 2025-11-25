import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  tourInterest: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Form Data:", data);
    // In a real app, this would send to an API or Email service
    alert(`Thank you, ${data.name}! We have received your enquiry and will contact you shortly via email or WhatsApp.`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-safari-gold">
      <h3 className="font-serif text-2xl font-bold text-safari-green mb-6">Send an Enquiry</h3>
      
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            {...register("name", { required: true })} 
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-safari-green focus:border-transparent outline-none transition"
            placeholder="John Doe"
          />
          {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email"
              {...register("email", { required: true })} 
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-safari-green focus:border-transparent outline-none transition"
              placeholder="john@example.com"
            />
            {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Phone</label>
            <input 
              type="tel"
              {...register("phone", { required: true })} 
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-safari-green focus:border-transparent outline-none transition"
              placeholder="+27..."
            />
            {errors.phone && <span className="text-red-500 text-xs">Phone is required</span>}
          </div>
        </div>

        {/* Interest */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
          <select 
            {...register("tourInterest")} 
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-safari-green focus:border-transparent outline-none transition bg-white"
          >
            <option value="General Enquiry">General Enquiry</option>
            <option value="Cape Peninsula Tour">Cape Peninsula Tour</option>
            <option value="Winelands Tour">Winelands Tour</option>
            <option value="Safari Day Trip">Safari Day Trip</option>
            <option value="Garden Route">Garden Route Tour</option>
            <option value="Custom Package">Custom Package</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message / Special Requests</label>
          <textarea 
            {...register("message")} 
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-safari-green focus:border-transparent outline-none transition"
            placeholder="Tell us about your dates, group size, or specific interests..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-safari-green hover:bg-emerald-800 text-white font-bold py-4 rounded transition-colors uppercase tracking-widest text-sm"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  );
};

export default ContactForm;