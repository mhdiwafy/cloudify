// JavaScript for Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Get current time in WIB (UTC+7)
function getWIBDate() {
    const date = new Date();
    const utcOffset = date.getTimezoneOffset() * 60000; // UTC offset in milliseconds
    const wibOffset = 7 * 60 * 60000; // UTC+7 offset in milliseconds
    return new Date(date.getTime() + utcOffset + wibOffset);
  }
  
  // Switch theme based on time
  function switchThemeAutomatically() {
    const body = document.body;
    const currentTime = getWIBDate();
    const currentHour = currentTime.getHours();
  
    console.log(`Current WIB Hour: ${currentHour}`); // Debugging log for current hour
  
    if (currentHour >= 6 && currentHour < 18) {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    }
  
    // Debugging logs to check the applied theme
    if (body.classList.contains('light-mode')) {
      console.log("Switched to Light Mode");
    } else if (body.classList.contains('dark-mode')) {
      console.log("Switched to Dark Mode");
    }
  }
  
  // Run the theme switcher
  switchThemeAutomatically();
  
  // Optional: Rerun theme switching periodically (every hour)
  setInterval(switchThemeAutomatically, 3600000); // 1 hour = 3600000 ms
  