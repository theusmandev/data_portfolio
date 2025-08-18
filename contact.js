


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const notification = document.getElementById("notification");

  if (!form || !submitBtn || !notification) {
    console.error("Form, submit button, or notification div not found");
    return;
  }

  // Function to show notification
  function showNotification(message, isError = false) {
    notification.textContent = message;
    notification.style.background = isError ? "#f44336" : "#4caf50";
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showNotification("❌ Please fill out all fields.", true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification("❌ Please enter a valid email address.", true);
      return;
    }

    const userId = "USR-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    const deviceInfo = navigator.userAgent;

    const data = {
      userId,
      name,
      email,
      message,
      device: deviceInfo
    };

    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwEGqicHW0OnHWKy9wm04QsdtLRdXHMBzC7vRCLPfQxB_KR_SONNwk2VBuJPYovsljn/exec";

    try {
      console.log("Sending POST request to:", WEB_APP_URL);
      console.log("Payload:", JSON.stringify(data));
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      await fetch(WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors"
      });

      showNotification("✅ Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error:", error.message);
      showNotification("❌ Failed to send message. Please try again later.", true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
});
