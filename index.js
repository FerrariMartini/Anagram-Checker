const str1 = "Sapiens";
const str11 = "Snepisa";
const str2 = "dad";
const str21 = "bad";
const srt3 = "dabb";
const srt31 = "badd";

const isWordLenghtUnmatched = (word1, word2) => {
  return word1.length !== word2.length;
};

const splitWord = (word) => {
  let lettersObj = {};
  for (letter of word) {
    lettersObj[letter] = (lettersObj[letter] || 0) + 1;
  }
  return lettersObj;
};

const isAnagram = (word1, word2) => {
  if (isWordLenghtUnmatched(word1, word2)) {
    return false;
  }

  let letters1 = splitWord(word1.toLowerCase());
  let letters2 = splitWord(word2.toLowerCase());

  for (l in letters1) {
    if (letters1[l] !== letters2[l]) {
      return false;
    }
  }
  return true;
};

console.log(
  `\nQ1: Is "${str1}" and "${str11}" an anagram? \nA:`,
  isAnagram(str1, str11)
);
console.log(
  `\nQ2: Is "${str2}" and "${str21}" an anagram? \nA:`,
  isAnagram(str2, str21)
);
console.log(
  `\nQ3: Is "${srt3}" and "${srt31}" an anagram? \nA:`,
  isAnagram(srt3, srt31)
);
