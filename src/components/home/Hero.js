'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { FaArrowRight } from 'react-icons/fa';
import Button from '@/components/ui/Button';

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(ctaRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });

      gsap.to('.hero-bg', {
        scale: 1.1,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animation */}
      <div
        className="hero-bg absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div ref={textRef}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Power Up Your
            <span className="text-blue-400"> Digital Life</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Discover the latest tech gadgets at Voltgear. From premium headphones to mechanical keyboards, 
            we've got everything to level up your setup.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button variant="primary" className="inline-flex items-center">
              Shop Now
              <FaArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link href="#features">
            <Button variant="outline" className="inline-flex items-center bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}