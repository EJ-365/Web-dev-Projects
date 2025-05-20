/* for the hex input color  and the button to generate the hex-code */
const hexCode = document.querySelector('.hex');
const btn = document.querySelector('.generate');

/* the copy button */
const copy = document.querySelector('.copy');

/* function to generate color */
const generateColor = function() {
   const randomColor = Math.random().toString(16).slice(2,8);
   hexCode.value = "#"+randomColor; // added the # symbol to the random color
   // apply the color to the body 
   document.body.style.backgroundColor = hexCode.value;
}

/* function to copy the color */

const copyColor = function() {
    hexCode.select();  // select/highlight the text inside the element
    // hexCode.setSelectionRange(0,1000); // select the text starting from index 0 - 1000 (standard way of doing it )
    navigator.clipboard.writeText(hexCode.value);
    alert('Copied');
};

btn.addEventListener('click', generateColor)
copy.addEventListener('click', copyColor);

/* select(); method select something | but i use this one cuz we need to select everything 
setSelectionRange(0,3); method select from a range starting from startIndex and endIndex 
document.execCommand('copy'); copy a text to the clipboard it has includes param, such as bold,paste etc but it's deprecated now, we use this:
 navigator.clipboard.writeText(hexCode.value); // for copying into the clipboard
*/