// Generation	M	                  F
// -3	        great grandfather	 great grandmother
// -2	        grandfather	       grandmother
// -1	        father	           mother
//  0	        me!	               me!
//  1	        son	               daughter
//  2	        grandson	         granddaughter
//  3	        great grandson	   great granddaughter

// create an object to represent the data
const generationInfo = [{
    "Generation" : "-3",
    "M" : "great grandfather",
    "F" : "great grandmother",
    },
    {
        "Generation" : "-2",
        "M" : "grandfater",
        "F" : "grandmother",
    },
    {
        "Generation" : "-1",
        "M" : "father",
        "F" : "mother",
    }
  ]
console.log(generationInfo[0].Generation)
console.log(generationInfo[0].Generation)



function generationCurse(x){
    let str = x.toString();
    //x is a number representing the generation
    //y represents the sex
    //y is equal to m or f

    //function should return who will recieve the generational curse based on the table 
    
    // Create a condition to handle function parameters
    let generation = generationInfo.filter(generation => generationInfo.Generation === str);

    if (str === "-3"){
        console.log(generation);
    }
  }
console.log(generationCurse(-3))