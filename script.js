document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".bookmark a");

    // Add Click Animation
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            this.style.transform = "scale(0.9)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
                window.location.href = this.href; // Redirect after animation
            }, 200);
        });
    });

    // Random Gradient Background
    function getRandomColor() {
        const colors = ["#0f2027", "#203a43", "#2c5364", "#ff6a00", "#ee0979"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    document.body.style.background = `linear-gradient(135deg, ${getRandomColor()}, ${getRandomColor()})`;
});
