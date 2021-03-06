var restoreIpAddresses = function (s) {
  let res = []
  // 定义递归函数，执行相同的操作
  let search = (sub, cur = []) => {
    // 边界条件
    if (cur.length === 4 && cur.join("") === s) {
      res.push(cur.join("."))
    } else if (cur.length < 4) {   // 防止超过4位仍未匹配则会无限递归下去导致超时
      // 截取前 1~3 位字符
      // 最多截取 3 位，若子串长度不足 3 位，则全部截取子串
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        tmp = sub.substr(0, i + 1)
        if (tmp < 256) {
          if (tmp.length > 1 && tmp.startsWith("0")) {
            // 截取两位以上须过滤掉 00 01 000 003 025 这种无效值
          } else {
            // 保存当前区段值，递归截取下一个区段值
            search(sub.substr(i + 1), cur.concat([tmp]))
          }
        }
      }
    }
  }
  // 保存每个区段值的数组 cur 初始为空 
  search(s)
  return res
};