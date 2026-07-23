---
title: "Project 2"
date: 2025-07-20 02:05:30 +0530
categories: [Robotics]
tags: [Kinematics]
layout: project_custom
order: 2
---

# this is my resume
## this is test heading
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
% s=ut + 1/2at^2

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