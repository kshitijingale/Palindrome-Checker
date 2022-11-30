const ansHead = document.querySelector('.answer');
function checkPalindrome() {
    const inputTag = document.querySelector('.inputText');
    let inputValue = inputTag.value;
    let firstIndex = 0;
    let lastIndex = inputValue.length - 1;
    inputTag.value = "";

    while (firstIndex < lastIndex) {
        if (inputValue[firstIndex] == inputValue[lastIndex]) {
            firstIndex++;
            lastIndex--;
        } else {
            ansHead.innerText = `${inputValue} is not a Palindrome`;
            return;
        }
    }

    ansHead.innerText = `${inputValue} is a Palindrome`;
    return;
}