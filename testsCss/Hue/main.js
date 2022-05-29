// Taking the value of hue
var hueColor = document.getElementById("hueColor");

// Getting a CSS Variable's Value
getComputedStyle(document.documentElement).getPropertyValue("--hue-color");

// Setting a CSS Variable's Value
hueColor.addEventListener("input", function () {
  document.documentElement.style.setProperty("--hue-color", hueColor.value);
  console.log(hueColor.value);
});