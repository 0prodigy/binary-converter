let arr = [];
function converter(num) {
  //   let arr = [];
  if (num <= 2) {
    if (num == 0) {
      arr.unshift(0);
    } else if (num == 1) {
      arr.unshift(1);
    } else if (num == 2) {
      arr.unshift(1, 0);
    }
    return;
  }
  let remainder = num % 2;
  arr.unshift(remainder);
  if (num % 2 == 0) {
    num = num / 2;
  } else {
    num = (num - 1) / 2;
  }

  converter(num);
}

// console.log(arr.join(""));
let decimal = document.getElementById("decimal");
let btn = document.getElementById("covert");
let result = document.getElementById("result");

function clicked() {
  //   console.log(decimal.innerHTML);
  //   console.log(decimal);
  decimal = parseInt(decimal.value);
  converter(decimal);
  result.value = arr.join("");
}
