document.addEventListener('DOMContentLoaded', function() {
  // Filter projects functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      projectItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Masonry grid layout adjustment
  function adjustMasonryGrid() {
    const masonryGrid = document.querySelector('.masonry-grid');
    if (window.innerWidth >= 768) {
      masonryGrid.style.gridAutoRows = '200px';
    } else {
      masonryGrid.style.gridAutoRows = 'auto';
    }
  }
  
  window.addEventListener('resize', adjustMasonryGrid);
  adjustMasonryGrid();
});