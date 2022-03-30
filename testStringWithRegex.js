

function testStringWithRegex(str){

    let expression = str.match(/mark/);

        return expression
}

console.log(testStringWithRegex(`my name is mark`));