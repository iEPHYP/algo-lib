export const findLength = function (nums1: number[], nums2: number[]): number {
  let res = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        let k = 1;
        while (i + k < nums1.length && j + k < nums2.length && nums1[i + k] === nums2[j + k]) k++;
        res = Math.max(res, k);
      }
    }
  }

  return res;
};
