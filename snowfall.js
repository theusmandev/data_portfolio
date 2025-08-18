// Create snowflake
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄"; // snow symbol

  // Random position
  snowflake.style.left = Math.random() * window.innerWidth + "px";

  // Random size
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

  // Random animation duration
  snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";

  document.body.appendChild(snowflake);

  // Remove after animation
  setTimeout(() => {
    snowflake.remove();
  }, 10000);
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
