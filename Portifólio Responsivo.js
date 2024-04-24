

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector("#toggle");
    let isLight = true;
  
    function modeSwitch() {
      isLight = !isLight;
      document.body.style.backgroundColor = isLight ? "var(--font-color)" : "var(--bg-color)";
      document.body.style.color = isLight ? "var(--bg-color)" : "var(--font-color)";
      toggle.innerText = isLight ? "🌞" : "🌒";
    }
  
    toggle.addEventListener("click", modeSwitch);
  });
