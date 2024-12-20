import React from "react";

const About = () => {
  const personalImageAlt = "Fernando Marcos"; // Texto alternativo para la imagen

  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-8 text-gray-300 md:flex-row">
        {/* Contenido de texto */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold text-yellow-400 text-center md:text-left">Sobre mí</h2>
          <p className="mt-4 text-pretty">
            Me llamo Fernando Marcos y soy estudiante de Diseño y Desarrollo de Software en Tecsup. Me apasiona la tecnología y crear
            soluciones innovadoras que marquen la diferencia.
          </p>
          <p className="mt-4">
            Entre mis logros personales se incluyen la participación en proyectos académicos que combinan{" "}
            <strong className="text-yellow-400">metodologías ágiles</strong> y tecnologías como React, Node.js, Python y Spring Boot. Estoy enfocado
            en mejorar mis habilidades tanto en el desarrollo de software como en la gestión de proyectos.
          </p>
          <p className="mt-4">
            Mi objetivo a largo plazo es seguir mejorando mis habilidades y contribuir con soluciones tecnológicas innovadoras.
          </p>
        </div>

        {/* Imagen personal */}
        <img
          src="public/me.png"
          alt={personalImageAlt}
          className="order-1 object-cover w-64 h-64 p-1 md:order-2 rotate-3 lg:p-2 rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
        />
      </div>
    </section>
  );
};

export default About;
