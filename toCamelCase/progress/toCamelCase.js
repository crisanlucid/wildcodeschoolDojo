module.exports = function toCamelCase(str) {
    let str1 = toCamelWithReplace(str, ' ', '');

    return toCamelWithReplace(str1, '-', '_');
}

function toCamelWithReplace(str, seperator, replacer) {

    let words = str.split(seperator);

    for (let i = 1; i < words.length; i++) {
        console.log("first char:", words[i].charAt(0));
        console.log("rest string", words[i].slice(1));

        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

        console.log("word:", words[i])
    }
    console.log("list words", words);
    let strNew = words.join(replacer);

    return strNew;
}