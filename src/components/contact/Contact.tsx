import React, { useMemo, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string>("");

  const isValidEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());

  const validate = useMemo(
    () => (v: FormState) => {
      const e: Partial<FormState> = {};
      if (!v.name.trim()) e.name = "Required";
      if (!v.email.trim()) e.email = "Required";
      else if (!isValidEmail(v.email)) e.email = "Invalid email";
      if (!v.subject.trim()) e.subject = "Required";
      if (!v.message.trim() || v.message.trim().length < 10)
        e.message = "Please write at least 10 characters";
      return e;
    },
    []
  );

  const handleChange =
    (field: keyof FormState) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((s) => ({ ...s, [field]: ev.target.value }));
      setErrors((e) => ({ ...e, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eMap = validate(values);
    if (Object.keys(eMap).length) {
      setErrors(eMap);
      return;
    }
    setSubmitting(true);
    setSuccess("");

    try {
      await emailjs.send(
        "service_ucfi4up",  
        "template_3f832ck",
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
          to_email: "ouiamhich@gmail.com",
        },
        "5wI-Cpj2Ambn1xArO"
      );

      setSuccess("Thanks! Your message has been sent. I’ll get back to you soon.");
      setValues(initialState);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrors({ message: "Something went wrong. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>
            <span className="magic-text">Get in touch</span>
          </h2>
          <p className="contact-desc">
            Let’s build something great. Send a message and I’ll reply shortly.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row inline">
                <div className="form-row">
                  <label className="label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    className="input"
                    type="text"
                    value={values.name}
                    onChange={handleChange("name")}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-row">
                  <label className="label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    className="input"
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <label className="label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  className="input"
                  type="text"
                  value={values.subject}
                  onChange={handleChange("subject")}
                  placeholder="Project idea, collaboration, hiring..."
                />
                {errors.subject && <span className="error">{errors.subject}</span>}
              </div>

              <div className="form-row">
                <label className="label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="textarea"
                  value={values.message}
                  onChange={handleChange("message")}
                  placeholder="Tell me a bit about your project or question…"
                />
                {errors.message && <span className="error">{errors.message}</span>}
              </div>

              <button className="submit" type="submit" disabled={submitting}>
                <Send size={18} />
                {submitting ? "Sending..." : "Send Message"}
              </button>

              {success && <div className="toast">{success}</div>}
              <p className="form-note">I usually respond within 24–48 hours.</p>
            </form>
          </div>

          <div className="contact-card">
            <div className="contact-info">
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="label">Email</div>
                  <div>ouiahich@gmail.com</div>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="label">Location</div>
                  <div>Rabat, Morocco • Remote-friendly</div>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <Send size={18} />
                </div>
                <div>
                  <div className="label">Availability</div>
                  <div>Open to full-time or freelance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
