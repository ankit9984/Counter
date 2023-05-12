const input = document.getElementById('input');
const wordCount = document.getElementById('words-count');
const charCount = document.getElementById('char-count');
const spaceCount = document.getElementById('space-count');

function countWords(text){
    let count = 0;
    let words = text.trim().split(' ');
    for(let i=0; i<words.length; i++){
        const word = words[i];
        if(word !== ' '){
            count++;
        }
    }
    if(text.trim().length === 0){
        return 0;
    }
    return count;
}

function countChar(text){
    let count = 0;
    for(let i=0; i<text.length; i++){
       if(text[i] !== ' '){
        count++;
       }
    }
    return count;
}

function countSpaces(text){
    let count = 0;
    for(let i=0; i<text.length; i++){
        if(text.charAt(i) === ' '){
            count++;
        }
    }
    return count;
}

input.addEventListener('input',() =>{
    const text = input.value;
    const word = countWords(text);
    const char = countChar(text);
    const spaces = countSpaces(text);
    wordCount.innerText = word;
    charCount.innerText = char;
    spaceCount.innerText = spaces;
})