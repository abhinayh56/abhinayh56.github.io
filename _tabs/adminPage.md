---
order: 9
layout: admin_custom
icon: fas fa-lock
permalink: /admin
title: Admin
---

---

## **1. Java script based calculator**

<div>
  <label>First number :</label>
  <input type="number" id="num1_1">

  <br><br>

  <label>Second number:</label>
  <input type="number" id="num2_1">

  <br><br>

  <button onclick="addNumbers_1()">Add_1</button>

  <p>Result_1: <span id="result_1"></span></p>
</div>

<script>

function addNumbers_1() {

  const num1 = Number(document.getElementById("num1_1").value);
  const num2 = Number(document.getElementById("num2_1").value);

  const sum = num1 + num2;

  document.getElementById("result_1").textContent = sum;
}

</script>

---

## **2. Backend based calculator**

<div>
  <label>First number:</label>
  <input type="number" id="num1_2">

  <br><br>

  <label>Second number:</label>
  <input type="number" id="num2_2">

  <br><br>

  <button onclick="addNumbers_2()">Add_2</button>

  <p>Result_2: <span id="result_2"></span></p>
</div>

<script>

async function addNumbers_2() {

  const num1 = Number(document.getElementById("num1_2").value);
  const num2 = Number(document.getElementById("num2_2").value);

  try {

    const response = await fetch("https://api.myroboticslab.com/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        num1: num1,
        num2: num2
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    document.getElementById("result_2").textContent = data.result;

  } catch (error) {

    console.error("Error:", error);

    document.getElementById("result_2").textContent =
      "Backend connection failed";
  }
}

</script>