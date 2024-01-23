// get the toggle button
const toggleButton = document.getElementById("project-toggle");

// now add an event listener to the button toggle
toggleButton.addEventListener("click", () => {
  // get the section to be hidden
  let projectsContent = document.getElementById("project-details");

  // toggle the project details
  projectsContent.classList.toggle("hidden");

  // retrieve the icon
  icon = document.querySelector("i");

  // change the icon when the project details is showing
  icon.className = projectsContent.classList.contains("hidden")
    ? "fas fa-chevron-down fa-2xl arrow-toggle"
    : "fas fa-chevron-up fa-2xl arrow-toggle";
});
