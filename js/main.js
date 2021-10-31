// Function for fixing runts:
// https://github.com/bbtools-ps/javascript-test-projects/blob/main/fix_runts.js


// Function that fixes runts from the string (paragraph). It replaces the last whitespace character with the &nbsp; (non-breaking space character)
function fixRunts(str) {
    // If string starts with < (tag) then just return it
    if (str[0] !== "<") {
        return str.replace(/\s+(\S+)$/gim, `&nbsp;$1`);
    } else {
        return str;
    }
}
(function () {
    // Fix runts from all paragraphs
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = fixRunts(paragraphs[i].innerHTML);
    }
    // Fix runts from all list items
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].innerHTML = fixRunts(listItems[i].innerHTML);
    }

})();