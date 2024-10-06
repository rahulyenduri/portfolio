import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  }

  const MastersContent = () => (
    <div>
      <h3>Masters in Computer Science</h3>
      <p className="subtitle-location">University of California, Riverside (Sept 2023 - Mar 2025)</p>
      <br/>
      <h4>Key Focus Areas:</h4>
      <ul className="custom-bullets">
        <li>Data Structures and Algorithms</li>
        <li>Advanced Data Science</li>
        <li>Compilers</li>
        <li>System Design</li>
      </ul>
      <p className="main-info">This program allowed me to develop expertise in various advanced
        computer science topics such as advanced data structures, algorithms, compilers, advanced data science topics including information retrieval and big data techniques. My research is focused on incremental compilation of compilers. I'm developing a project that is a proof of concept for a compiler that can handle incremental compilation effectively. Built a big data project on spatial data intersection and developed GPU and AI projects. </p>
    </div>
  )

  const BachelorsContent = () => (
    <div>
      <h3>Bachelors in Computer Science</h3>
      <p className="subtitle-location">SRKR Engineering College (Aug 2017 - Jul 2021)</p>
      <br/>
      <h4>Key Focus Areas:</h4>
      <ul className="custom-bullets">
        <li>Data Structures</li>
        <li>PL/SQL and Database Design</li>
        <li>Cloud Computing</li>
      </ul>
      <p className="main-info">During my undergraduate studies, I focused on developing core Computer Science topics such as programming languages, data structures, algorithms, databases, cloud technologies, fundamentals of data science, IoT, cyber security, mathematics and statistics. I developed various projects that covered wide range of tech stacks during my tenure that helped me gain a hands-on knowledge with building tools of software.</p>
    </div>
  )

  const TeachingAssistantContent = () => (
    <div>
      <h3>Graduate Teaching Assistant</h3>
      <p className="subtitle-location">University of California, Riverside (Mar 2024 - Dec 2024)</p>
      <br/>
      <p>Courses Lectured: Database Management Systems, Introduction to computing, Deep Learning.</p>
      <br/>
      <h4>Responsibilities:</h4>
      <br/>
      <ul className="custom-bullets">
        <li>Designed and conducted labs for Database Management Systems, covering ER diagrams, SQL queries, and database projects.</li>
        <li>Taught students deep learning methods and guided them on developing the right models and networks based upon the datasets and learning rates.</li>
        <li>Created lab materials and assignments, ensuring alignment with course objectives and enhancing practical application of theoretical concepts.</li>
        <li>Taught foundational computing concepts, including building basic web pages with HTML and CSS, and introduced essential programming principles and computing tools to beginners, fostering a solid understanding of computing basics.</li>
        <li>Evaluated student performance through quizzes, lab assignments, and projects.</li>
        <li>Provided constructive feedback and contributed to fair and consistent grading processes, ensuring student improvement and understanding.</li>
      </ul>
    </div>
  )

  const AnalystContent = () => (
    <div>
      <h3>Business & Data Analyst</h3>
      <p className="subtitle-location">ZS Associates (Oct 2021 - Jul 2023)</p>
      <br/>
      <p>Skills gained: Amazon Web Services(AWS), PySpark, PostgreSQL, Python, Apache Airflow, ETL, Business Development, Data Engineering, Database and System Design, BitBucket.</p>
      <br/>
      <h4>Key Responsibilities:</h4>
      <br/>
      <ul className="custom-bullets">
        <li>In my previous role as a Business Analyst and Data Engineer, I was instrumental in driving multiple high-impact projects across both client-facing and internal operations, delivering innovative business solutions that enhanced performance and efficiency.</li>
        <li>One of my key achievements was designing and developing a data migration tool that achieved an outstanding <strong>95% efficiency and 100% data accuracy</strong>, significantly benefiting clients and our company. This tool, utilizing <strong>AWS for database and backend and Salesforce for frontend</strong>, not only streamlined complex migration processes but also saved the company over <strong>50 man-hours per week</strong>, translating into <strong>hundreds of thousands of dollars</strong> in operational savings annually.</li>
        <li>Additionally, I spearheaded the implementation of an <strong>AWS-based alignment generation tool</strong>, <strong>boosting data processing efficiency by 25%</strong>. This solution has since become a <strong>cornerstone of our flagship product</strong>, directly contributing to product quality and speed. Another noteworthy contribution was developing a <strong>Root Cause Analysis automation tool</strong>, which eliminated weeks of manual effort and resulted in <strong>significant cost reductions and productivity gains</strong>.</li>
        <li>
        These projects enabled me to deepen my <strong>expertise in cloud technologies, particularly AWS</strong>, and solidified my role as a key contributor to technical innovations. Furthermore, I took pride in mentoring new team members, accelerating their ramp-up time while ensuring the delivery of high-quality solutions through a <strong>deep understanding of business challenges</strong>.
        </li>
        <li>My work also included creating <strong>comprehensive reports and design documents</strong> that facilitated seamless communication between internal teams and clients, ensuring alignment and clarity in project execution.</li>
        <strong></strong>
      </ul>
    </div>
  )

  return (
    <section className="qualification section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Professional Work
          </div>

          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div onClick={() => openModal(<MastersContent />)}>
                <h3 className="qualification__title">Masters in Computer Science</h3>
                <span className="qualification__subtitle">
                  University of California, Riverside
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sept 2023 - Mar 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div onClick={() => openModal(<BachelorsContent />)}>
                <h3 className="qualification__title">Bachelors in Computer Science</h3>
                <span className="qualification__subtitle">
                  SRKR Engineering College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sept 2017 - Mar 2021
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div onClick={() => openModal(<TeachingAssistantContent />)}>
                <h3 className="qualification__title">Graduate Teaching Assistant</h3>
                <span className="qualification__subtitle">
                  University of California, Riverside
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Mar 2024 - Dec 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div onClick={() => openModal(<AnalystContent />)}>
                <h3 className="qualification__title">Business & Data Analyst</h3>
                <span className="qualification__subtitle">ZS Associates</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Oct 2021 - Jul 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <span className="modal__close" onClick={closeModal}>&times;</span>
            {modalContent}
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience