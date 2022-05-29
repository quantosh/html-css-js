// Taking the value of hue
var hueColor = document.getElementById("hueColor");
var hueSat = document.getElementById("hueSat");
var hueLight = document.getElementById("hueLight");
// document.getElementById("sample").style.color="blue";

// Getting a CSS Variable's Value
getComputedStyle(document.documentElement).getPropertyValue("--hue-color");
getComputedStyle(document.documentElement).getPropertyValue("--hue-saturation");
getComputedStyle(document.documentElement).getPropertyValue("--hue-lightness");

// Setting a CSS Variable's Value
hueColor.addEventListener("mouseup", function () {
  document.documentElement.style.setProperty("--hue-color", hueColor.value);
  console.log(hueColor.value);
});

hueSat.addEventListener("mouseup", function () {
  document.documentElement.style.setProperty("--hue-saturation", hueSat.value);
  console.log(hueSat.value);
});

hueLight.addEventListener("mouseup", function () {
    document.documentElement.style.setProperty("--hue-lightness", hueLight.value);
    console.log(hueLight.value);
  });


