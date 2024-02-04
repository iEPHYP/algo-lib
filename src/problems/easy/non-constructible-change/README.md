# Non-Constructible Change

## [Link](https://abheist.com/algorithms/5-non-constructible-change)

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

Sample Input
coins = [5, 7, 1, 1, 2, 3, 22]
Sample Output
20

## Solution

1. First of all we need to sort the array, cuz we are looking for the minimum one.
2. Then let's visualize it.
3. We need to store the previous constructible changes from 1 to maximum one, so it means, we can store only the maximum one and keep its meaning from 1 to max one.
4. Then we need to iterate over the sorted coins in ascending order.
5. The nextLargerCoin should be more than the previous maximum change + 1, to be able to detect minimum non-constructible change.
6. Because once we know that we can create changes from 1 to the previous max change, we can use those previous changes to see which the next larger coin will break that increasing sequence of incremental changes.
7. The largest change we can create with the next largest coin is largestChangeWithNextCoin = nextLargestCoin + previousMaxChange;
8. Then we need to construct missing changes between previousMaxChange + 1 till largestChangeWithNextCoin - 1.
9. To know that we can always use the nextLargestCoin in a change, hence, we need to substruct nextLargestCoin from our range. Which is the range between
   previousMaxChange + 1 - nextLargestCoin till
   largestChangeWithNextCoin - 1 - nextLargestCoin
   which can be simplified to
   previousMaxChange + 1 - nextLargestCoin till
   previousMaxChange
   Hence, we have previous range we can use is 1 till previousMaxChange. We satisfy second range edge, hence, we need to consider the first range edge which is
   previousMaxChange + 1 - nextLargestCoin > 1.
   Which can be simplified to
   previousMaxChange > nextLargestCoin
   So this the condition in which we have non-breaking sequential changes.
   So to make it break we need to have nextLargestCoin to be nextLargestCoin + 1. which will make the condition we need to become
   previousMaxChange > nextLargestCoin + 1, which is the same as
   previousMaxChange + 1 > nextLargestCoin
10. So once you find that nextCoin, just return previousMaxChange + 1
