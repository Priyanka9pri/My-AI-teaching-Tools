document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const feedback = document.getElementById("feedback").value;
  alert(`Thanks for your feedback, ${name}!\n\nYour input: ${feedback}`);
  this.reset();
});
