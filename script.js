

// === Snowfall logic ===
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";

    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
    snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.body.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 10000);
}

let snowInterval;

function enableSnowfall() {
    if (!snowInterval) {
        snowInterval = setInterval(createSnowflake, 200);
    }
}

function disableSnowfall() {
    clearInterval(snowInterval);
    snowInterval = null;
}

// === Dark/Light Mode Toggle ===
const modeSwitch = document.getElementById('mode-switch');
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark');
    modeSwitch.checked = true;
    enableSnowfall(); // Dark mode ke sath snowfall bhi
}

modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        body.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
        enableSnowfall();
    } else {
        body.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
        disableSnowfall();
    }
});




