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

/* Intro text */

.contact-intro {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-muted-color, var(--bs-secondary-color));
}

/* Section headings */

.contact-section-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;

  margin: 0 0 0.25rem 0;
  padding: 0;

  font-size: 1.25rem;
  font-weight: 650;
}

.contact-section-title i {
  width: 1.35rem;
  text-align: center;
  color: var(--link-color, #0d6efd);
}

/* ==========================================================
   CONTACT CARDS
   ========================================================== */

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

/* Force blue hover and focus effects */

/* Card hover: blue border, but normal text colors */
.contact-page a.contact-card:hover,
.contact-page a.contact-card:focus-visible,
.contact-page a.contact-card:active {
  color: inherit !important;
  text-decoration: none !important;
  border-color: var(--link-color, #0d6efd) !important;
  box-shadow: 0 0.35rem 0.9rem rgb(0 0 0 / 8%);
  transform: translateY(-2px);
}

/* Keep every text element blue when hovering */

.contact-page a.contact-card:hover *,
.contact-page a.contact-card:focus-visible *,
.contact-page a.contact-card:active * {
  color: var(--link-color, #0d6efd) !important;
  text-decoration: none !important;
}

/* Keyboard focus outline */

.contact-page a.contact-card:focus-visible {
  outline: 2px solid var(--link-color, #0d6efd);
  outline-offset: 3px;
}

/* Card icon */

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

/* ==========================================================
   EMAIL CARDS
   ========================================================== */

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
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

/* Email card hover: blue border, normal email text */
.contact-page a.contact-email-card:hover,
.contact-page a.contact-email-card:focus-visible,
.contact-page a.contact-email-card:active {
  color: inherit !important;
  text-decoration: none !important;
  border-color: var(--link-color, #0d6efd) !important;
  box-shadow: 0 0.35rem 0.9rem rgb(0 0 0 / 8%);
  transform: translateY(-2px);
}

/* Keep email text and icons blue */

.contact-page a.contact-email-card:hover *,
.contact-page a.contact-email-card:focus-visible *,
.contact-page a.contact-email-card:active * {
  color: var(--link-color, #0d6efd) !important;
  text-decoration: none !important;
}

/* Keyboard focus outline */

.contact-page a.contact-email-card:focus-visible {
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

/* Email action, if used */

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

/* ==========================================================
   ABOUT ME CARD
   ========================================================== */

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

/* Blue background and white text on About Me hover */

.contact-page a.contact-about-link:hover,
.contact-page a.contact-about-link:focus-visible,
.contact-page a.contact-about-link:active {
  color: #fff !important;
  background: var(--link-color, #0d6efd) !important;
  border-color: var(--link-color, #0d6efd) !important;
  text-decoration: none !important;
}

.contact-page a.contact-about-link:hover *,
.contact-page a.contact-about-link:focus-visible *,
.contact-page a.contact-about-link:active * {
  color: #fff !important;
  text-decoration: none !important;
}

.contact-page a.contact-about-link:focus-visible {
  outline: 2px solid var(--link-color, #0d6efd);
  outline-offset: 3px;
}

/* ==========================================================
   RESPONSIVE LAYOUT
   ========================================================== */

@media (max-width: 767.98px) {
  .contact-grid,
  .contact-email-grid {
    grid-template-columns: minmax(0, 1fr);
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

/* ==========================================================
   REDUCED MOTION
   ========================================================== */

@media (prefers-reduced-motion: reduce) {
  .contact-card,
  .contact-email-card,
  .contact-about-link {
    transition: none;
  }

  .contact-page a.contact-card:hover,
  .contact-page a.contact-email-card:hover {
    transform: none;
  }
}

/* ==========================================================
   FIX: NEUTRAL CARD BORDERS IN DARK AND LIGHT THEMES
   ========================================================== */

/* Default border: neutral gray in both themes */
.contact-page .contact-card,
.contact-page .contact-email-card,
.contact-page .contact-about {
  border-color: #808080 !important;
}

/* Keep borders gray when not interacting */
.contact-page .contact-card:not(:hover):not(:focus-visible):not(:active),
.contact-page .contact-email-card:not(:hover):not(:focus-visible):not(:active) {
  border-color: #808080 !important;
}

/* Blue border only during hover or focus */
.contact-page a.contact-card:hover,
.contact-page a.contact-card:focus-visible,
.contact-page a.contact-card:active,
.contact-page a.contact-email-card:hover,
.contact-page a.contact-email-card:focus-visible,
.contact-page a.contact-email-card:active {
  border-color: var(--link-color, #0d6efd) !important;
}

/* Preserve the existing About Me button behavior */
.contact-page a.contact-about-link {
  border-color: #808080 !important;
}

.contact-page a.contact-about-link:hover,
.contact-page a.contact-about-link:focus-visible,
.contact-page a.contact-about-link:active {
  border-color: var(--link-color, #0d6efd) !important;
}

/* Only social card labels turn blue and underline */

.contact-page a.contact-card:hover .contact-card-label,
.contact-page a.contact-card:focus-visible .contact-card-label {
  color: var(--link-color, #0d6efd) !important;
  text-decoration: underline !important;
  text-underline-offset: 3px;
}

/* Preserve normal value and description colors */

.contact-page a.contact-card:hover .contact-card-value,
.contact-page a.contact-card:focus-visible .contact-card-value {
  color: var(--text-color, inherit) !important;
  text-decoration: none !important;
}

.contact-page a.contact-card:hover .contact-card-description,
.contact-page a.contact-card:focus-visible .contact-card-description {
  color: var(--text-muted-color, var(--bs-secondary-color)) !important;
  text-decoration: none !important;
}

/* Keep card icon colors unchanged */

.contact-page a.contact-card:hover .contact-card-icon,
.contact-page a.contact-card:focus-visible .contact-card-icon {
  color: var(--link-color, #0d6efd) !important;
}

/* Email address remains unchanged on hover */

.contact-page a.contact-email-card:hover .contact-email-address,
.contact-page a.contact-email-card:focus-visible .contact-email-address {
  color: var(--text-color, inherit) !important;
  text-decoration: none !important;
}

/* Set top and bottom spacing around contact section headings */
.contact-page h2.contact-section-title,
.contact-page .contact-section-title {
  margin: 1rem 0 0.5rem 0 !important;
  padding: 0 !important;
}

/* Diagnose and remove spacing around the contact page */
#main-wrapper,
main,
#post,
.post-content {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

/* Remove spacing around the main Contact page title */
h1.dynamic-title {
  margin: 0 0 0 0 !important;
  padding: 0 !important;
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
