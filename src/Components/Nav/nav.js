import React from "react";
import "./nav.css";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="navbar">
      <ul className="nav">
        <li className="nav-choice">
          <a
            href="#HomePage"
            onClick={() => handlePageChange("HomePage")}
            className={
              currentPage === "HomePage" ? "nav-link active" : "nav-link"
            }
          >
            <button type="button" className="btns border-2 rounded-3">
              HOME
            </button>
          </a>
        </li>
        <li className="nav-choice">
          <a
            href="#AboutMe"
            onClick={() => handlePageChange("AboutMe")}
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
          >
            <button type="button" className="btns border-2 rounded-3">
              ABOUT ME
            </button>
          </a>
        </li>
        <li className="nav-choice">
          <a
            href="#ContactMe"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            <button type="button" className="btns border-2 rounded-3">
              CONTACT ME
            </button>
          </a>
        </li>
        <li className="nav-choice">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            <button
              type="button"
              type="button"
              className="btns border-2 rounded-3"
            >
              WORK/PROJECTS
            </button>
          </a>
        </li>
        <li className="nav-choice">
          <a
            href="#Resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            <button type="button" className="btns border-2 rounded-3">
              RESUME
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}
