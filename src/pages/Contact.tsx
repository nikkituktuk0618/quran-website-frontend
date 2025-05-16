import { Navbar, Footer } from "@/components/common";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ConnectWithUs from "@/components/about/ConnectWithUsSection";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Replace with your actual form submission logic
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000); // Reset success message after 5 seconds
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0" />
        <div className="absolute inset-0 bg-[url('/contact_hero.png')] bg-cover bg-center" />
        <div className="container relative z-10 px-6 pt-16 pb-20">
          <div className="max-w-3xl ml-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-berkshire font-bold text-white leading-tight animate-fade-in">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <img
              src="/logo.png"
              alt="Tree Icon"
              className="w-20 h-20 mx-auto mb-4"
            />
            <p className="text-gray-600 font-poppins mb-2">
              Help and guide you
            </p>
            <h2 className="text-4xl md:text-5xl font-abhaya font-bold mb-1">
              Dont Be a Stranger Just
            </h2>
            <h2 className="text-4xl md:text-5xl font-abhaya font-bold mb-8">
              Say Hello.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-blue-50 rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter First Name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9BC86]"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter Last Name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9BC86]"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9BC86]"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter Phone Number"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9BC86]"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter your Subject"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9BC86]"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Enter your Message here..."
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9BC86]"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#D9BC86] text-[#392618] px-12 py-3 rounded-full font-bold hover:bg-[#c9ad79] transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </div>

              {isSuccess && (
                <div className="text-center text-green-600 font-medium p-3 bg-green-50 rounded-lg">
                  Your message has been sent successfully! We'll get back to you
                  soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* connect with us */}
      <ConnectWithUs />
      <Footer />
    </div>
  );
};

export default Contact;
