---
title: "Library 1"
date: 2024-07-20 02:05:30 +0530
categories: [Robotics]
tags: [Kinematics]
layout: library_custom
permalink: /libraries/library-1
math: true
toc: true
---

## Professional Summary

Robotics Software Engineer with experience in **medical robotics, autonomous aerial vehicles, embedded systems, control systems, state estimation, EtherCAT, and robotics software architecture**. Experienced in developing real-time robotic control software, onboard flight control systems, mathematical modeling, robotic calibration systems, and autonomous navigation algorithms.

Strong background in **C++, Python, robotics algorithms, state estimation, embedded programming, and robotic system integration** with industrial as well as research experience. Passionate about designing reliable robotic software frameworks for real-time applications.

---

## Education

| Degree / Level | Institute | Course / Department | Year |
|---------|-----------|-----------|------:|
| **M.Tech.** | Indian Institute of Technology Jodhpur | Advanced Manufacturing & Design | 2022 |
| **B.Tech.** | Indian Institute of Technology Jodhpur | Mechanical Engineering | 2019 |
| **Class XII** | Indian Public School, Madhubani | Science & Math | 2014 |
| **Class X** | Ramakrishna Mission Vidyapith, Deoghar | CBSE | 2012 |

---

## Professional Experience

### SS Innovations Pvt. Ltd.
**Mechatronics Engineer (Robotics Software Development)**

**February 2023 – Present**

#### Responsibilities

- Develop robotics software for surgical robotic systems.
- Designed mathematical models for **30+ cable-driven robotic grippers** spanning five different mechanisms.
- Developed control systems for various **endo-surgical robotic instruments**.
- Developed an automatic calibration framework for robotic linear joints using:
  - EtherCAT
  - State machines
  - Automated calibration algorithms
- Standardized production testing procedures for endo-surgical micro-grippers.

---

### IIT Jodhpur

#### **Research Engineer**
**Robotics Lab | March 2022 – May 2022**
##### Project
SERB-DST funded project on autonomous unmanned rotorcraft navigation.
##### Contributions
- Integrated flight controller with Single Board Computer (SBC).
- Implemented visual odometry framework.
- Interfaced long-range communication module (RFD900) with custom autopilot.

- Developed communication software for transmission, reception and packet-loss analysis.
- Investigated autonomous hovering and waypoint navigation for helicopter platforms.

---

#### **Student Project Research Associate**
**Helicopter Lab | October 2020 – July 2022**
##### Responsibilities
- Improved quadrotor orientation and position control.
- Implemented GPS delay compensation using IMU sensor fusion.
- Studied and implemented modern waypoint navigation algorithms.
- Implemented trajectory tracking algorithms for aerial and mobile robotic platforms.

---

#### **Project Assistant**
**Helicopter Laboratory | December 2019 – September 2020**
##### DRDO DYSL-AST Sponsored Project
Development of indigenous onboard Flight Control System (FCS)
##### Responsibilities
- Developed complete flight-control software framework.
- Implemented:
  - State estimation
  - Flight control
  - Sensor interpretation
  - Data processing algorithms
- Developed indigenous reusable software libraries.
- Successfully demonstrated autonomous outdoor flight.
- Delivered software and documentation to DRDO.

##### Additional Responsibilities

###### Mid-range RF Communication System
- Designed and developed RF transceiver (>10 km range) for nuclear radiation sensors.

###### Nuclear Sensor Communication
- Developed communication software for DRDO DELRAD nuclear sensors.
- Used TI TIVA CC1310 LaunchPad.
- Implemented wireless communication and sensor data interpretation.

---

## this is my resume
### this is test heading
- this is point 1
- this is point 2
- this is point 3
- this is point 4

```cpp
#include <iostream>

int main()
{
    std::cout << "this is a test for code blocks in c++" << std::endl

    return 0;
}
```
<!-- {: .nolineno } -->

```shell
pwd
mkdir -p ~/abhinay/catkin_ws
cd /catkin_ws
catkin create pkg turtlesim_custom
catkin make
```

```shell
# content
```
{: file="path/to/file" }

{% raw %}
```liquid
{% if product.title contains 'Pack' %}
  This product's title contains the word Pack.
{% endif %}
```
{% endraw %}



<!-- Block math, keep all blank lines -->

$$
LaTeX_math_expression
$$

<!-- Equation numbering, keep all blank lines  -->

$$
\begin{equation}
  LaTeX_math_expression
  \label{eq:label_name}
\end{equation}
$$

$$
\begin{equation}
s=ut + 1/2at^2

\alpha_{1,2}=\frac{-b \pm \sqrt{b^2-4ac}}{2a}
\label{eq:75}
\end{equation}
$$

Can be referenced as \eqref{eq:label_name}.

<!-- Inline math in lines, NO blank lines -->

"Lorem ipsum dolor sit amet, $$ LaTeX_math_expression $$ consectetur adipiscing elit."

<!-- Inline math in lists, escape the first `$` -->

1. \$$ LaTeX_math_expression $$
2. \$$ LaTeX_math_expression $$
3. \$$ LaTeX_math_expression $$