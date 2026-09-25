import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import RequestAssistance from "./pages/RequestAssistance";
import RequestSuccess from "./pages/RequestSuccess";

import { services } from "./data/services";

function Home() {
  return (
    <div className="min-h-screen bg-[#F7FAF9]">
      <Navbar />

      <main>
        <Hero />

        <section
          id="services"
          className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-[#0F766E]">
                How we can help
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#123B4A] sm:text-4xl">
                Practical support when your family needs it most.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                From hospital registration to keeping your family updated, we
                provide dependable non-medical assistance throughout the
                hospital visit.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-3xl bg-[#123B4A] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-wider text-teal-300">
                  When you can't be there
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                  Your loved one shouldn't have to navigate the hospital alone.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  Work, distance, travel, or other responsibilities can make it
                  difficult to accompany a parent or loved one to every hospital
                  appointment. That's where a trusted patient companion can
                  help.
                </p>

                <a
                  href="/request-assistance"
                  className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#123B4A] transition hover:bg-slate-100"
                >
                  Request Assistance
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/request-assistance" element={<RequestAssistance />} />

        <Route path="/request-success" element={<RequestSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
