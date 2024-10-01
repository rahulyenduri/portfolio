import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  // Function to open the modal with specific content
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  }

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  }

  // Masters Content
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
      </ul>
      <br/>
      <p>This program allowed me to develop expertise in various advanced
        computer science topics. My thesis is focused on the application of
        machine learning models in large-scale data environments. </p>
    </div>
  )

  // Bachelors Content
  const BachelorsContent = () => (
    <div>
      <h3>Bachelors in Computer Science</h3>
      <p>SRKR Engineering College (Sept 2017 - Mar 2021)</p>
      <h4>Major Projects:</h4>
      <ul>
        <li>System Design</li>
        <li>Data Analytics</li>
        <li>Cloud Computing</li>
      </ul>
      <p>During my undergraduate studies, I focused on ...</p>
    </div>
  )

  // Graduate Teaching Assistant Content
  const TeachingAssistantContent = () => (
    <div>
      <h3>Graduate Teaching Assistant</h3>
      <p>University of California, Riverside (Mar 2024 - Dec 2024)</p>
      <h4>Responsibilities:</h4>
      <ul>
        <li>Assisting in Algorithms and Data Structures classes</li>
        <li>Grading assignments and holding office hours</li>
        <li>Providing mentorship to students</li>
      </ul>
    </div>
  )

  // Business & Data Analyst Content
  const AnalystContent = () => (
    <div>
      <h3>Business & Data Analyst</h3>
      <p>ZS Associates (Oct 2021 - Jul 2023)</p>
      <h4>Key Responsibilities:</h4>
      <ul>
        <li>Analyzing business data for strategic decision-making</li>
        <li>Designing and implementing BI solutions</li>
        <li>Collaborating with cross-functional teams</li>
      </ul>
    </div>
  )

  return (
    <section className="qualification section">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
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

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education Section */}
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

          {/* Experience Section */}
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

      {/* Modal */}
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