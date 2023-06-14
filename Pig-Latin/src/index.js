function translate(word) {

    word = word.toLowerCase();

if("aeiou".includes(word[0])) {
    return word + "way";
} else if ("aeiou".includes(word[index]) === false) {
    let consonants = "";
    let index = 0;
    consonants += word[index];
    index++
}

const translatedWord = word.slice(index) + consonants + "ay";
return translatedWord;
}

module.exports{ translate };
