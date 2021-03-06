var hasGroupsSizeX = function (deck) {
  const map = {}
  // 统计每个数出现的次数
  for (let num of deck) {
    map[num] = ~~(map[num]) + 1     // 第一次 ~~undefined = 0 然后+1
  }
  const dst = Object.values(map)
  // 最小出现的次数
  const min = Math.min(...dst)
  // 每组都有 X>=2 张牌
  if (min >= 2) {
    // 查找最大公约数，从整数2开始迭代直到最小值
    for (let i = 2; i <= min; i++) {
      // 如果数组中的每个数都能被整除，此时的 i 就是最大公约数
      if (dst.every(val => val % i === 0)) {
        return true
      }
    }
  }
  return false
};