module.exports = function toCamelCase(str) {
    let str1 = toCamelCaseWithDelimiter(str, ' ', '');
    
    return toCamelCaseWithDelimiter(str1, '-', '_');

}

function toCamelCaseWithDelimiter(str, separator, replace){

    return str
        .split(separator)
        .map(function(elem, index) {
            return (index > 0) ? elem[0].toUpperCase() + elem.slice(1) : elem;
        })
        .join(replace);
}
