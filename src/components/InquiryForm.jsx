import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Loader2,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const initialForm = {
  familyName: "",
  phone: "",
  whatsapp: "",
  patientName: "",
  hospital: "",
  serviceDate: "",
  serviceTime: "",
  serviceType: "",
  assistanceDetails: "",
};

function InquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    const requiredFields = [
      "familyName",
      "phone",
      "patientName",
      "hospital",
      "serviceDate",
      "serviceTime",
      "serviceType",
    ];

    const hasMissingFields = requiredFields.some(
      (field) => !form[field].trim()
    );

    if (hasMissingFields) {
      setError("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit inquiry."
        );
      }

      if (
        import.meta.env.VITE_EMAILJS_SERVICE_ID &&
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            inquiry_id: result.inquiryId,
            family_name: form.familyName,
            phone: form.phone,
            whatsapp: form.whatsapp || "Not provided",
            patient_name: form.patientName,
            hospital: form.hospital,
            service_date: form.serviceDate,
            service_time: form.serviceTime,
            service_type: form.serviceType,
            assistance_details:
              form.assistanceDetails || "Not provided",
          },
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        );
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error(err);

      setError(
        err.message ||
          "Something went wrong. Please try again."
      );

      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="px-5 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-teal-100 bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <CheckCircle2 size={32} />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold text-[#123B4A] sm:text-3xl">
              Inquiry received
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600">
              Thank you for contacting us. We have received your request
              and will contact you to discuss availability and the next
              steps.
            </p>

            <Link
              to="/"
              className="mt-7 inline-flex rounded-xl bg-[#123B4A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0d2d39]"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10"
        >
          {/* Contact details */}
          <div>
            <h2 className="text-lg font-extrabold text-[#123B4A]">
              Your contact details
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              We'll use these details to contact you about the request.
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="familyName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Your name *
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="absolute left-3 top-3.5 text-slate-400"
                />

                <input
                  id="familyName"
                  name="familyName"
                  value={form.familyName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone number *
              </label>

              <div className="relative">
                <Phone
                  size={17}
                  className="absolute left-3 top-3.5 text-slate-400"
                />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="whatsapp"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                WhatsApp number
              </label>

              <div className="relative">
                <MessageCircle
                  size={17}
                  className="absolute left-3 top-3.5 text-slate-400"
                />

                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="If different from phone"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>
          </div>

          {/* Patient details */}
          <div className="mt-10 border-t border-slate-100 pt-8">
            <h2 className="text-lg font-extrabold text-[#123B4A]">
              Patient & appointment details
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Please provide the basic information needed to arrange
              assistance.
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="patientName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Patient's name *
              </label>

              <input
                id="patientName"
                name="patientName"
                value={form.patientName}
                onChange={handleChange}
                placeholder="Patient's full name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>

            <div>
              <label
                htmlFor="hospital"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Hospital / Clinic *
              </label>

              <input
                id="hospital"
                name="hospital"
                value={form.hospital}
                onChange={handleChange}
                placeholder="Hospital or clinic name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>

            <div>
              <label
                htmlFor="serviceDate"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Appointment date *
              </label>

              <div className="relative">
                <CalendarDays
                  size={17}
                  className="absolute left-3 top-3.5 text-slate-400"
                />

                <input
                  id="serviceDate"
                  name="serviceDate"
                  type="date"
                  value={form.serviceDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="serviceTime"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Appointment time *
              </label>

              <div className="relative">
                <Clock3
                  size={17}
                  className="absolute left-3 top-3.5 text-slate-400"
                />

                <input
                  id="serviceTime"
                  name="serviceTime"
                  type="time"
                  value={form.serviceTime}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="serviceType"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Assistance required *
              </label>

              <select
                id="serviceType"
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              >
                <option value="">Select a service</option>
                <option value="Hospital appointment companion">
                  Hospital appointment companion
                </option>
                <option value="Registration and paperwork">
                  Registration & paperwork
                </option>
                <option value="Consultation support">
                  Consultation support
                </option>
                <option value="Billing / laboratory assistance">
                  Billing / laboratory assistance
                </option>
                <option value="Medicine / report collection">
                  Medicine / report collection
                </option>
                <option value="Family updates">
                  Family updates
                </option>
                <option value="Transportation assistance">
                  Transportation assistance
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="assistanceDetails"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Additional details
              </label>

              <textarea
                id="assistanceDetails"
                name="assistanceDetails"
                value={form.assistanceDetails}
                onChange={handleChange}
                rows={4}
                placeholder="Briefly describe the assistance required..."
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>
          </div>

          <div className="mt-7 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800">
            Please do not submit medical records, diagnoses, prescriptions,
            or other sensitive medical information through this form. This
            service provides non-medical assistance only.
          </div>

          {error && (
            <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#123B4A] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0d2d39] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={17} className="animate-spin" />
                Sending inquiry...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Submitting this form does not confirm a booking. We will contact
            you to discuss availability and service details.
          </p>
        </form>
      </div>
    </section>
  );
}

export default InquiryForm;