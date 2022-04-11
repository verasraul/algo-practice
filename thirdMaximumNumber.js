// Given an integer array nums, return the third distinct maximum number in this array. 
// If the third maximum does not exist, return the maximum number.

function thirdMax(nums) {
    let maxNum = Math.max(...nums)
    console.log(maxNum);

    if (nums[2] === maxNum){
        console.log(nums[2])
    }else{
        return null;
    }
    // console.log(nums[2])
    // console.log(Math.max(...nums))
};

let newArray = [1, 5, 2];

thirdMax(newArray);