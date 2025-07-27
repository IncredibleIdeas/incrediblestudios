"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Nova App Redesign",
    category: "Mobile App Design",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    client: "NovaTech",
    year: "2022",
    services: "UI/UX Design, Prototyping",
    description:
      "Redesigned the NovaTech mobile app to improve user engagement and retention. We conducted extensive user research to identify pain points in the existing app and created a streamlined interface with intuitive navigation. The new design resulted in a 40% increase in daily active users and a 25% improvement in task completion rates.",
    filter: "web-design",
    label: "Mobile App Design",
  },
  {
    id: 2,
    title: "Elysian Branding",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    client: "Elysian Cosmetics",
    year: "2021",
    services: "Brand Strategy, Visual Identity",
    description:
      "Developed a complete brand identity for Elysian Cosmetics, a luxury skincare line. Our work included logo design, color palette, typography system, packaging design, and brand guidelines. The elegant, minimalist aesthetic helped position Elysian as a premium brand in a competitive market.",
    filter: "branding",
    label: "Brand Identity",
  },
  {
    id: 3,
    title: "Aurora Website",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    client: "Aurora Designs",
    year: "2023",
    services: "Web Design, Development",
    description:
      "Designed and developed a responsive website for Aurora Designs, an interior design studio. The site features a portfolio showcase, service information, and a blog. We implemented a custom CMS to allow easy content updates. The new website increased lead generation by 60% in the first three months.",
    filter: "web-design",
    label: "Web Development",
  },
  {
    id: 4,
    title: "Lumina Animation",
    category: "Motion Graphics",
    image:
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    client: "Lumina Tech",
    year: "2022",
    services: "Animation, Video Production",
    description:
      "Created a series of animated explainer videos for Lumina Tech's product launch. The animations simplified complex technical concepts into engaging visual stories. The videos were used across social media, the company website, and trade shows, contributing to a successful product launch with record pre-orders.",
    filter: "motion",
    label: "Motion Graphics",
  },
  {
    id: 5,
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    client: "Vertex Financial",
    year: "2023",
    services: "User Research, Interface Design",
    description:
      "Redesigned the dashboard for Vertex Financial's banking app to improve usability and accessibility. We conducted user testing to identify pain points and created a more intuitive layout with personalized financial insights. The new design reduced support calls by 35% and improved customer satisfaction scores.",
    filter: "ui-ux",
    label: "UI/UX Design",
  },
  {
    id: 6,
    title: "Brew Haven Identity",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    client: "Brew Haven Coffee",
    year: "2021",
    services: "Logo Design, Packaging",
    description:
      "Developed a warm, inviting brand identity for Brew Haven Coffee, a local coffee roaster expanding nationally. The identity system included logo, packaging, merchandise, and signage. The earthy color palette and handcrafted aesthetic helped communicate the brand's commitment to quality and sustainability.",
    filter: "branding",
    label: "Brand Identity",
  },
];

