
const ele = document.getElementById("btn")
ele.addEventListener("click", () => {
    chrome.runtime.sendMessage({ time: "10" }, function (response) {
        console.log(response);
    });
});