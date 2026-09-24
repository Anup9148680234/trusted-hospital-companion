import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import InquiryForm from "../components/InquiryForm";

function RequestAssistance() {
  return (
    <div className="min-h-screen bg-[#F7FAF9]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-5 sm:px-6 lg:h-20 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B4A] transition hover:text-[#0F766E]"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </header>

      <main>
        <div className="px-5 pb-8 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[#0F766E]">
              Request assistance
            </p>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#123B4A] sm:text-4xl">
              Tell us how we can help.
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Share a few details about the patient and the support you need.
              We'll review your request and contact you to discuss
              availability and next steps.
            </p>
          </div>
        </div>

        <InquiryForm />
      </main>
    </div>
  );
}

export default RequestAssistance;