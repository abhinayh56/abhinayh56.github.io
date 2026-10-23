---
order: 6
layout: about_custom
icon: fas fa-user
permalink: /about
title: About
---

<div class="about-page">

  <!-- Professional summary and specializations -->
  <section class="about-hero">
    <div class="about-hero-content">
      <h2 class="about-hero-title">Professional Summary</h2>

      <p class="about-hero-description">
        Robotics Software Engineer specializing in robot control, real-time systems, and motion control, with experience in robotic software development and hardware implementation. Interested in developing industry-grade robotic systems using C++, ROS 2, EtherCAT, and advanced control techniques
      </p>

      {% comment %}
      <div class="about-specializations">
        <span><i class="fas fa-robot" aria-hidden="true"></i> Robotics</span>
        <span><i class="fas fa-microchip" aria-hidden="true"></i> Embedded Systems</span>
        <span><i class="fas fa-wave-square" aria-hidden="true"></i> Control Systems</span>
      </div>
      {% endcomment %}

      <div class="about-hero-actions">
        <a class="about-button" href="{{ '/assets/files/Abhinay_Kumar_Resume.pdf' | relative_url }}"
           target="_blank" rel="noopener noreferrer">
          <i class="fas fa-file-pdf" aria-hidden="true"></i>
          Resume
        </a>

        <a class="about-button" href="{{ '/assets/files/Abhinay_Kumar_CV.pdf' | relative_url }}"
           target="_blank" rel="noopener noreferrer">
          <i class="fas fa-file-pdf" aria-hidden="true"></i>
          CV
        </a>

        <a class="about-button" href="{{ '/contact' | relative_url }}">
          <i class="fas fa-envelope" aria-hidden="true"></i>
          Contact
        </a>

        <a class="about-button" href="{{ '/' | relative_url }}">
          <i class="fas fa-home" aria-hidden="true"></i>
          Website Home
        </a>
      </div>
    </div>
  </section>


  <!-- Work experience -->
  <section class="about-section" id="experience">
    <h2 class="about-section-title">
      <i class="fas fa-briefcase" aria-hidden="true"></i>
      Work Experience
    </h2>

    <div class="about-timeline">
      <article class="about-timeline-item">
        <div class="about-timeline-marker">
          <i class="fas fa-building" aria-hidden="true"></i>
        </div>

        <div class="about-timeline-card">
          <div class="about-timeline-header">
            <h3>SS Innovations Pvt. Ltd.</h3>
            <span class="about-status">
              <span class="about-status-dot"></span>
              Present
            </span>
          </div>

          <div class="about-role">
            <div class="about-role-heading">
              <h4>Senior Robotics Software Engineer</h4>
              <span class="about-date">21 July 2025 – Present</span>
            </div>
            <ul class="about-role-points">
              <li>Develop real-time software and control components for medical and surgical robotics.</li>
              <li>Work on deterministic robot-control architecture and EtherCAT-based communication with distributed devices.</li>
              <li>Develop and integrate control, filtering, and state-estimation components for robotic systems.</li>
            </ul>
          </div>

          <div class="about-role">
            <div class="about-role-heading">
              <h4>Mechatronics Engineer</h4>
              <span class="about-date">6 February 2023 – 20 July 2025</span>
            </div>
            <ul class="about-role-points">
              <li>Contributed to mechatronics and embedded-software development for robotic systems.</li>
              <li>Worked across hardware interfaces, control software, and system integration.</li>
            </ul>
          </div>
        </div>
      </article>

      <article class="about-timeline-item">
        <div class="about-timeline-marker">
          <i class="fas fa-university" aria-hidden="true"></i>
        </div>

        <div class="about-timeline-card">
          <div class="about-timeline-header">
            <h3>Indian Institute of Technology Jodhpur</h3>
          </div>

          <div class="about-role">
            <div class="about-role-heading">
              <h4>Project Assistant</h4>
              <span class="about-date">December 2019 – May 2020</span>
            </div>
            <ul class="about-role-points">
              <li>Worked on engineering research and project activities at IIT Jodhpur.</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>


  <!-- Education -->
  <section class="about-section" id="education">
    <h2 class="about-section-title">
      <i class="fas fa-graduation-cap" aria-hidden="true"></i>
      Education
    </h2>

    <div class="about-timeline about-education-timeline">
      <!-- Postgraduate -->
      <article class="about-timeline-item">
        <div class="about-timeline-marker">
          <i class="fas fa-graduation-cap" aria-hidden="true"></i>
        </div>

        <div class="about-timeline-card">
          <div class="about-timeline-header about-education-header">
            <div>
              <span class="about-card-kicker">POSTGRADUATE</span>
              <h3>M.Tech. <span class="about-degree-specialization">(Advanced Manufacturing &amp; Design)</span></h3>
              <p class="about-card-subtitle">
                Indian Institute of Technology Jodhpur
              </p>
            </div>
            <span class="about-date">2022</span>
          </div>
        </div>
      </article>

      <!-- Undergraduate -->
      <article class="about-timeline-item">
        <div class="about-timeline-marker">
          <i class="fas fa-cogs" aria-hidden="true"></i>
        </div>

        <div class="about-timeline-card">
          <div class="about-timeline-header about-education-header">
            <div>
              <span class="about-card-kicker">UNDERGRADUATE</span>
              <h3>B.Tech. <span class="about-degree-specialization">(Mechanical Engineering)</span></h3>
              <p class="about-card-subtitle">
                Indian Institute of Technology Jodhpur
              </p>
            </div>
            <span class="about-date">2019</span>
          </div>
        </div>
      </article>
    </div>
  </section>


  <!-- Technical skills -->
  <section class="about-section" id="skills">
    <h2 class="about-section-title">
      <i class="fas fa-microchip" aria-hidden="true"></i>
      Technical Skills
    </h2>

    <div class="about-skill-grid">
      <article class="about-skill-card">
        <h3><i class="fas fa-code" aria-hidden="true"></i> Programming</h3>
        <div class="about-skill-tags">
          <span>C</span><span>C++</span><span>Python</span><span>Embedded C</span>
        </div>
      </article>

      <article class="about-skill-card">
        <h3><i class="fas fa-robot" aria-hidden="true"></i> Robotics</h3>
        <div class="about-skill-tags">
          <span>ROS</span><span>ROS 2</span><span>Kinematics</span><span>Dynamics</span>
          <span>Motion Control</span><span>Trajectory Planning</span>
        </div>
      </article>

      <article class="about-skill-card">
        <h3><i class="fas fa-stopwatch" aria-hidden="true"></i> Real-Time Systems</h3>
        <div class="about-skill-tags">
          <span>EtherCAT</span><span>Embedded Systems</span><span>State Machines</span>
        </div>
      </article>

      <article class="about-skill-card">
        <h3><i class="fas fa-chart-line" aria-hidden="true"></i> Control &amp; Estimation</h3>
        <div class="about-skill-tags">
          <span>PID Control</span><span>Kalman Filters</span><span>Sensor Fusion</span>
          <span>State Estimation</span>
        </div>
      </article>

      <article class="about-skill-card">
        <h3><i class="fas fa-microchip" aria-hidden="true"></i> Hardware Platforms</h3>
        <div class="about-skill-tags">
          <span>Teensy</span><span>STM32</span><span>Arduino</span>
          <span>Raspberry Pi</span><span>Pixhawk</span>
        </div>
      </article>

      <article class="about-skill-card">
        <h3><i class="fas fa-tools" aria-hidden="true"></i> Engineering Tools</h3>
        <div class="about-skill-tags">
          <span>MATLAB</span><span>Simulink</span><span>SolidWorks</span>
          <span>Gazebo</span><span>RViz</span>
        </div>
      </article>
    </div>
  </section>


  <!-- Work interests: all interests in one card -->
  <section class="about-section" id="interests">
    <h2 class="about-section-title">
      <i class="fas fa-compass" aria-hidden="true"></i>
      Work Interests
    </h2>

    <div class="about-single-card about-interest-list">
      <div class="about-interest-item">
        <i class="fas fa-sliders-h" aria-hidden="true"></i>
        <span>Real-time robotic control and software architecture</span>
      </div>
      <div class="about-interest-item">
        <i class="fas fa-crosshairs" aria-hidden="true"></i>
        <span>Robot calibration, kinematics, and motion control</span>
      </div>
      <div class="about-interest-item">
        <i class="fas fa-microchip" aria-hidden="true"></i>
        <span>Embedded systems and state estimation</span>
      </div>
      <div class="about-interest-item">
        <i class="fas fa-plane" aria-hidden="true"></i>
        <span>Autonomous systems and flight control</span>
      </div>
      <div class="about-interest-item">
        <i class="fas fa-heartbeat" aria-hidden="true"></i>
        <span>Surgical and medical robotics</span>
      </div>
      <div class="about-interest-item">
        <i class="fas fa-network-wired" aria-hidden="true"></i>
        <span>EtherCAT-based distributed control systems</span>
      </div>
    </div>
  </section>


  <!-- Documents and links: all links in one card -->
  <section class="about-section" id="documents">
    <h2 class="about-section-title">
      <i class="fas fa-folder-open" aria-hidden="true"></i>
      Documents &amp; Links
    </h2>

    <div class="about-single-card about-document-list">
      <a class="about-document-card"
         href="{{ '/assets/files/Abhinay_Kumar_Resume.pdf' | relative_url }}"
         target="_blank" rel="noopener noreferrer">
        <span class="about-document-icon"><i class="fas fa-file-pdf" aria-hidden="true"></i></span>
        <span class="about-document-content">
          <strong>Resume</strong>
          <span>Professional experience and technical profile</span>
        </span>
        <i class="fas fa-arrow-up-right-from-square about-document-arrow" aria-hidden="true"></i>
      </a>

      <a class="about-document-card"
         href="{{ '/assets/files/Abhinay_Kumar_CV.pdf' | relative_url }}"
         target="_blank" rel="noopener noreferrer">
        <span class="about-document-icon"><i class="fas fa-file-alt" aria-hidden="true"></i></span>
        <span class="about-document-content">
          <strong>Curriculum Vitae</strong>
          <span>Detailed academic and professional profile</span>
        </span>
        <i class="fas fa-arrow-up-right-from-square about-document-arrow" aria-hidden="true"></i>
      </a>

      <a class="about-document-card" href="{{ '/contact' | relative_url }}">
        <span class="about-document-icon"><i class="fas fa-envelope" aria-hidden="true"></i></span>
        <span class="about-document-content">
          <strong>Contact</strong>
          <span>Get in touch regarding engineering and research</span>
        </span>
        <i class="fas fa-arrow-right about-document-arrow" aria-hidden="true"></i>
      </a>

      <a class="about-document-card" href="{{ '/' | relative_url }}">
        <span class="about-document-icon"><i class="fas fa-home" aria-hidden="true"></i></span>
        <span class="about-document-content">
          <strong>Website Home</strong>
          <span>Explore projects, articles, libraries, and resources</span>
        </span>
        <i class="fas fa-arrow-right about-document-arrow" aria-hidden="true"></i>
      </a>
    </div>
  </section>

</div>
