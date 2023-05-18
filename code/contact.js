$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});


// Get the button and dropdown content
var button = document.querySelector(".dropbtn");
var dropdownContent = document.querySelector(".dropdown-content");

// When the button is clicked, toggle the dropdown content
button.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches(".dropbtn")) {
    dropdownContent.classList.remove("show");
  }
});
