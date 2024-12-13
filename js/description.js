document.addEventListener('DOMContentLoaded', function() {
  const descriptions = document.querySelectorAll('.description');
  
  descriptions.forEach(function(description) {
    description.addEventListener('mouseover', function() {
      description.classList.add('highlighted');
    });

    description.addEventListener('mouseout', function() {
      description.classList.remove('highlighted');
    });
  });
});
