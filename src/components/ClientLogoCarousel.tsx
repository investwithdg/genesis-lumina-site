
import React from 'react';

const ClientLogoCarousel = () => {
  const clientLogos = [
    {
      src: "/lovable-uploads/8491cddc-cccc-4483-bac8-4f3323af474d.png",
      alt: "BBEI"
    },
    {
      src: "/lovable-uploads/fdf8d614-18c8-4ee0-80ca-9e24682a84a6.png",
      alt: "SilverFoxx"
    },
    {
      src: "/lovable-uploads/1374b12d-98d6-4085-80b1-6caa30980a00.png",
      alt: "P30"
    },
    {
      src: "/lovable-uploads/63105e36-3748-420e-bdbf-d540ce0315e8.png",
      alt: "Boot Real Estate Camp"
    },
    {
      src: "/lovable-uploads/1253c16a-9b23-47e4-b06f-3e801aaa1516.png",
      alt: "Client Logo"
    },
    {
      src: "/lovable-uploads/b6b23e00-ae9c-4c92-b64e-6247fbda79e3.png",
      alt: "Fox Logo"
    }
  ];

  // Duplicate the logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 flex items-center justify-center"
            style={{ minWidth: '200px' }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-24 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogoCarousel;
