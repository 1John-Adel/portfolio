"use client";
import { useRef } from "react";

export default function Form() {
  const formRef = useRef(null);

  const sender = (e) => {
    const trigger = document.getElementById("trigger");
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    fetch("https://formsubmit.co/ajax/johnadel.tech@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch((err) => console.error(err));

    setTimeout(() => {
      trigger.classList.add("show");
      formRef.current?.reset();

      setTimeout(() => {
        trigger.classList.remove("show");
      }, 5000);
    }, 1000);
  };

  return (
    <div id="form">
      <div>
        <span>[ TRANSMIT DISPATCH ]</span>
        <section>SPEC // DISPATCH_V2</section>
      </div>
      <form onSubmit={sender} ref={formRef} autoComplete="off">
        <div>
          <label>01. FULL NAME / SENDER IDENTIFIER *</label>
          <input
            type="text"
            placeholder="e.g. Dr. Jane Smith or Engineering Lead"
            required
            name="Name"
          />
        </div>
        <div>
          <label>02. RETURN TRANSMISSION EMAIL *</label>
          <input
            type="email"
            name="Email"
            placeholder="name@organization.domain"
            required
          />
        </div>
        <div>
          <label>03. TOPIC / ENGAGEMENT SCOPE *</label>
          <select name="Topic">
            <option>Software Engineering Internship</option>
            <option>Undergraduate Research / Lab Collaboration</option>
            <option>Full-Stack Web & AI Systems Project</option>
            <option>Technical Inquiry & General Discourse</option>
          </select>
        </div>
        <div>
          <label>04. PROJECT PARAMETERS / DISPATCH CONTENT *</label>
          <textarea
            placeholder="Detail project timeline, engineering requirements, or institutional role..."
            required
            rows={5}
            name="Message"
          ></textarea>
        </div>
        <button type="submit">SEND MESSAGE →</button>
      </form>
    </div>
  );
}
