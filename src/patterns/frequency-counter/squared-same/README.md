Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1,2,31], [4,1,91]) // true
same([1,2,3], [1,91]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)