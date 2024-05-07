// function copyLink() {
//     var copyText = "https://gamed.ir/articles/best-music.html";
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(copyText.value);
// }
document.getElementById("share-button").addEventListener("click", function () {
    var link = window.location.href;
    var tempInput = document.createElement("input");
    tempInput.value = link;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("لینک با موفقیت کپی شد!");
});