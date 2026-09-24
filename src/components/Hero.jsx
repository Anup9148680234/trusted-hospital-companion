import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left Content */}
        <div>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3.5 py-2 text-xs font-bold text-teal-800">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            Trusted non-medical patient assistance
          </div>

          {/* Heading */}
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#123B4A] sm:text-5xl lg:text-6xl">
            When you can't be there,
            <span className="mt-1 block text-[#0F766E]">
              we're there with them.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Reliable patient companionship and hospital support for families
            who cannot always be physically present for their loved ones.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/request-assistance"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#123B4A] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0d2d39]"
            >
              Request Assistance
              <ArrowRight size={17} />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-[#123B4A] transition hover:border-slate-400 hover:bg-slate-50"
            >
              How It Works
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <CheckCircle2 size={16} className="text-teal-600" />
              Non-medical assistance
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <CheckCircle2 size={16} className="text-teal-600" />
              Family updates
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <CheckCircle2 size={16} className="text-teal-600" />
              Appointment support
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#123B4A] p-5 shadow-2xl shadow-slate-300/50 sm:p-7">
            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[24px] border-teal-400/10" />
            <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full border-[30px] border-white/5" />

            <div className="relative">
              {/* Main visual */}
              <div className="rounded-3xl bg-[#F7FAF9] p-5 sm:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Patient Support
                    </p>

                    <h2 className="mt-2 text-xl font-extrabold text-[#123B4A] sm:text-2xl">
                      We're here to help.
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-[#0F766E]">
                    <HeartHandshake size={23} />
                  </div>
                </div>

                {/* Patient card */}
                <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 text-[#0F766E]">
                      <Users size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#123B4A]">
                        Hospital appointment
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Companion assistance arranged
                      </p>
                    </div>

                    <div className="ml-auto">
                      <CheckCircle2
                        size={21}
                        className="text-teal-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Assistance items */}
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                    <ShieldCheck
                      size={17}
                      className="shrink-0 text-[#0F766E]"
                    />

                    <span className="text-xs font-semibold text-slate-600">
                      Patient accompanied throughout the visit
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#0F766E]"
                    />

                    <span className="text-xs font-semibold text-slate-600">
                      Family kept informed by phone or WhatsApp
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom message */}
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-400/15 text-teal-300">
                  <HeartHandshake size={19} />
                </div>

                <p className="text-xs font-semibold leading-5 text-slate-200">
                  Because sometimes the most important support is simply
                  having someone there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;