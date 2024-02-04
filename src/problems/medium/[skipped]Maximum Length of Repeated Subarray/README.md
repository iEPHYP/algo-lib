https://leetcode.com/problems/maximum-length-of-repeated-subarray/

Maximum Length of Repeated Subarray
Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

Example 1:

Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].

Example 2:

Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5
Explanation: The repeated subarray with maximum length is [0,0,0,0,0].
 
Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 100

[1,2,3,2,1]
 ,
 ,
 ,
 ,
 
	 	1|2|3|2|1 A
4 | 0 0 0 0 0
7 | 0 0 0 0 0
3 | 0 0 0 0 0
2 | 0 0 0 0 0
1 | 0 0 0 0 1
B

  1|3|2 A
3|2 2 1
2|1 1 1
1|0 0 0
B

dp[2][2] = A[2] === B[2]
dp[2][1] = dp[2][2] + A[2] === B[1]
dp[2][0] = dp[2][1] + A[2] === B[0]
dp[1][2] = dp[2][2] + A[1] === B[2]
dp[1][1] = dp[2][2] + 


  1|3 A
3|2 2
2|1 1
B

d[1][1] = A[1] == B[1]
d[1][0] = A[1] == B[1] + A[1] == B[0] = d[1][1] + A[1] == B[0]
d[0][1] = A[1] == B[1] + A[0] == B[1] = d[1][1] + A[0] == B[1]
d[0][0] = 

hasSubarray(array1, array2)

dp[i][j] = dp[i + 1][j + 1] + A[i] === A[j]

dp[2][2] = A[2] === B[2]
dp[2][1] = A[2] === B[2] || A[2] === B[1]
dp[2][0] = A[2] === B[2] || A[2] === B[1] || A[2] === B[0]

dp[1][2] = A[2] === B[2] || A[1] === B[2]
dp[1][1] = 
3,2 & 2,1

dp[4][j] = dp[4, j - 1] + A[4] === B[j]
dp[3][j] = dp[3, j - 1] + A[3] === B[j]


dp[i][j] >= dp[i][j - 1]
dp[i][j] >= dp[i - 1][j]
dp[i][j] = d[i][j - 1] + 1 || 0

		0|0|0|0|0
0 | 5 4 3 2 1
0 | 4 4 3 2 1
0 | 3 3 3 2 1
0 | 2 2 2 2 1
0 | 1 1 1 1 1
