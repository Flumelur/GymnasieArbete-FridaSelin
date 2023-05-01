
/*
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
*/

/*

function generatePaginationLinks(totalItems, itemsPerPage) {
    // Calculate the total number of pages
    var totalPages = Math.ceil(totalItems / itemsPerPage);
  
    // Build the HTML for the pagination links
    var paginationLinksHtml = '';
    for (var i = 1; i <= totalPages; i++) {
      paginationLinksHtml += '<a href="#" data-page="' + i + '">' + i + '</a>';
    }
  
    // Insert the pagination links into the DOM
    document.getElementById('pagination-links').innerHTML = paginationLinksHtml;
  }

  var totalItems = 100;
var itemsPerPage = 10;

generatePaginationLinks(totalItems, itemsPerPage);

var currentPage = 1;

document.getElementById('pagination-links').addEventListener('click', function(event) {
  event.preventDefault();

  // Get the selected page number from the link's data-page attribute
  var pageNumber = parseInt(event.target.getAttribute('data-page'));

  // Update the current page number
  currentPage = pageNumber;

  // Calculate the start and end indexes for the items on the selected page
  var startIndex = (currentPage - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;

  // Update the content on the page to display the items for the selected page
  // For example, if you have a list of cards, you can use slice() to get the
  // items for the current page and update the innerHTML of the container element
  var containerElement = document.getElementById('card-container');
  var itemsToDisplay = cardItems.slice(startIndex, endIndex);
  containerElement.innerHTML = '';
  for (var i = 0; i < itemsToDisplay.length; i++) {
    containerElement.innerHTML += '<div class="card">' + itemsToDisplay[i] + '</div>';
  }
});
*/
/*
// Get all the page number links
const pageLinks = document.querySelectorAll('.page-number');

// Loop through each link and add a click event listener
pageLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the page number from the link's text
    const pageNumber = parseInt(link.textContent);

    // Do something with the page number, like load new content
    console.log(Loading page ${pageNumber});
  });
});
*/








