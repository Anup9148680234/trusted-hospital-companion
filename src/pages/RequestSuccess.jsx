import { useEffect, useState } from "react";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function RequestSuccess() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown((current) => {
        if (current <= 1) {
          clearInterval(countdownTimer);
          navigate("/");
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F7FAF9]">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-5 sm:px-6 lg:h-20 lg:px-8">
          <Link
            to="/"
            className="text-sm font-extrabold tracking-tight text-[#123B4A]"
          >
            Trusted Companion
          </Link>
        </div>
      </header>

      {/* Success content */}
      <main className="flex flex-1 items-center justify-center px-5 py-16 sm:px-6">
        <div className="w-full max-w-xl text-center">
          {/* Success icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-50 text-[#0F766E]">
            <CheckCircle2
              size={44}
              strokeWidth={1.8}
            />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-wider text-[#0F766E]">
            Request received
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#123B4A] sm:text-4xl">
            Thank you for contacting us.
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            Your assistance request has been successfully submitted. Our team
            will review the details and contact you to discuss availability
            and the next steps.
          </p>

          {/* Important notice */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm">
            <p className="text-sm font-bold text-[#123B4A]">
              What happens next?
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              We will contact you using the phone or WhatsApp number provided
              in your inquiry. Please keep your phone available for our
              response.
            </p>
          </div>

          {/* Countdown */}
          <div className="mt-8">
            <p className="text-sm text-slate-500">
              Returning to the homepage in
            </p>

            <div className="mt-3 text-3xl font-extrabold text-[#0F766E]">
              {countdown}
            </div>

            <p className="mt-1 text-xs text-slate-400">
              seconds
            </p>
          </div>

          {/* Manual navigation */}
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#123B4A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0d2d39]"
            >
              <Home size={17} />
              Go to Homepage
            </Link>

            <Link
              to="/request-assistance"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-[#123B4A] transition hover:bg-slate-50"
            >
              Submit Another Request
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RequestSuccess;