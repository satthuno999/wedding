"use client";
import React, { useEffect } from 'react';
import anime from 'animejs';

const ML5Animation: React.FC = () => {
  useEffect(() => {
    const ml5Timeline = anime.timeline({ loop: true })
      .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
      }).add({
        targets: '.ml5 .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el:Element, i:number) => (-0.8 + 0.8*2*i) + "em"
      }).add({
        targets: '.ml5 .ampersand',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
      }).add({
        targets: '.ml5 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
      }).add({
        targets: '.ml5 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
      }).add({
        targets: '.ml5',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 2000
      });

    return () => {
      ml5Timeline.pause(); // Pause the animation when component unmounts
    };
  }, []);

  return (
    <h1 className="ml5">
      <span className="text-wrapper">
        <span className="line line1"></span>
        <span className="letters letters-left">Xuân Bình</span>
        <span className="letters ampersand">&amp;</span>
        <span className="letters letters-right">Thuý Mai</span>
        <span className="line line2"></span>
      </span>
    </h1>
  );
};

export default ML5Animation;
