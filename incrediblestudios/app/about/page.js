"use client"

import Link from "next/link";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
      const toggleMenu = () => mobileMenu.classList.toggle('hidden');
      mobileMenuButton.addEventListener('click', toggleMenu);
      return () => mobileMenuButton.removeEventListener('click', toggleMenu);
    }
  }, []);

  useEffect(() => {
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    const onScroll = () => {
      if (window.pageYOffset > 300) {
        backToTopButton?.classList.remove('hidden');
      } else {
        backToTopButton?.classList.add('hidden');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Smooth scrolling for all links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handler = function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
    anchors.forEach(anchor => anchor.addEventListener('click', handler));
    return () => anchors.forEach(anchor => anchor.removeEventListener('click', handler));
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <Link href="/about" className="text-royal-purple font-medium border-b-2 border-royal-purple px-1 pb-1">About</Link>
              <Link href="/services" className="text-slate hover:text-royal-purple transition duration-300">Services</Link>
              <Link href="/portfolio" className="text-slate hover:text-royal-purple transition duration-300">Portfolio</Link>
              <Link href="/contact" className="text-slate hover:text-royal-purple transition duration-300">Contact</Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button id="mobile-menu-button" className="text-slate hover:text-royal-purple focus:outline-none" aria-label="Open mobile menu">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="md:hidden hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray">Home</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-royal-purple bg-cool-gray">About</Link>
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray">Services</Link>
            <Link href="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray">Portfolio</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-cool-gray">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-slate mb-4">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-slate opacity-90 max-w-3xl mx-auto">
            From a small creative studio to a full-service digital agency, we've been reimagining visions since 2015.
          </p>
        </div>
      </header>

      {/* About Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <span className="inline-block px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl font-montserrat font-bold text-slate mb-6">
                Crafting Digital Excellence
              </h2>
              <p className="text-slate opacity-90 mb-6">
                Founded in 2015, Incredible Studios began as a small team of passionate designers and developers with a shared vision: to create digital experiences that not only look beautiful but also deliver real results for our clients.
              </p>
              <p className="text-slate opacity-90 mb-6">
                Today, we've grown into a full-service creative agency, but our core philosophy remains the same. We believe in the power of design to transform businesses and the importance of building meaningful relationships with our clients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-cool-gray">
                  <h3 className="text-2xl font-montserrat font-bold text-royal-purple mb-2">50+</h3>
                  <p className="text-slate opacity-80">Projects Completed</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-cool-gray">
                  <h3 className="text-2xl font-montserrat font-bold text-royal-purple mb-2">30+</h3>
                  <p className="text-slate opacity-80">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Our team working together" className="rounded-xl shadow-lg w-full h-auto" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-cool-gray hidden md:block">
                <p className="text-sm text-slate opacity-80 mb-1">Featured in</p>
                <div className="flex space-x-4">
                  <img src="https://via.placeholder.com/80x30?text=Forbes" alt="Forbes logo" className="h-6" />
                  <img src="https://via.placeholder.com/80x30?text=Design+Week" alt="Design Week logo" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cool-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium mb-4">
              Our Philosophy
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-slate mb-4">
              Core Values That Drive Us
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate opacity-80">
              These principles guide every project we undertake and every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">Integrity</h3>
              <p className="text-slate opacity-80">
                We believe in transparency, honesty, and doing what's right—even when no one is watching. Our clients trust us because we deliver on our promises.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">Innovation</h3>
              <p className="text-slate opacity-80">
                We constantly push boundaries and explore new ideas to deliver cutting-edge solutions that set our clients apart from their competition.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">Collaboration</h3>
              <p className="text-slate opacity-80">
                Great work happens when talented people work together. We partner closely with our clients throughout the creative process.
              </p>
            </div>
            {/* Value 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">Excellence</h3>
              <p className="text-slate opacity-80">
                We're never satisfied with "good enough." Every pixel, every line of code, and every strategy is crafted with meticulous attention to detail.
              </p>
            </div>
            {/* Value 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">Communication</h3>
              <p className="text-slate opacity-80">
                Clear, consistent communication is the foundation of every successful project. We listen first, then create solutions tailored to your needs.
              </p>
            </div>
            {/* Value 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">Joy</h3>
              <p className="text-slate opacity-80">
                We love what we do, and it shows in our work. Creativity thrives in an environment of passion, enthusiasm, and fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-slate mb-4">
              Milestones Along the Way
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate opacity-80">
              From humble beginnings to becoming a trusted creative partner for brands worldwide.
            </p>
          </div>
          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="relative timeline-item pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-royal-purple border-4 border-royal-purple border-opacity-20"></div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-cool-gray">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-montserrat font-semibold text-slate mb-2 md:mb-0">Founded Incredible Studios</h3>
                  <span className="px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium">2015</span>
                </div>
                <p className="mt-3 text-slate opacity-90">
                  What started as a small design studio with just three team members working out of a shared office space quickly gained recognition for our innovative approach to branding.
                </p>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="relative timeline-item pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-royal-purple border-4 border-royal-purple border-opacity-20"></div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-cool-gray">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-montserrat font-semibold text-slate mb-2 md:mb-0">Expanded to Full-Service Agency</h3>
                  <span className="px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium">2017</span>
                </div>
                <p className="mt-3 text-slate opacity-90">
                  Responding to client needs, we expanded our services to include web development, motion graphics, and comprehensive digital strategy, moving into our first dedicated studio space.
                </p>
              </div>
            </div>
            {/* Timeline Item 3 */}
            <div className="relative timeline-item pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-royal-purple border-4 border-royal-purple border-opacity-20"></div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-cool-gray">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-montserrat font-semibold text-slate mb-2 md:mb-0">First International Client</h3>
                  <span className="px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium">2019</span>
                </div>
                <p className="mt-3 text-slate opacity-90">
                  Our work with a London-based tech startup marked our first international project, paving the way for a growing portfolio of global clients across multiple industries.
                </p>
              </div>
            </div>
            {/* Timeline Item 4 */}
            <div className="relative timeline-item pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-royal-purple border-4 border-royal-purple border-opacity-20"></div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-cool-gray">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-montserrat font-semibold text-slate mb-2 md:mb-0">Featured in Design Week</h3>
                  <span className="px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium">2021</span>
                </div>
                <p className="mt-3 text-slate opacity-90">
                  Our innovative approach to blending branding with user experience design earned us recognition in the industry's leading publications.
                </p>
              </div>
            </div>
            {/* Timeline Item 5 */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-royal-purple border-4 border-royal-purple border-opacity-20"></div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-cool-gray">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-montserrat font-semibold text-slate mb-2 md:mb-0">New Headquarters</h3>
                  <span className="px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium">2023</span>
                </div>
                <p className="mt-3 text-slate opacity-90">
                  We moved into our new 5,000 sq ft creative space designed to foster collaboration and innovation, with room to grow our team and serve more clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cool-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium mb-4">
              Meet the Team
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-slate mb-4">
              The Creative Minds
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate opacity-80">
              A diverse team of strategists, designers, and developers united by a passion for creativity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
              <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Alex Morgan" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-slate mb-1">Alex Morgan</h3>
                <p className="text-teal mb-3">Creative Director</p>
                <p className="text-sm text-slate opacity-80">
                  With 12 years in the industry, Alex leads our creative vision and ensures every project meets our high standards.
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Jamie Chen" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-slate mb-1">Jamie Chen</h3>
                <p className="text-teal mb-3">Lead Designer</p>
                <p className="text-sm text-slate opacity-80">
                  Jamie's eye for detail and passion for typography brings elegance and clarity to every design.
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
              <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Taylor Smith" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-slate mb-1">Taylor Smith</h3>
                <p className="text-teal mb-3">UX Strategist</p>
                <p className="text-sm text-slate opacity-80">
                  Taylor combines psychology and design to create intuitive user experiences that drive engagement.
                </p>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Jordan Lee" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-slate mb-1">Jordan Lee</h3>
                <p className="text-teal mb-3">Development Lead</p>
                <p className="text-sm text-slate opacity-80">
                  Jordan transforms designs into flawless digital experiences with clean, efficient code.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-purple hover:bg-royal-purple-700 transition duration-300 shadow-md">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-royal-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Create Something Incredible?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Let's discuss how we can bring your vision to life with our unique blend of creativity and strategy.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-royal-purple font-medium rounded-lg hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl">
            Get in Touch
          </Link>
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
      <button
        id="back-to-top"
        className="fixed bottom-8 right-8 bg-royal-purple text-white p-3 rounded-full shadow-lg hover:bg-royal-purple-700 transition duration-300 hidden"
        onClick={handleBackToTop}
        aria-label="Back to top"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}