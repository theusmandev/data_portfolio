

// === Snowfall logic ===
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";

    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.fontSize = Math.random() * 6 + 2 + "px";
    snowflake.style.animationDuration = Math.random() * 5 + 10 + "s";

    document.body.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 10000);
}

let snowInterval;

function enableSnowfall() {
    if (!snowInterval) {
        snowInterval = setInterval(createSnowflake, 300);
    }
}

function disableSnowfall() {
    clearInterval(snowInterval);
    snowInterval = null;
}











// === AOS Animation ===
AOS.init({
    duration: 1000,
    once: true
});

// === Active Nav Link Highlight ===
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});
