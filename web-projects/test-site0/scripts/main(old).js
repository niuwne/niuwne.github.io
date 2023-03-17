const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myVariable;
myVariable = 'Bob';
/*
挟まれているすべてがコメントです。
*/
// これはコメントです
let iceCream = 'チョコレート';
if (iceCream === 'チョコレート') {
  alert('やった、チョコレートアイス大好き！');
} else {
  alert('あれれ、でもチョコレートは私のお気に入り......');
}
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }
multiply(4, 7);
document.querySelector('html').addEventListener('click', function () {
    alert('痛っ! つつかないで!');
  });
  