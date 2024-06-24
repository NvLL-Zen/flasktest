document.addEventListener("DOMContentLoaded", () => {
    const changeStr = "HOHO I HAVE CHANGED V2"
    const chtext = document.querySelector("#chText")
    setTimeout(() => {
      chtext.innerHTML = changeStr
    }, 3000);
  });
  