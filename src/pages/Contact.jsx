// components/ContactSection.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        
        {/* Contact Info + Social Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-[#EBD6DC] flex flex-col justify-center"
        >
          <h3 className="text-3xl text-rose-400 font-bold mb-4">Contact Me</h3>
          <p className="mb-6 text-gray-500 ">Let's collaborate! Here's how you can reach me:</p>
          <p className="mb-2 text-gray-600 ">📧 Email: usernameasad421@gmail.com</p>

          {/* Social / Contact Buttons */}
          <div className="mt-6 flex gap-4">
            <motion.a
              href="https://wa.me/03112406063"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-4 py-2 rounded-lg text-white font-semibold shadow hover:opacity-90"
              whileHover={{ scale: 1.1 }}
            >
              WhatsApp
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-asad20/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold shadow hover:opacity-90"
              whileHover={{ scale: 1.1 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/MuhammadAsad20?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold shadow hover:opacity-90"
              whileHover={{ scale: 1.1 }}
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-rose-100 border-1 border-rose-400 p-6 rounded-lg shadow-lg flex flex-col"
        >
          <input type="text" placeholder="Name" className="w-full p-3 mb-4 rounded-lg border-2 border-rose-400 text-gray-600" />
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded-lg border-2 border-rose-400 text-gray-600" />
          <textarea placeholder="Message" rows="5" className="w-full p-3 mb-4 rounded-lg border-2 border-rose-400 bg text-gray-600"></textarea>
          <motion.button
            type="submit"
            className="bg-rose-400 text-white px-6 py-3 rounded-lg mt-2"
            whileHover={{ scale: 1.05 }}
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

