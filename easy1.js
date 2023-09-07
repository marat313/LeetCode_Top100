/*========  TOP 100 LIKED  ========*/

//? 1) Учитывая отсортированный массив различных целых чисел и целевое значение, верните индекс, если цель найдена. Если нет, верните индекс там, где он был бы, если бы он был вставлен по порядку.

let nums = [1,2,3,4,5,6,7,8]

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    if (target < nums[0]) {
        return 0
    } else if (target > nums[end]) {
        return end + 1
    }
    while(start<= end){
        let mid = Math.floor((start+end)/2)
        if(target < nums[mid]){
            end = mid-1
        }else if(target>nums[mid]){
            start = mid + 1;
        }else{
            return mid
        }
    }
    return start
};