const FILTERS = [
  { label: "All Work", value: "all" },
  { label: "Web Design", value: "web-design" },
  { label: "Branding", value: "branding" },
  { label: "Motion Graphics", value: "motion" },
  { label: "UI/UX Design", value: "ui-ux" },
];

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, NovaTech",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text:
      "Incredible Studios transformed our digital presence completely. Their attention to detail and creative approach resulted in a website that truly represents our brand and has significantly increased our lead generation.",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO, Aurora Designs",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text:
      "Working with Incredible Studios was a game-changer for our brand. They understood our vision immediately and delivered a complete identity system that elevated our market position.",
    stars: 5,
  },
  {
    name: "Jessica Williams",
    role: "Creative Director, Elysian",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "The motion graphics created by Incredible Studios for our product launch were absolutely stunning. They captured our brand essence perfectly and helped us achieve record engagement.",
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="mt-4 flex">
      {Array.from({ length: count }).map((_, i) => (
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
  );
}

export default function Portfolio() {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State for filter
  const [activeFilter, setActiveFilter] = useState("all");

  // State for modal
  const [modalProject, setModalProject] = useState(null);

  // State for "Load More"
  const [loadedProjects, setLoadedProjects] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  // Back to top button
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll event for back to top
  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (modalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalProject]);

  // Filtered projects
  const visibleProjects = PROJECTS.filter(
    (p, i) =>
      (activeFilter === "all" || p.filter === activeFilter) &&
      i < loadedProjects
  );

  // Modal close on background click
  const modalRef = useRef();

  useEffect(() => {
    if (!modalProject) return;
    function handleClick(e) {
      if (modalRef.current && e.target === modalRef.current) {
        setModalProject(null);
      }
    }
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [modalProject]);

  // Smooth scroll for anchor links
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest("a[href^='#']");
      if (anchor) {
        const targetId = anchor.getAttribute("href");
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Navigation */}
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
              <Link
                href="/"
                className="text-slate hover:text-royal-purple transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate hover:text-royal-purple transition duration-300"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-slate hover:text-royal-purple transition duration-300"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-royal-purple font-medium border-b-2 border-royal-purple px-1 pb-1"
                aria-current="page"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-slate hover:text-royal-purple transition duration-300"
              >
                Contact
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                aria-label="Open mobile menu"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="text-slate hover:text-royal-purple focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
          className={`md:hidden bg-white shadow-lg transition-all duration-200 ${
            mobileMenuOpen ? "" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-royal-purple bg-cool-gray"
              aria-current="page"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-royal-purple hover:bg-cool-gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-cool-gray">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-slate mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-slate opacity-90 max-w-3xl mx-auto">
            A showcase of our recent work and the creative solutions we've
            delivered for clients across industries.
          </p>
        </div>
      </header>

      {/* Portfolio Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-cool-gray">
        <div className="max-w-7xl mx-auto">
          <div className="portfolio-filter flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                className={`filter-btn px-4 py-2 rounded-full border border-royal-purple text-royal-purple hover:bg-royal-purple hover:text-white transition duration-300 ${
                  activeFilter === f.value
                    ? "active bg-royal-purple text-white"
                    : ""
                }`}
                data-filter={f.value}
                onClick={() => setActiveFilter(f.value)}
                type="button"
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.length === 0 && (
              <div className="col-span-full text-center text-slate-500 py-12">
                No projects found for this filter.
              </div>
            )}
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className={`portfolio-item ${project.filter}`}
                data-category={project.filter}
              >
                <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-montserrat font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-cool-gray">{project.label}</p>
                  </div>
                  <button
                    className="absolute inset-0 z-10"
                    aria-label={`View details for ${project.title}`}
                    onClick={() => setModalProject(project)}
                    style={{ background: "transparent", border: 0, padding: 0, cursor: "pointer" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              className="px-6 py-3 border border-royal-purple text-royal-purple font-medium rounded-lg hover:bg-royal-purple hover:text-white transition duration-300 shadow-md"
              id="load-more"
              disabled={loadingMore || loadedProjects >= 12}
              onClick={() => {
                setLoadingMore(true);
                setTimeout(() => {
                  setLoadedProjects((prev) => {
                    const next = prev + 3;
                    return next > 12 ? 12 : next;
                  });
                  setLoadingMore(false);
                }, 1000);
              }}
            >
              {loadedProjects >= 12
                ? "All Projects Loaded"
                : loadingMore
                ? "Loading..."
                : "Load More Projects"}
            </button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cool-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal bg-opacity-10 text-teal rounded-full text-sm font-medium mb-4">
              Client Feedback
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-slate mb-4">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate opacity-80">
              Don't just take our word for it - hear from the brands we've
              helped transform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md border border-cool-gray"
              >
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={t.image}
                      alt={t.name}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-montserrat font-semibold text-slate">
                      {t.name}
                    </h4>
                    <p className="text-sm text-slate opacity-70">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate opacity-90 italic">"{t.text}"</p>
                <StarRating count={t.stars} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {modalProject && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          style={{ animation: "fadeIn .2s" }}
        >
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3
                    className="text-2xl font-montserrat font-bold text-slate"
                    id="modal-title"
                  >
                    {modalProject.title}
                  </h3>
                  <p className="text-teal" id="modal-category">
                    {modalProject.category}
                  </p>
                </div>
                <button
                  id="modal-close"
                  className="text-slate hover:text-royal-purple"
                  aria-label="Close modal"
                  onClick={() => setModalProject(null)}
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <img
                id="modal-image"
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
              />
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="font-montserrat font-semibold text-slate mb-2">
                    Client
                  </h4>
                  <p
                    id="modal-client"
                    className="text-slate opacity-80"
                  >
                    {modalProject.client}
                  </p>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-slate mb-2">
                    Year
                  </h4>
                  <p
                    id="modal-year"
                    className="text-slate opacity-80"
                  >
                    {modalProject.year}
                  </p>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-slate mb-2">
                    Services
                  </h4>
                  <p
                    id="modal-services"
                    className="text-slate opacity-80"
                  >
                    {modalProject.services}
                  </p>
                </div>
              </div>
              <div className="prose max-w-none">
                <h4 className="font-montserrat font-semibold text-slate mb-4">
                  Project Overview
                </h4>
                <p
                  id="modal-description"
                  className="text-slate opacity-90 mb-6"
                >
                  {modalProject.description}
                </p>
                <h4 className="font-montserrat font-semibold text-slate mb-4">
                  The Challenge
                </h4>
                <p className="text-slate opacity-90 mb-6">
                  What problem were we trying to solve? What were the client's pain points and objectives?
                </p>
                <h4 className="font-montserrat font-semibold text-slate mb-4">
                  Our Approach
                </h4>
                <p className="text-slate opacity-90 mb-6">
                  How did we tackle the project? What was our strategy and creative process?
                </p>
                <h4 className="font-montserrat font-semibold text-slate mb-4">
                  The Results
                </h4>
                <p className="text-slate opacity-90">
                  What were the outcomes? Include metrics if available (increased traffic, higher conversion rates, etc.)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-royal-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Let's collaborate on your next project and create something incredible together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-royal-purple font-medium rounded-lg hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl"
          >
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
                <a
                  href="#"
                  className="text-cool-gray hover:text-white transition duration-300"
                  aria-label="Twitter"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-cool-gray hover:text-white transition duration-300"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-cool-gray hover:text-white transition duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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
                    className="text-cool-gray hover:text-white transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-cool-gray hover:text-white transition duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-cool-gray hover:text-white transition duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-cool-gray hover:text-white transition duration-300"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-cool-gray hover:text-white transition duration-300"
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
                    className="text-cool-gray hover:text-white transition duration-300"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#branding"
                    className="text-cool-gray hover:text-white transition duration-300"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#motion-graphics"
                    className="text-cool-gray hover:text-white transition duration-300"
                  >
                    Motion Graphics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#ui-ux"
                    className="text-cool-gray hover:text-white transition duration-300"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#development"
                    className="text-cool-gray hover:text-white transition duration-300"
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
                    className="text-cool-gray hover:text-white transition duration-300"
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
                    className="text-cool-gray hover:text-white transition duration-300"
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
                className="text-cool-gray hover:text-white text-sm transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-cool-gray hover:text-white text-sm transition duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-cool-gray hover:text-white text-sm transition duration-300"
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
        className={`fixed bottom-8 right-8 bg-royal-purple text-white p-3 rounded-full shadow-lg hover:bg-royal-purple-700 transition duration-300 ${
          showBackToTop ? "" : "hidden"
        }`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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