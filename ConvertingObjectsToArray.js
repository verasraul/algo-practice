
const myObject = {
    FIRST: 'Will',
    LAST: 'Smith',
    NICKNAME: 'I AM LEGEND'
}

const myEmptyObject = {

}

function ConvertObjectToArray (data){
    
    const convertedtKeyPairs = Object.entries(data)

    return  convertedtKeyPairs;

}

console.log(ConvertObjectToArray(myObject))
console.log(ConvertObjectToArray(myEmptyObject))