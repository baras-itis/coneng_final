import { useState } from "react";
import type { UserData, Loading } from "~/types/contacts.types";

const Form = () => {
  const [formData, setFormData] = useState<UserData>({
    firstname: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<Loading>({
    loading: false,
    success: false,
    error: null,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch("http://192.168.0.112::5000/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({ loading: false, success: false, error: "Server error" });
      }
    } catch {
      setStatus({ loading: false, success: false, error: "Network error" });
    }
  }

  const dataForm = [
    { id: 1, title: "First Name", name: "firstName", type: "text" },
    { id: 2, title: "Last Name", name: "lastName", type: "text" },
    { id: 3, title: "Phone Number", name: "phone", type: "tel" },
    { id: 4, title: "Email", name: "email", type: "email" },
    { id: 5, title: "Company", name: "company", type: "text" },
    { id: 6, title: "Subject", name: "subject", type: "text" },
  ];

  return (
    <section className="w-full col-span-full bg-white py-12 px-4 sm:px-6 md:py-20 lg:py-28 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight text-neutral-900 leading-[1.1]">
            Easy to reach and <br /> quick to respond
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-500 font-normal max-w-xl">
            Get in touch with our team to discuss your upcoming construction,
            engineering, or infrastructure development goals.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 lg:gap-y-10"
        >
          {dataForm.map((item) => (
            <div key={item.id} className="flex flex-col w-full relative">
              <input
                id={item.name}
                name={item.name}
                type={item.type}
                required={item.name === "firstName" || item.name === "email"}
                onChange={handleChange}
                value={formData[item.name]}
                placeholder=" "
                className="peer w-full bg-white border-b-2 border-neutral-300 py-3 text-lg sm:text-xl font-normal text-neutral-900 focus:outline-none focus:border-coneng transition-colors duration-200 rounded-none order-2"
              />
              <label
                htmlFor={item.name}
                className="text-xs sm:text-sm font-semibold tracking-widest text-neutral-500 uppercase transition-all duration-200 transform origin-left order-1 peer-placeholder-shown:translate-y-7 peer-placeholder-shown:text-lg peer-placeholder-shown:font-normal peer-placeholder-shown:text-neutral-400 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-coneng"
              >
                {item.title}
                {(item.name === "firstName" || item.name === "email") && (
                  <span className="text-coneng ml-1">*</span>
                )}
              </label>
            </div>
          ))}

          <div className="flex flex-col w-full md:col-span-2 relative">
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              onChange={handleChange}
              value={formData.message}
              placeholder=" "
              className="peer w-full bg-white border-b-2 border-neutral-300 py-3 text-lg sm:text-xl font-normal text-neutral-900 focus:outline-none focus:border-coneng transition-colors duration-200 rounded-none resize-none order-2"
            />
            <label
              htmlFor="message"
              className="text-xs sm:text-sm font-semibold tracking-widest text-neutral-500 uppercase transition-all duration-200 transform origin-left order-1 peer-placeholder-shown:translate-y-7 peer-placeholder-shown:text-lg peer-placeholder-shown:font-normal peer-placeholder-shown:text-neutral-400 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-coneng"
            >
              Message <span className="text-coneng ml-1">*</span>
            </label>
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 mt-4">
            <div className="text-sm uppercase tracking-wider font-semibold h-5 order-2 sm:order-1">
              {status.loading && (
                <span className="text-neutral-500 animate-pulse">
                  Sending request...
                </span>
              )}
              {status.success && (
                <span className="text-emerald-700">
                  Message sent successfully
                </span>
              )}
              {status.error && (
                <span className="text-coneng">{status.error}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full sm:w-auto min-w-70 lg:min-w-[320px] px-10 py-5 bg-neutral-950 text-white hover:bg-coneng disabled:bg-neutral-200 disabled:text-neutral-400 transition-colors duration-300 text-sm tracking-widest uppercase font-bold rounded-none order-1 sm:order-2 self-end"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
