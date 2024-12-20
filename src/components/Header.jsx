import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto flex justify-center items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-400">Mi Portafolio</h1>
        <nav>
          <ul className="flex space-x-6 ml-8">
            <li>
              <a href="#about" className="hover:text-blue-400">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
