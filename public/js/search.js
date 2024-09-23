
  document.addEventListener("DOMContentLoaded", function () {
    // Search Functionality
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("navbar-search-input");

    searchForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      let query = searchInput.value.toLowerCase().trim();
      let listings = document.querySelectorAll(".listing-item");

      listings.forEach((listing) => {
        let searchData = listing.getAttribute("data-search");
        if (searchData.includes(query)) {
          listing.classList.remove("hidden");
        } else {
          listing.classList.add("hidden");
        }
      });
    });
  });

