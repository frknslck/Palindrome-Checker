const inputString = document.querySelector(".container__input");
const add = document.querySelector(".container__add");
const remove = document.querySelector(".container__reset");
const ul = document.querySelector(".container__ul");
const li = document.createElement('li');

function palindrome(inputString) {
    const removeChar = inputString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    const reverseInputString = removeChar.split('').reverse().join('');
    if (removeChar === reverseInputString){
        ul.innerHTML += `<li><span>${inputString}</span> is a Palindrome</li>`
    }else{
        ul.innerHTML += `<li><span>${inputString}</span> is not a Palindrome</li>`
    }
}

document.querySelector(".container__add").addEventListener("click", () => {
    palindrome(inputString.value)
    inputString.value = "";
    inputString.focus();
});

inputString.addEventListener("keydown", (enter) => {
    if (enter.code === "Enter") {
        palindrome(inputString.value);
        inputString.value = "";
        inputString.focus();
    }
});

remove.addEventListener("click", () =>{
    let lastLi = ul.firstElementChild;
    ul.removeChild(lastLi);
});


