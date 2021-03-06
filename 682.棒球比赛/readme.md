[682. 棒球比赛](https://leetcode-cn.com/problems/baseball-game/)

> 给定一个字符串列表，每个字符串可以是以下四种类型之一：
>
> 1. 整数（一轮的得分）：直接表示您在本轮中获得的积分数。
> 2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
> 3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
> 4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。
> 
> 每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
> 你需要返回你在所有回合中得分的总和。

算法原理：典型的栈操作

```js
var calPoints = function(ops) {
  let stack = [];
  let r = ops.forEach(item => {
    let len = stack.length;
    switch (item) {
      case "C":
        stack.pop();
        break;
      case "D":
        stack.push(stack[len - 1] * 2);
        break;
      case "+":
        stack.push(stack[len - 1] + stack[len - 2]);
        break;
      default:
        stack.push(item * 1);
    }
  });
  return stack.reduce((a, b) => a + b);
};
```