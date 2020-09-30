/// <reference lib="webworker" />
function badFibonacci(num:number) {
  if (num <= 1) return 1;

  return badFibonacci(num - 1) + badFibonacci(num - 2);
}


function fibonacci(num, memo?) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

addEventListener('message', ({ data }:{data: number}) => {
  const response = badFibonacci(data);
  postMessage(response);
});
