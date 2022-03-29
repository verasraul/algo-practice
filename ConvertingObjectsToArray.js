
const myObject = {
    FIRST: 'Will',
    LAST: 'Smith',
    NICKNAME: 'I AM LEGEND'
}


function ConvertObjectToArray (data){
    
    const convertedtKeyPairs = Object.entries(data)

    return  convertedtKeyPairs;

}

console.log(ConvertObjectToArray(myObject))