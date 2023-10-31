import React, { useState } from 'react';
import Imagenes from '../../assets/AlmacenImagenes'

export const Preguntas = () => {
  const qaPairs = [
    {
      question: "¿Cuál es la fecha y la hora de la boda?",
      answer: "Respuesta: La boda se llevará a cabo el 02/12/2023 a las 11 am."
    },
    {
      question: "¿Dónde se realizará la ceremonia y la recepción?",
      answer: "Respuesta: La ceremonia se llevará a cabo en La Casita de Lili y la recepción tendrá lugar en Av. La Molina 4180."
    },
    {
      question: "¿Cuál es el código de vestimenta?",
      answer: "Respuesta: El código de vestimenta es formal. Por favor, sigue las indicaciones del código de vestimenta en la invitación."
    },
    {
      question: "¿Necesito llevar un regalo?",
      answer: "Respuesta: Es suficiente tu asistencia. De tener un detalle con nosotros te dejamos nuestro números de cuenta o considera dar un sobre con dinero."
    },
    {
      question: "¿Habrá servicio de transporte desde el hotel al lugar de la boda?",
      answer: "Respuesta: Sí, todos los aplicativos llegan a la zona del evento."
    },
    {
      question: "¿Puedo llevar a un acompañante?",
      answer: "Respuesta: La invitación especifica si puedes llevar un acompañante. Si no lo menciona, consulta con los novios o los organizadores."
    },
    {
      question: "¿Habrá opciones de comida para personas con restricciones dietéticas?",
      answer: "Respuesta: Asegúrate de informar a los organizadores con anticipación."
    },
    {
      question: "¿Cuál es el plan en caso de mal tiempo si la boda es al aire libre?",
      answer: "Respuesta: Tenemos un plan de contingencia para mal tiempo."
    },
    {
      question: "¿Puedo tomar fotos durante la ceremonia?",
      answer: "Respuesta: Claro que sí, siempre respetando las formas."
    },
    {
      question: "¿Se servirá alcohol en la boda?",
      answer: "Respuesta: Sí, se servirá alcohol en la boda. Asegúrate de beber con responsabilidad y planificar un medio de transporte seguro."
    },
    {
      question: "¿Puedo llevar a mis hijos a la boda?",
      answer: "Respuesta: Queremos mucho a los niños pero recuerda que el local tiene una piscina, mucho ojo."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % qaPairs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + qaPairs.length) % qaPairs.length);
  };

  return (
    <div className="carousel-container">
  <div className="carousel-item">
    <p>{qaPairs[currentIndex].question}</p>
    <p><strong>{qaPairs[currentIndex].answer}</strong></p>
  </div>

  <button onClick={handlePrev} className="carousel-button" style={{background: 'transparent', border: 'none', }}>
    <img
      src={Imagenes.Flecha}
      alt="izquierda"
      style={{
        transform: 'scaleX(-1)', 
        width: '50px', 
        height: '50px', 
      }}
    />
  </button>
  <button onClick={handleNext} className="carousel-button" style={{background: 'transparent', border: 'none', }} >
    <img
      src={Imagenes.Flecha}
      alt="derecha"
      style={{
        background: 'transparent',
        border: 'none', 
        width: '50px', 
        height: '50px', 
      }}
    />
  </button>
</div>

  );
};
