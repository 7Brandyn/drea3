const interval = setInterval(() => {
    const viewer = document.querySelector('spline-viewer');
    if (viewer && viewer.shadowRoot) {
        const logo = viewer.shadowRoot.querySelector('#logo');
        if (logo) {
            logo.remove(); // 💥 remove the logo element entirely
            console.log("nothing to see here");
            clearInterval(interval);
        }
    }
}, 500);

function openNav() {
  document.getElementById("myNav").style.width = "100vw";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0vw";
}

  const header = document.querySelector('header');
  let canExpand = false; // Track if header is allowed to expand

  // Function to set initial state based on window size
  function initializeHeader() {
    if (window.innerWidth >= 1300) {
      // Over 1300px: start with 100% width
      header.style.width = '100%';
    } else {
      // Below 1300px: start with 0%
      header.style.width = '0%';
    }
  }

  // Function to expand header when openNav is clicked (only if initially below 1300px)
  function openNav() {
    // Allow expansion only if initial window was below 1300px
    if (window.innerWidth < 1300) {
      header.style.width = '100%';
    }
  }

  // Optional: Revert back to initial state if window is resized
  window.addEventListener('resize', () => {
    // Re-initialize only if the user hasn't expanded it
    if (window.innerWidth >= 1300) {
      header.style.width = '100%'; // Always full width over 1300px
    } else {
      // Keep it at 0% unless openNav has been clicked
      // So do nothing here if you want to keep it at 0%
      // or uncomment below to reset when shrinking back
      // header.style.width = '0%';
    }
  });

  // Initialize on page load
  window.addEventListener('load', initializeHeader);