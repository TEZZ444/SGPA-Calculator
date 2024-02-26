function generateSubjectInputs() {
  const totalSubjectsInput = document.getElementById("totalSubjects");
  const totalSubjects = Math.min(parseInt(totalSubjectsInput.value) || 0, 50);
  const subjectInputsContainer = document.getElementById("subjectInputs");

  if (totalSubjectsInput.value > 50) {
    totalSubjectsInput.value = 50;
    totalSubjectsInput.style.borderColor = "red";
  } else {
    totalSubjectsInput.style.borderColor = "";
  }
  subjectInputsContainer.innerHTML = "";
  for (let i = 1; i <= totalSubjects; i++) {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");

    const label = document.createElement("label");
    label.textContent = `Subject ${i}:`;

    const creditInput = document.createElement("input");
    creditInput.type = "number";
    creditInput.placeholder = "Credits";

    const gradeInput = document.createElement("input");
    gradeInput.type = "number";
    gradeInput.placeholder = "Grade Points";

    inputContainer.appendChild(label);
    inputContainer.appendChild(creditInput);
    inputContainer.appendChild(gradeInput);

    subjectInputsContainer.appendChild(inputContainer);
  }
}

function calculateSGPA() {
  const totalSubjects = Math.min(
    parseInt(document.getElementById("totalSubjects").value) || 0,
    50
  );
  const subjectInputsContainer = document.getElementById("subjectInputs");
  const resultContainer = document.getElementById("result");

  let totalCredits = 0;
  let weightedGradePoints = 0;

  for (let i = 0; i < totalSubjects; i++) {
    const creditInput = subjectInputsContainer.querySelectorAll(
      '.input-container input[type="number"]'
    )[i * 2];
    const gradeInput = subjectInputsContainer.querySelectorAll(
      '.input-container input[type="number"]'
    )[i * 2 + 1];

    const credits = parseFloat(creditInput.value) || 0;
    const gradePoints = parseFloat(gradeInput.value) || 0;

    totalCredits += credits;
    weightedGradePoints += credits * gradePoints;
  }

  const sgpa =
    totalCredits !== 0
      ? (weightedGradePoints / totalCredits).toFixed(2)
      : "N/A";
  resultContainer.textContent = `Your SGPA is: ${sgpa}`;
}

document
  .getElementById("totalSubjects")
  .addEventListener("input", generateSubjectInputs);
