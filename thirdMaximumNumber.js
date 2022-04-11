// Given an integer array nums, return the third distinct maximum number in this array. 
// If the third maximum does not exist, return the maximum number.

function thirdMax(nums) {
    let max, max2, max3; 

    for(let i=0; i < nums.length; i++){
        if(nums[i] > max || max === undefined){
            max3 = max2;
            max2 = max;
            max =nums[i];
        } else if ((nums[i] < max && nums[i] > max2) || (max2 === undefined && max !== nums[i])){
            max3 = max2;
            max2 = nums[i];
        } else if ((nums[i] < max2 && nums[i] > max3) || (max3 === undefined && max !== nums[i] && max2 !== nums[i])){
            max3 = nums[i];
        }
    }
    return max3 === undefined ? max : max3;

};

let newArray = [1, 4, 3, 5];

console.log(thirdMax(newArray));
