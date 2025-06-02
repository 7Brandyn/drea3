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

