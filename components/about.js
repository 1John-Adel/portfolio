"use client";
import "./styles/about.css";
import Skills from "@/components/skills";

export default function About() {
  return (
    <>
      <div id="about">
        <div id="a_head">
          <section>
            <span>01 —</span>
            <p>about & education</p>
          </section>
          <section>[ ACADEMIC RECORD // HELWAN CS ]</section>
        </div>
        <div id="a_body">
          <div id="b_left">
            <span>[ PERSONAL DISCIPLINE ]</span>
            <p>
              I am a Computer Science & Artificial Intelligence student at
              Helwan University with an obsession for software engineering,
              performant software systems, and tactile digital interfaces.
            </p>
            <h6>
              I treat code with the rigor of classical typography and modernist
              architecture: structural soundness beneath the surface, zero
              extraneous weight, and relentless attention to human tactile
              feedback.
            </h6>
            <div>
              <span>[ PERSONAL DISCIPLINE ]</span>
              <p>
                “Form follows function, but craftsmanship creates trust. From
                low-level C memory allocation to reactive web architectures.”
              </p>
              <h6>— Core System Dictum</h6>
            </div>
          </div>
          <div id="b_right">
            <span>[ CURRICULAR TIMELINE & CORE FOCUS ]</span>
            <div>
              <section id="up_right">
                <section>
                  <span>B.Sc. DEGREE CANDIDATE</span>
                  <p>Computer Science & Artificial Intelligence</p>
                  <h5>
                    Faculty of Computers & Artificial Intelligence, Capital
                    University
                  </h5>
                </section>
                <section>
                  <div>2025 — present</div>
                  <h4>cairo, egypt</h4>
                </section>
              </section>
              <section id="bottom_right">
                <span>[ VERIFIED RELEVANT COURSEWORK & THEORY ]</span>
                <section>
                  <div>
                    <section>01</section>
                    <section>
                      <p>Data Structures & Algorithms</p>
                      <h6>Trees, Graphs, Sorting, Hash Maps, Big-O</h6>
                    </section>
                  </div>
                  <div>
                    <section>02</section>
                    <section>
                      <p>Operating Systems & Concurrency</p>
                      <h6>Process Scheduling, Memory, Threads, POSIX C</h6>
                    </section>
                  </div>
                  <div>
                    <section>03</section>
                    <section>
                      <p>Database Systems Architecture</p>
                      <h6>Relational Algebra, Normalization, SQL, Indexing</h6>
                    </section>
                  </div>
                  <div>
                    <section>04</section>
                    <section>
                      <p>Computer Networks & Protocols</p>
                      <h6>TCP/IP, Sockets, HTTP/2, DNS, Layered Models</h6>
                    </section>
                  </div>
                  <div>
                    <section>05</section>
                    <section>
                      <p>Machine Learning</p>
                      <h6>
                        Classification, Regression, Scikit-Learn, Feature Eng
                      </h6>
                    </section>
                  </div>
                  <div>
                    <section>06</section>
                    <section>
                      <p>Software Engineering & Architecture</p>
                      <h6>Clean Code, OOP, Design Patterns, Testing</h6>
                    </section>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
}
