---
order: 7
layout: minimal_custom
icon: fas fa-envelope
permalink: /contact
title: Contact
---

<style>
/* ==========================================================
   CONTACT PAGE
   ========================================================== */

.contact-page {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  color: var(--text-color, inherit);
}

.contact-intro {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-muted-color, var(--bs-secondary-color));
}

.contact-section-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 1.6rem 0 0.85rem;
  font-size: 1.25rem;
  font-weight: 650;
}

.contact-section-title i {
  width: 1.35rem;
  text-align: center;
  color: var(--link-color, #0d6efd);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.contact-card {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  min-width: 0;
  padding: 0.75rem;
  color: inherit;
  text-decoration: none;
  background: var(--card-bg);
  border: 1px solid var(--bs-border-color);
  border-radius: 0.65rem;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

a.contact-card:hover,
a.contact-card:focus-visible {
  color: inherit;
  text-decoration: none;
  border-color: var(--link-color, #0d6efd);
  box-shadow: 0 0.35rem 0.9rem rgb(0 0 0 / 8%);
  transform: translateY(-2px);
}

a.contact-card:focus-visible {
  outline: 2px solid var(--link-color, #0d6efd);
  outline-offset: 3px;
}

.contact-card-icon {
  display: flex;
  flex: 0 0 2.65rem;
  align-items: center;
  justify-content: center;
  width: 2.65rem;
  height: 2.65rem;
  color: var(--link-color, #0d6efd);
  background: var(--bs-tertiary-bg, #f1f1f1);
  border: 1px solid var(--bs-border-color);
  border-radius: 0.55rem;
  font-size: 1.15rem;
}

.contact-card-content {
  flex: 1 1 auto;
  min-width: 0;
  padding-top: 0.05rem;
}

.contact-card-label {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.95rem;
  font-weight: 650;
  line-height: 1.4;
}

.contact-card-value {
  display: block;
  font-size: 0.88rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.contact-card-description {
  display: block;
  margin-top: 0.3rem;
  color: var(--text-muted-color, var(--bs-secondary-color));
  font-size: 0.78rem;
  line-height: 1.5;
}

.contact-email-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.contact-email-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;
  min-width: 0;
  padding: 0.75rem;
  color: inherit;
  text-decoration: none;
  background: var(--card-bg);
  border: 1px solid var(--bs-border-color);
  border-radius: 0.65rem;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

a.contact-email-card:hover,
a.contact-email-card:focus-visible {
  color: inherit;
  text-decoration: none;
  border-color: var(--link-color, #0d6efd);
  box-shadow: 0 0.35rem 0.9rem rgb(0 0 0 / 8%);
  transform: translateY(-2px);
}

a.contact-email-card:focus-visible {
  outline: 2px solid var(--link-color, #0d6efd);
  outline-offset: 3px;
}

.contact-email-heading {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-weight: 650;
  font-size: 0.95rem;
}

.contact-email-heading i {
  color: var(--link-color, #0d6efd);
  font-size: 1.15rem;
}

.contact-email-address {
  width: 100%;
  font-size: 0.87rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.contact-email-action {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: auto;
  padding-top: 0.2rem;
  color: var(--link-color, #0d6efd);
  font-size: 0.82rem;
  font-weight: 600;
}

.contact-about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.6rem;
  padding: 1.1rem 1.2rem;
  background: var(--card-bg);
  border: 1px solid var(--bs-border-color);
  border-radius: 0.65rem;
}

.contact-about-text {
  min-width: 0;
}

.contact-about-title {
  margin: 0 0 0.3rem;
  font-size: 1rem;
  font-weight: 650;
}

.contact-about-description {
  margin: 0;
  color: var(--text-muted-color, var(--bs-secondary-color));
  font-size: 0.85rem;
  line-height: 1.6;
}

.contact-about-link {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.55rem 0.85rem;
  color: var(--link-color, #0d6efd);
  text-decoration: none;
  border: 1px solid var(--bs-border-color);
  border-radius: 0.45rem;
  font-size: 0.85rem;
  font-weight: 600;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.contact-about-link:hover,
.contact-about-link:focus-visible {
  color: #fff;
  background: var(--link-color, #0d6efd);
  border-color: var(--link-color, #0d6efd);
  text-decoration: none;
}

@media (max-width: 767.98px) {
  .contact-grid,
  .contact-email-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .contact-section-title {
    margin-top: 1.35rem;
  }

  .contact-email-card {
    padding: 1rem;
  }
}

@media (max-width: 420px) {
  .contact-about {
    align-items: flex-start;
    flex-direction: column;
  }

  .contact-about-link {
    align-self: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-card,
  .contact-email-card,
  .contact-about-link {
    transition: none;
  }
}
</style>

<div class="contact-page">

  <p class="contact-intro">
    Feel free to reach out for professional inquiries, robotics and engineering discussions, collaborations, or questions about my projects and technical work. You can contact me directly by email or connect with me through the platforms below.
  </p>

  <!-- ========================= EMAIL ========================= -->

<h2 class="contact-section-title">
  <i class="fas fa-envelope" aria-hidden="true"></i>
  Email
</h2>

<p class="contact-intro">
  For email communication, you can reach me at either of the following addresses:
</p>

<div class="contact-email-grid">

  <a class="contact-email-card"
     href="mailto:kumarabhinay53@gmail.com">
    <span class="contact-email-address">
      <i class="fas fa-envelope" aria-hidden="true"></i>
      kumarabhinay53@gmail.com
    </span>
  </a>

  <a class="contact-email-card"
     href="mailto:kumar.19@alumni.iitj.ac.in">
    <span class="contact-email-address">
      <i class="fas fa-envelope" aria-hidden="true"></i>
      kumar.19@alumni.iitj.ac.in
    </span>
  </a>

</div>

  <!-- ========================= CONNECT ========================= -->

  <h2 class="contact-section-title">
    <i class="fas fa-globe" aria-hidden="true"></i>
    Connect with Me
  </h2>

  <div class="contact-grid">

    <a class="contact-card"
       href="https://www.linkedin.com/in/abhinay-kumar-b1185011b/"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Visit Abhinay's LinkedIn profile">

      <span class="contact-card-icon">
        <i class="fab fa-linkedin-in" aria-hidden="true"></i>
      </span>

      <span class="contact-card-content">
        <span class="contact-card-label">LinkedIn</span>
        <span class="contact-card-value">Professional Profile</span>
        <span class="contact-card-description">
          Professional networking and career-related connections.
        </span>
      </span>

    </a>

    <a class="contact-card"
       href="https://github.com/abhinayh56"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Visit Abhinay's GitHub profile">

      <span class="contact-card-icon">
        <i class="fab fa-github" aria-hidden="true"></i>
      </span>

      <span class="contact-card-content">
        <span class="contact-card-label">GitHub</span>
        <span class="contact-card-value">github.com/abhinayh56</span>
        <span class="contact-card-description">
          Robotics software, code repositories, and engineering projects.
        </span>
      </span>

    </a>

    <a class="contact-card"
       href="https://youtube.com/@my_robotics_lab"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Visit My Robotics Lab on YouTube">

      <span class="contact-card-icon">
        <i class="fab fa-youtube" aria-hidden="true"></i>
      </span>

      <span class="contact-card-content">
        <span class="contact-card-label">YouTube</span>
        <span class="contact-card-value">@my_robotics_lab</span>
        <span class="contact-card-description">
          Robotics demonstrations, technical content, and project videos.
        </span>
      </span>

    </a>

    <div class="contact-card">

      <span class="contact-card-icon">
        <i class="fas fa-phone-alt" aria-hidden="true"></i>
      </span>

      <span class="contact-card-content">
        <span class="contact-card-label">Phone</span>
        <span class="contact-card-value">+91&nbsp;8XXXX&nbsp;XXXXX</span>
        <span class="contact-card-description">
          Phone number partially hidden for privacy.
        </span>
      </span>

    </div>

  </div>

  <!-- ========================= ABOUT ========================= -->

  <div class="contact-about">

    <div class="contact-about-text">
      <h3 class="contact-about-title">Want to know more about me?</h3>
      <p class="contact-about-description">
        Explore my background, engineering experience, and interests in robotics.
      </p>
    </div>

    <a href="{{ '/about' | relative_url }}"
       class="contact-about-link">
      <i class="fas fa-user" aria-hidden="true"></i>
      About Me
      <i class="fas fa-arrow-right" aria-hidden="true"></i>
    </a>

  </div>

</div>
