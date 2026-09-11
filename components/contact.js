'use client';
import "@/components/styles/contact.css";
import { useState } from 'react';
import Form from "@/components/form";
import Trigger from '@/components/triger';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [Show, setShow] = useState(false);

  const copy = async () =>{
    await navigator.clipboard.writeText('johnadel.tech@gmail.com');

    setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
  }

  return (
    <div id="contact">
      <div id="c_head">
        <section>
          <span>03 —</span>
          <p>Contact</p>
        </section>
        <span>[ TRANSMISSION LINK // ACTIVE ]</span>
      </div>
      <div id="c_body">
        <section>
          <span>[ OPEN INVITATION ]</span>
          <h1>LET’S BUILD SOMETHING RIGOROUS.</h1>
          <p>
            Open for Full-Time & Internship Software Engineering Roles, Research
            Initiatives, and Technical Advisory.
          </p>
          <div>
              <div>[ PRIMARY INBOX ]</div>
            <section>
              <p>johnadel.tech@gmail.com</p>
            <button onClick={()=>copy()}>{copied ? 'Copied ✓' : 'Copy address'}</button>
            </section>
          </div>
          <section>
            <div>NETWORK VERIFICATION & REPOSITORIES</div>
            <a href="https://github.com/1John-Adel" target="_blank">
              <div>github</div>
              <span>github.com/1John-Adel ↗</span>
            </a>
            <a href="https://www.linkedin.com/in/john-adel15/" target="_blank">
              <div>linkedin</div>
              <span>linkedin.com/in/john-adel15 ↗</span>
            </a>
          </section>
          <footer>
            COMMUNICATION: DIRECT // RESPONSE TIME: WITHIN 24 HOURS
          </footer>
        </section>
        <Form />
      </div>
      <Trigger />
    </div>
  );
}
