"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    const handleScroll = () => {
      if (backToTopButton) {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove('hidden');
        } else {
          backToTopButton.classList.add('hidden');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    if (backToTopButton) {
      backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // FAQ toggle functionality
    document.querySelectorAll('.faq-toggle').forEach(button => {
      button.addEventListener('click', () => {
        const faqContent = button.nextElementSibling;
        const icon = button.querySelector('svg');
        if (faqContent) {
          faqContent.classList.toggle('hidden');
        }
        if (icon) {
          if (faqContent && faqContent.classList.contains('hidden')) {
            icon.classList.remove('rotate-180');
          } else {
            icon.classList.add('rotate-180');
          }
        }
      });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="fixed w-full bg-white bg-opacity-90 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-3xl font-bold">
                <span className="logo-text text-royal-purple">Incredible</span>
                <span className="logo-studio text-slate">Studios</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate hover:text-royal-purple transition duration-300">Home</Link>
              <Link href="/about" className="text-slate hover:text-royal-purple transition duration-300">About</Link>
              <Link href="/services" className="text-royal-purple font-medium border-b-2 border-royal-purple px-1 pb-1">Services</Link>
              <Link href="/portfolio" className="text-slate hover:text-royal-purple transition duration-300">Portfolio</Link>
              <Link href="/contact" className="text-slate hover:text-royal-purple transition duration-300">Contact</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button id="mobile-menu-button" className="text-slate hover:text-royal-purple focus:outline-none" aria-label="Open mobile menu">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="md:hidden hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray">Home</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray">About</Link>
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-royal-purple bg-cool-gray">Services</Link>
            <Link href="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray">Portfolio</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-cool-gray">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-slate mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-slate opacity-90 max-w-3xl mx-auto">
            Comprehensive creative solutions tailored to your unique needs and goals.
          </p>
        </div>
      </header>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-slate mb-4">
              Creative Services That Deliver Results
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate opacity-80">
              From concept to execution, we provide end-to-end creative solutions that help brands stand out and succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div id="web-design" className="service-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-cool-gray">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6 service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">Web Design & Development</h3>
              <p className="text-slate opacity-80 mb-4">
                Beautiful, responsive websites that engage visitors and convert them into customers. We combine stunning design with seamless functionality.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Custom website design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Responsive development</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">E-commerce solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">CMS integration</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-teal font-medium hover:text-teal-700 transition duration-300">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div id="branding" className="service-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-cool-gray">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6 service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">Brand Identity</h3>
              <p className="text-slate opacity-80 mb-4">
                Complete branding solutions that establish a memorable and cohesive visual identity across all touchpoints.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Logo design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Brand guidelines</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Visual identity systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Brand strategy</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-teal font-medium hover:text-teal-700 transition duration-300">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div id="motion-graphics" className="service-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-cool-gray">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6 service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">Motion Graphics</h3>
              <p className="text-slate opacity-80 mb-4">
                Dynamic animations and videos that tell your brand story in a captivating way and engage your audience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Animated explainers</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Logo animations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Social media content</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Product demos</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-teal font-medium hover:text-teal-700 transition duration-300">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 4 */}
            <div id="ui-ux" className="service-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-cool-gray">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6 service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">UI/UX Design</h3>
              <p className="text-slate opacity-80 mb-4">
                Intuitive, user-centered interfaces that provide seamless experiences and drive engagement and conversions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">User research</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Wireframing & prototyping</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Interaction design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Usability testing</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-teal font-medium hover:text-teal-700 transition duration-300">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 5 */}
            <div id="print-design" className="service-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-cool-gray">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6 service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">Print Design</h3>
              <p className="text-slate opacity-80 mb-4">
                Tangible marketing materials that make a lasting impression and complement your digital presence.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Business cards & stationery</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Brochures & catalogs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Packaging design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Signage & banners</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-teal font-medium hover:text-teal-700 transition duration-300">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 6 */}
            <div id="development" className="service-card bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-cool-gray">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6 service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">Custom Development</h3>
              <p className="text-slate opacity-80 mb-4">
                Tailored digital solutions that address your specific business needs and challenges with precision.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Web applications</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">API integrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Database solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate opacity-90">Technical consulting</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-teal font-medium hover:text-teal-700 transition duration-300">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cool-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-slate mb-4">
              The Incredible Process
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate opacity-80">
              A structured yet flexible approach that ensures quality and efficiency at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-royal-purple bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-montserrat font-bold text-royal-purple">1</span>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-slate mb-2">Discover</h3>
              <p className="text-sm text-slate opacity-80">
                We start by understanding your business, goals, and audience through research and strategy sessions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-royal-purple bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-montserrat font-bold text-royal-purple">2</span>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-slate mb-2">Design</h3>
              <p className="text-sm text-slate opacity-80">
                Our creative team develops concepts and prototypes that align with your vision and objectives.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-royal-purple bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-montserrat font-bold text-royal-purple">3</span>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-slate mb-2">Develop</h3>
              <p className="text-sm text-slate opacity-80">
                We bring designs to life with clean, efficient code and rigorous testing across devices.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-royal-purple bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-montserrat font-bold text-royal-purple">4</span>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-slate mb-2">Deliver</h3>
              <p className="text-sm text-slate opacity-80">
                We launch your project and provide ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium mb-4">
              Have Questions?
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-slate mb-4">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate opacity-80">
              Get answers to common questions about working with Incredible Studios.
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="border border-cool-gray rounded-xl overflow-hidden">
              <button className="faq-toggle w-full flex justify-between items-center p-6 text-left" type="button">
                <h3 className="text-lg font-montserrat font-semibold text-slate">How long does a typical project take?</h3>
                <svg className="h-5 w-5 text-royal-purple transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-content px-6 pb-6 hidden">
                <p className="text-slate opacity-90">
                  Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive branding project could take 8-12 weeks. During our initial consultation, we'll provide a detailed timeline based on your specific needs.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-cool-gray rounded-xl overflow-hidden">
              <button className="faq-toggle w-full flex justify-between items-center p-6 text-left" type="button">
                <h3 className="text-lg font-montserrat font-semibold text-slate">What's your pricing structure?</h3>
                <svg className="h-5 w-5 text-royal-purple transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-content px-6 pb-6 hidden">
                <p className="text-slate opacity-90">
                  We offer both project-based pricing and retainer models, depending on your needs. Our projects typically range from $5,000 for basic websites to $50,000+ for comprehensive digital solutions. We'll provide a transparent quote after understanding your project requirements.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-cool-gray rounded-xl overflow-hidden">
              <button className="faq-toggle w-full flex justify-between items-center p-6 text-left" type="button">
                <h3 className="text-lg font-montserrat font-semibold text-slate">Do you work with clients remotely?</h3>
                <svg className="h-5 w-5 text-royal-purple transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-content px-6 pb-6 hidden">
                <p className="text-slate opacity-90">
                  Absolutely! While we're based in Creative City, CA, we regularly work with clients across the country and around the world. We've perfected our remote collaboration process with tools like Zoom, Slack, and Figma to ensure seamless communication.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="border border-cool-gray rounded-xl overflow-hidden">
              <button className="faq-toggle w-full flex justify-between items-center p-6 text-left" type="button">
                <h3 className="text-lg font-montserrat font-semibold text-slate">What industries do you specialize in?</h3>
                <svg className="h-5 w-5 text-royal-purple transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-content px-6 pb-6 hidden">
                <p className="text-slate opacity-90">
                  We've worked with clients across various industries including technology, healthcare, education, retail, and professional services. Our approach focuses on understanding your specific industry challenges and opportunities to create tailored solutions.
                </p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="border border-cool-gray rounded-xl overflow-hidden">
              <button className="faq-toggle w-full flex justify-between items-center p-6 text-left" type="button">
                <h3 className="text-lg font-montserrat font-semibold text-slate">What happens after my project is completed?</h3>
                <svg className="h-5 w-5 text-royal-purple transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-content px-6 pb-6 hidden">
                <p className="text-slate opacity-90">
                  We offer ongoing maintenance and support packages to keep your digital assets up-to-date and performing optimally. Many clients also engage us for continuous design and development work as their needs evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-royal-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Let's explore how we can bring your vision to life with our creative services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-royal-purple font-medium rounded-lg hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </Link>
            <a href="tel:+1234567890" className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-royal-purple transition duration-300">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>
              <h3 className="text-xl font-montserrat font-semibold mb-6">
                <span className="logo-text text-white">Incredible</span>
                <span className="logo-studio text-cool-gray">Studios</span>
              </h3>
              <p className="text-cool-gray mb-4">
                Transforming visions into stunning digital experiences since 2015.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-cool-gray hover:text-white transition duration-300" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-cool-gray hover:text-white transition duration-300" aria-label="Instagram">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="text-cool-gray hover:text-white transition duration-300" aria-label="LinkedIn">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-montserrat font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-cool-gray hover:text-white transition duration-300">Home</Link></li>
                <li><Link href="/about" className="text-cool-gray hover:text-white transition duration-300">About Us</Link></li>
                <li><Link href="/services" className="text-cool-gray hover:text-white transition duration-300">Services</Link></li>
                <li><Link href="/portfolio" className="text-cool-gray hover:text-white transition duration-300">Portfolio</Link></li>
                <li><Link href="/contact" className="text-cool-gray hover:text-white transition duration-300">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-montserrat font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><Link href="/services#web-design" className="text-cool-gray hover:text-white transition duration-300">Web Design</Link></li>
                <li><Link href="/services#branding" className="text-cool-gray hover:text-white transition duration-300">Branding</Link></li>
                <li><Link href="/services#motion-graphics" className="text-cool-gray hover:text-white transition duration-300">Motion Graphics</Link></li>
                <li><Link href="/services#ui-ux" className="text-cool-gray hover:text-white transition duration-300">UI/UX Design</Link></li>
                <li><Link href="/services#development" className="text-cool-gray hover:text-white transition duration-300">Development</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-montserrat font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cool-gray mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-cool-gray">123 Design Street, Creative City, CA 90210</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cool-gray mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <a href="tel:+1234567890" className="text-cool-gray hover:text-white transition duration-300">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cool-gray mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:hello@incrediblestudios.com" className="text-cool-gray hover:text-white transition duration-300">hello@incrediblestudios.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-cool-gray text-sm mb-4 md:mb-0">
              &copy; 2023 Incredible Studios. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-cool-gray hover:text-white text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-cool-gray hover:text-white text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-cool-gray hover:text-white text-sm transition duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button id="back-to-top" className="fixed bottom-8 right-8 bg-royal-purple text-white p-3 rounded-full shadow-lg hover:bg-royal-purple-700 transition duration-300 hidden" aria-label="Back to top">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}