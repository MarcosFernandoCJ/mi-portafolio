import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-900">
      {/* Imagen */}
      <div className="w-40 h-42 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-6">
        <img
          src="public/me2.jpg" // Asegúrate de que la ruta sea correcta y esté en la carpeta public
          alt="Fernando Marcos"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto principal */}
      <h1 className="text-5xl font-bold text-yellow-400">Hola, soy Fernando Marcos</h1>
      <p className="mt-4 text-xl text-gray-300">
        Estudiante de Diseño y Desarrollo de Software en Tecsup. <br />
        Me apasiona crear soluciones digitales innovadoras.
      </p>

      {/* Botones de enlaces */}
      <div className="mt-6 flex space-x-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/marcos-chocce/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-8 h-8 text-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-.027-3.148-1.916-3.148-1.917 0-2.212 1.498-2.212 3.048v5.6h-3v-10h2.839v1.367h.041c.396-.75 1.364-1.539 2.806-1.539 3.003 0 3.558 1.975 3.558 4.547v5.625z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MarcosFernandoCJ"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-8 h-8 text-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.103.81 2.225 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573 4.765-1.588 8.205-6.083 8.205-11.385 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        {/* Correo */}
        <a
          href="mailto:marcoschocce2828@gmail.com"
          className="hover:opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-8 h-8 text-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M0 4v16h24v-16h-24zm12 11l-12-7v-1l12 7 12-7v1l-12 7z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
