$(document).ready(function() {
  // When a skill title is clicked
  $('.skill h3').click(function() {
    // Toggle the visibility of the paragraph below the clicked title
    $(this).next('p').slideToggle('slow');
  });
});
