// === Dark/Light Mode Toggle ===
const modeSwitch = document.getElementById('mode-switch');
const body = document.body;

if (modeSwitch) {
    // Load saved mode
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark');
        modeSwitch.checked = true;
        if (typeof enableSnowfall === "function") enableSnowfall();
    }

    modeSwitch.addEventListener('change', () => {
        if (modeSwitch.checked) {
            body.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
            if (typeof enableSnowfall === "function") enableSnowfall();
        } else {
            body.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
            if (typeof disableSnowfall === "function") disableSnowfall();
        }
    });
}
