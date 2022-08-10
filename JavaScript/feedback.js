/*  Title: Introduction about me
    Author: Lwin Moe Htet
    Date: 08/08/2022
       */
// Checks whether the form needs validation
(function () {
  "use strict"; // Use Strict Mode of JavaScript
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// Scroll to Start of Form
function submitForm() {
  document.getElementById("Scroll").scrollIntoView();
}
