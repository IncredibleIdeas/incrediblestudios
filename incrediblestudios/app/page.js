"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

// Helper component to replace next/image for external images
function ExternalImage({ src, alt, className, width, height, ...props }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      {...props}
    />
  );
}

export default function Home() {
  // Refs for DOM elements
  const mobileMenuRef = useRef(null);
  const backToTopRef = useRef(null);

  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = mobileMenuRef.current;

    function handleMobileMenuClick() {
      if (mobileMenu) {
        mobileMenu.classList.toggle("hidden");
      }
    }

    if (mobileMenuButton) {
      mobileMenuButton.addEventListener("click", handleMobileMenuClick);
    }

    // Back to top button
    const backToTopButton = backToTopRef.current;

    function handleScroll() {
      if (backToTopButton) {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove("hidden");
        } else {
          backToTopButton.classList.add("hidden");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    function handleBackToTopClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (backToTopButton) {
      backToTopButton.addEventListener("click", handleBackToTopClick);
    }

    // Smooth scrolling for all anchor links to IDs
    const anchors = document.querySelectorAll('a[href^="#"]');
    function handleAnchorClick(e) {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Cleanup
    return () => {
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener("click", handleMobileMenuClick);
      }
      window.removeEventListener("scroll", handleScroll);
      if (backToTopButton) {
        backToTopButton.removeEventListener("click", handleBackToTopClick);
      }
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  // Utility: Add cursor-pointer to all links and buttons
  // We'll use a helper function to append "cursor-pointer" to className
  function withCursorPointer(className) {
    if (!className) return "cursor-pointer";
    return className.includes("cursor-pointer")
      ? className
      : className + " cursor-pointer";
  }

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full bg-white bg-opacity-90 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className={withCursorPointer("text-3xl font-bold")}>
                <span className="logo-text text-royal-purple">Incredible</span>
                <span className="logo-studio text-slate">Studios</span>
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className={withCursorPointer("text-royal-purple font-medium border-b-2 border-royal-purple px-1 pb-1")}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={withCursorPointer("text-slate hover:text-royal-purple transition duration-300")}
              >
                About
              </Link>
              <Link
                href="/services"
                className={withCursorPointer("text-slate hover:text-royal-purple transition duration-300")}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className={withCursorPointer("text-slate hover:text-royal-purple transition duration-300")}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className={withCursorPointer("text-slate hover:text-royal-purple transition duration-300")}
              >
                Contact
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                id="mobile-menu-button"
                className={withCursorPointer("text-slate hover:text-royal-purple focus:outline-none")}
                aria-label="Open mobile menu"
                type="button"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={withCursorPointer("block px-3 py-2 rounded-md text-base font-medium text-royal-purple bg-cool-gray")}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={withCursorPointer("block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray")}
            >
              About
            </Link>
            <Link
              href="/services"
              className={withCursorPointer("block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray")}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={withCursorPointer("block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray")}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={withCursorPointer("block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray")}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-cool-gray">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight text-slate hero-text">
                Your Vision,{" "}
                <span className="text-royal-purple">Reimagined</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate opacity-90 max-w-lg">
                We transform ideas into stunning digital experiences that
                captivate audiences and drive results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className={withCursorPointer("px-8 py-3 bg-royal-purple text-white font-medium rounded-lg hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl")}
                >
                  Get Started
                </Link>
                <Link
                  href="/portfolio"
                  className={withCursorPointer("px-8 py-3 border-2 border-royal-purple text-royal-purple font-medium rounded-lg hover:bg-royal-purple hover:text-white transition duration-300")}
                >
                  View Work
                </Link>
              </div>
            </div>
            <div className="relative">
              <ExternalImage
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Creative design process"
                className="rounded-xl shadow-2xl w-full h-auto"
                width={1000}
                height={667}
                loading="eager"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="absolute -bottom-6 -right-6 bg-teal text-white px-6 py-3 rounded-lg shadow-lg">
                <span className="font-montserrat font-bold">Since 2015</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-cool-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-montserrat font-semibold text-slate mb-12">
            Trusted by innovative brands worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <ExternalImage
                key={i}
                src={`https://via.placeholder.com/150x60?text=Brand+${i}`}
                alt="Client logo"
                className="h-12 w-auto mx-auto opacity-70 hover:opacity-100 transition duration-300"
                width={150}
                height={60}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-slate mb-4">
              Our Creative Services
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate opacity-80">
              Comprehensive solutions tailored to bring your brand to life in
              the digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-cool-gray">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-royal-purple"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">
                Web Design
              </h3>
              <p className="text-slate opacity-80 mb-4">
                Beautiful, responsive websites that engage visitors and convert
                them into customers.
              </p>
              <Link
                href="/services#web-design"
                className={withCursorPointer("inline-flex items-center text-teal font-medium hover:text-teal-700 transition duration-300")}
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-cool-gray">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-royal-purple"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">
                Motion Graphics
              </h3>
              <p className="text-slate opacity-80 mb-4">
                Dynamic animations and videos that tell your brand story in a
                captivating way.
              </p>
              <Link
                href="/services#motion-graphics"
                className={withCursorPointer("inline-flex items-center text-teal font-medium hover:text-teal-700 transition duration-300")}
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-cool-gray">
              <div className="w-14 h-14 bg-royal-purple bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-royal-purple"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-slate mb-3">
                Brand Identity
              </h3>
              <p className="text-slate opacity-80 mb-4">
                Complete branding solutions that establish a memorable and
                cohesive visual identity.
              </p>
              <Link
                href="/services#brand-identity"
                className={withCursorPointer("inline-flex items-center text-teal font-medium hover:text-teal-700 transition duration-300")}
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className={withCursorPointer("inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-purple hover:bg-royal-purple-700 transition duration-300 shadow-md")}
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cool-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-slate mb-4">
              Featured Projects
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate opacity-80">
              A selection of our recent work that showcases our creativity and
              expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <ExternalImage
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Project 1"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                width={1000}
                height={426}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-montserrat font-semibold text-white mb-1">
                  Nova App Redesign
                </h3>
                <p className="text-cool-gray">Mobile App Design</p>
              </div>
              <Link
                href="/portfolio#project1"
                className={withCursorPointer("absolute inset-0 z-10")}
                aria-label="View Nova App Redesign"
              ></Link>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <ExternalImage
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Project 2"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                width={1000}
                height={426}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-montserrat font-semibold text-white mb-1">
                  Elysian Branding
                </h3>
                <p className="text-cool-gray">Brand Identity</p>
              </div>
              <Link
                href="/portfolio#project2"
                className={withCursorPointer("absolute inset-0 z-10")}
                aria-label="View Elysian Branding"
              ></Link>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <ExternalImage
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Project 3"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                width={1000}
                height={426}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-montserrat font-semibold text-white mb-1">
                  Aurora Website
                </h3>
                <p className="text-cool-gray">Web Development</p>
              </div>
              <Link
                href="/portfolio#project3"
                className={withCursorPointer("absolute inset-0 z-10")}
                aria-label="View Aurora Website"
              ></Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className={withCursorPointer("inline-flex items-center px-6 py-3 border border-royal-purple text-base font-medium rounded-md text-royal-purple bg-white hover:bg-royal-purple hover:text-white transition duration-300 shadow-md")}
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium mb-4">
              Client Love
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-slate mb-4">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate opacity-80">
              Don't just take our word for it - hear from the brands we've
              helped transform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-cool-gray">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <ExternalImage
                    className="h-12 w-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Sarah Johnson"
                    width={48}
                    height={48}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-montserrat font-semibold text-slate">
                    Sarah Johnson
                  </h4>
                  <p className="text-sm text-slate opacity-70">
                    Marketing Director, NovaTech
                  </p>
                </div>
              </div>
              <p className="text-slate opacity-90 italic">
                "Incredible Studios transformed our digital presence
                completely. Their attention to detail and creative approach
                resulted in a website that truly represents our brand and has
                significantly increased our lead generation."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-cool-gray">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <ExternalImage
                    className="h-12 w-12 rounded-full"
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Michael Chen"
                    width={48}
                    height={48}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-montserrat font-semibold text-slate">
                    Michael Chen
                  </h4>
                  <p className="text-sm text-slate opacity-70">
                    CEO, Aurora Designs
                  </p>
                </div>
              </div>
              <p className="text-slate opacity-90 italic">
                "Working with Incredible Studios was a game-changer for our
                brand. They understood our vision immediately and delivered a
                complete identity system that elevated our market position."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-cool-gray">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <ExternalImage
                    className="h-12 w-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Jessica Williams"
                    width={48}
                    height={48}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-montserrat font-semibold text-slate">
                    Jessica Williams
                  </h4>
                  <p className="text-sm text-slate opacity-70">
                    Creative Director, Elysian
                  </p>
                </div>
              </div>
              <p className="text-slate opacity-90 italic">
                "The motion graphics created by Incredible Studios for our
                product launch were absolutely stunning. They captured our
                brand essence perfectly and helped us achieve record
                engagement."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-royal-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Let's create something incredible together. Get in touch with our
            team to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className={withCursorPointer("px-8 py-4 bg-white text-royal-purple font-medium rounded-lg hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl")}
            >
              Start Your Project
            </Link>
            <a
              href="tel:+1234567890"
              className={withCursorPointer("px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-royal-purple transition duration-300")}
            >
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
                Transforming visions into stunning digital experiences since
                2015.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  aria-label="Instagram"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-montserrat font-semibold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-montserrat font-semibold mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services#web-design"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#branding"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#motion-graphics"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    Motion Graphics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#ui-ux"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#development"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-montserrat font-semibold mb-6">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-cool-gray mt-0.5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span className="text-cool-gray">
                    123 Design Street, Creative City, CA 90210
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-cool-gray mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <a
                    href="tel:+1234567890"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-cool-gray mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <a
                    href="mailto:hello@incrediblestudios.com"
                    className={withCursorPointer("text-cool-gray hover:text-white transition duration-300")}
                  >
                    hello@incrediblestudios.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-cool-gray text-sm mb-4 md:mb-0">
              &copy; 2023 Incredible Studios. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className={withCursorPointer("text-cool-gray hover:text-white text-sm transition duration-300")}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={withCursorPointer("text-cool-gray hover:text-white text-sm transition duration-300")}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className={withCursorPointer("text-cool-gray hover:text-white text-sm transition duration-300")}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        id="back-to-top"
        ref={backToTopRef}
        className={withCursorPointer("fixed bottom-8 right-8 bg-royal-purple text-white p-3 rounded-full shadow-lg hover:bg-royal-purple-700 transition duration-300 hidden")}
        aria-label="Back to top"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </>
  );
}
