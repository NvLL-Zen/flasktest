document.addEventListener("DOMContentLoaded", () => {
    const changeStr = "HOHO I HAVE CHANGED"
    const chtext = document.querySelector("#chText")
    setTimeout(() => {
      chtext.innerHTML = changeStr
    }, 3000);
  });
  