// components/ContactForm.js
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-center">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full p-3 border rounded" required />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="w-full p-3 border rounded" required />
          <textarea name="message" placeholder="Your Message" rows="4" onChange={handleChange} className="w-full p-3 border rounded" required />
          <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">Send Message</button>
        </form>
      </div>
    </section>
  );
}
