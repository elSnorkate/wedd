import React, { useEffect, useRef, useState } from 'react';
import './TextMorpher.css'; 

export function Mensaje() {
  const elts = {
    text1: useRef(null),
    text2: useRef(null)
  };

  const texts = [
    "en",
    "cada",
    "dia",
    "",
    "juntos",
    "",
    "nuestro",
    "amor",
    "",
    "crece",
    "",
    "mas",
    "",
    "profundo",
    "",
  ];

  const morphTime = 1;
  const cooldownTime = 0.15;

  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;

  const setMorph = (fraction) => {
    elts.text2.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.current.textContent = texts[textIndex % texts.length];
    elts.text2.current.textContent = texts[(textIndex + 1) % texts.length];
  };

  const doCooldown = () => {
    morph = 0;

    elts.text2.current.style.filter = "";
    elts.text2.current.style.opacity = "100%";

    elts.text1.current.style.filter = "";
    elts.text1.current.style.opacity = "0%";
  };

  const doMorph = () => {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }

    setMorph(fraction);
  };

  const animate = () => {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex++;
      }

      doMorph();
    } else {
      doCooldown();
    }
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div id="container">
      <span ref={elts.text1} id="text1"></span>
      <span ref={elts.text2} id="text2"></span>
    </div>
  );
}

export default Mensaje;