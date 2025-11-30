function displayDicho(response) {
  new Typewriter(".dicho", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

function generateDicho(event) {
  event.preventDefault();

  let apiKey = "a02f35oaf431a4c16ab5t443397e311f";
  let prompt =
    "Provide a dicho, a saying in Spanish, about the subject provided in the context. Explain the dicho in english.";
  let subjectInput = document.querySelector("#subject");
  let context = subjectInput.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let dichoElement = document.querySelector(".dicho");
  dichoElement.innerHTML = `Searching for a dicho about ${context}...`;
  axios.get(apiUrl).then(displayDicho);
}
let dichoFormElement = document.querySelector("#dicho-form");
dichoFormElement.addEventListener("submit", generateDicho);
