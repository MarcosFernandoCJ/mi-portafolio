import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400">Contactame</h2>
        <div className="mt-8 flex justify-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/tu-perfil" // Cambia esto por tu URL de LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8 text-blue-400"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-.027-3.148-1.916-3.148-1.917 0-2.212 1.498-2.212 3.048v5.6h-3v-10h2.839v1.367h.041c.396-.75 1.364-1.539 2.806-1.539 3.003 0 3.558 1.975 3.558 4.547v5.625z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/tu-usuario" // Cambia esto por tu URL de GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8 text-blue-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.103.81 2.225 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573 4.765-1.588 8.205-6.083 8.205-11.385 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* Correo */}
          <a
            href="mailto:tu-email@gmail.com" // Cambia esto por tu correo
            className="hover:opacity-75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8 text-blue-400"
              viewBox="0 0 24 24"
            >
              <path d="M0 4v16h24v-16h-24zm12 11l-12-7v-1l12 7 12-7v1l-12 7z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
