document.addEventListener("DOMContentLoaded", function () {
  // Select the checkbox and agree button elements
  const gdprCheck = document.getElementById("gdpr-check");
  const gdprAgreeButton = document.getElementById("gdpr-agree");

  // Check if the user has already agreed to the GDPR Policy and Google Analytics policy
  if (localStorage.getItem("gdprAgreed") === "true") {
    // User has already agreed
    console.log("User has already agreed to GDPR Policy and Google Analytics.");
  } else {
    // User has not agreed, show the modal
    $("#gdpr-modal").modal("show");
  }

  // Add an event listener to the agree button
  gdprAgreeButton.addEventListener("click", function () {
    // Check if the checkbox is checked
    if (gdprCheck.checked) {
      // Store the user's agreement in the local storage
      localStorage.setItem("gdprAgreed", "true");
      console.log("User agreed to GDPR Policy and Google Analytics.");
      // Close the modal
      $("#gdpr-modal").modal("hide");
    } else {
      alert("Please agree to the GDPR Policy and Google Analytics policy.");
    }
  });
});
