

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let word = (s.replace(/[^a-z0-9+]+/gi, "").toLowerCase()).split("");
    let word2 = "";

    for (let i = word.length -1; i>= 0; i--){
        word2 += word[i]
    }
    let word1 = word.join(",").replace(/(,)/g, "")
    console.log(word.join(",").replace(/(,)/g,""))
    console.log(word2);
    return (word2 == word1) ? true : false
};
