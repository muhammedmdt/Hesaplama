document.getElementById("custom-slider").addEventListener("input", function (event) {
    let value = event.target.value;
    document.getElementById("current-value").innerText = value;
    document.getElementById("current-value").classList.add("active");
    document.getElementById("current-value").style.left = '${value/2}%';
});