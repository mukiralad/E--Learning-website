import React from "react";
import Navbar from "./NavbarBox";
import "../styles/Profile.css";
import assignments from "../assets/assignments.png";
import quizzes from "../assets/quizzes.png";
import notices from "../assets/notices.png";

function Profile() {
  return (
    <>
      <Navbar />
      <div class="container">
        <main class="grid">
          <article>
            <img src={assignments} alt="Sample photo" />
            <div class="text">
              <h3>Assignments</h3>
              <p>
                Navigate to assignments by clicking the button. (Currently
                redirects to home page.)
              </p>
              <a href="/home" class="btn btn-primary btn-block">
                Let's Go!
              </a>
            </div>
          </article>
          <article>
            <img src={quizzes} alt="Sample photo" />
            <div class="text">
              <h3>Quizzes</h3>
              <p>
                Navigate to view all scheduled quizzes by clicking the button.
                (Currently redirects to home page.){" "}
              </p>
              <a href="/home" class="btn btn-primary btn-block">
                Let's Go!
              </a>
            </div>
          </article>
          <article>
            <img src={notices} alt="Sample photo" />
            <div class="text">
              <h3>Notices</h3>
              <p>
                Navigate to check for new notices by clicking the button.
                (Currently redirects to home page.){" "}
              </p>
              <a href="/home" class="btn btn-primary btn-block">
                Let's Go!
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}

export default Profile;
