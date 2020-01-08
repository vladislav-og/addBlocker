chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("blocking:", details.url);
        return {cancel: true };
    },
    {urls: blockedDomains},
    ["blocking"]
);

//
// function remove(){
//     try {
//         var element = document.querySelector('mgbox');
//         console.log("FOUND");
//         element.style.opacity = "0";
//     } catch (e) {
//         console.log("ERROR")
//     }
//     setTimeout(function(){remove();},2000);
// }
// remove();