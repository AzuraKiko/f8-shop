// Khai bao bien
/* Noi dung comment

iouiououio

*/

/**
 * khai bao bien
 * khai bao...
 */
var fullName ='Diệp Tri Hạ';
var age = 25;

// Goi ham thong bao
/*
alert(fullName);
alert(age);
*/
/*1 số hàm built-in
1. alert
2. console
3. promt
4. setTimeout
5. setInterval
*/

// console.log ('Fighting');
// var fullName = 'Diệp Tri Hạ'
// console.warn(fullName);
// console.error(fullName);
// confirm('Xác nhận quyền truy cập');
// prompt('Xác nhận tuổi');

// setTimeout(function() {
//     alert(fullName)
// }, 2000);

// setInterval(function() {
//   console.log(fullName + Math.random())  
// }, 1000);

/**
 Giới thiệu toán tử trong Javascript
 1. Toán tử  số học - Arithmetic
 2. Toán tử gán - Assignment
 3. Toán tử so sánh - Comparison
 4. Toán tử logic - Logical
 */
// var a = 1+2;
// console.log(a)

// var a = 1;
// var b = 2;
// // if (a < b) {
// //   alert('Dung')
// // }

// if (a > 0 && b > 0) {alert ('a & b lớn hơn 0')}

/** 1. Toán tử số học
 + Cộng
 - Trừ
 * Nhân
 ** Lũy thừa
 / Chia
 % Chia lấy số dư
 ++ Tăng 1 giá trị số
 -- Giảm 1 giá trị số
 */

 var a = 8;
 a++;
 a--;
 a++;
 a++;
 console.log(a);

// Prefix & Postfix (Tiền tố và Hậu tố )
 var a = 6;
// Việc 1 : +1 cho a, a = a + 1 => a = 7
// Việc 2 : Trả về a sau khi được + 1

// var output = ++a;
// console.log('output :', output);

var output = a--;

// Việc 1 : 'a copy', 'a copy' = 6
// Việc 2 : + 1 cho a, a = a + 1 => a = 7
// Việc 3 : trả về 'a copy'
console.log('output:', output);

console.log('a : ', a);

var number = 6;
var output = ++number * 2 + number-- * 2;
console.log('output :', output)

/**2. Toán tử gán
 toán tử     vd       Tương đương
   =        x = y      x = y
   +=       x += y     x = x + y
   -=       x -= y     x = x - y
   *=       x *= y     x = x * y
   /=       x /= y     x = x / y
  **=       x **= y    x = x ** y

  */

  var a = 2;
  // a = a + 1;
  // a += 2;
  // a *= 3;
  a **= 2;

  console.log(a);

  /**3. Toán tử chuỗi - String operator
   */
  var firstName = 'Tri Hạ';
  var lastName = 'Diệp Mục';

  console.log(firstName);
  console.log(lastName);
console.log(lastName + ' ' + firstName);

var name = 'Diệp';
// name += ' Tri Hạ';
console.log(name);
console.log(name + ' Tri Hạ');

/**  4. Toán tử so sánh
 ==
 !=
 >
 <
 >=
 <=
 
 */
// var a = 1;
// var b = 2;

// if (a != b) {
//   console.log('Dieu kien dung!');
// } else { 
//   console.log('Dieu kien sai!');
// }

var a = 'Diep Tri Hạ';
var b = 'Diep Tri hạ';
if (a == b) {
  console.log('Dieu kien dung!');
} else { 
  console.log('Dieu kien sai!');
}

/**
 Kiểu dữ liệu Boolean
 */
// var isSuccess = true;
// console.log(isSuccess);

 var a = 1;
 var b = 2;
 var isSuccess = a > b;
 console.log(isSuccess);
/**
Câu lệnh điều kiện If - else
 */
if (true) {
  console.log('Yes');
} else {
  console.log('No');
}

var isSuccess = 1 > 2;

if (isSuccess) {
  console.log('Yes');
} else {
  console.log('No');
}

var fullName = 'Tri Hạ';

if (fullName) {
  console.log('Yes');
} else {
  console.log('No');
}

/**
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 => convert Boolean là false, còn lại là true
 */

 var fullName = 0;

if (fullName) {
  console.log('Yes');
} else {
  console.log('No');
}

var fullName = undefined;

if (fullName) {
  console.log('Yes');
} else {
  console.log('No');
}
// TOÁN TỬ SO SÁNH P2
// ===
// !==
var a = 1;
var b = '1';

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);



/**  5. Toán tử logical 
 * && - And
 * || - Or
 * ! - Not
*/
var a = 1;
var b = 2 ;
var c = 3;

if (a > 0 && b < 0 || c > 0) {
console.log('YES');
}

if (!(a < 0)) {
  console.log('YES');
}

/** Kiểu dữ liệu trong Javascript
 1. Dữ liệu nguyên thủy - Primitive Data
 * Number  var a = 1;
 * String     var fullName = 'Tri Hạ'; var fullName = "Tri Hạ"
 * Boolean     var isSuccess = true;
 * Underfined   var age;
 * Null    var isNull = null;
 * Symbol      var id = Symbol('id'); // unique
 2. Dữ liệu phức tạp - Complex Data
 * Function
 * Object
 CPU xử lý, RAM lưu dữ liệu trong quá trình phần mềm thực thi ( Shift + Esc)
 */

//  var fullName = 'Diệp \'Tri Hạ';
 var fullName = 'Tri "Hạ';
 console.log(fullName);

 var gender;
 console.log(gender);

 var isNull = null;
 console.log(isNull);

var id = Symbol('id');
var id2 = Symbol('id');
console.log(id);
console.log(id === id2);

// Function
// var myFunction = function () {
//   alert('Hoa Vũ Đường');
// }

// myFunction();

// Object types
var myObject = {
  name : 'Linh Nhất',
  age : 18 ,
  address : 'China',
  myFunction : function () {
    alert('Hoa Vũ Đường');
  }
};
console.log('myObject', myObject);

var myArray = [
  'Javascript',
  'PHP',
  'Ruby',
];
console.log('myArray', myArray);

console.log(typeof a);

console.log(typeof fullName);

console.log(typeof isSuccess);

console.log(typeof gender);

console.log(typeof isNull);

console.log(typeof id);

console.log(typeof myFunction);

console.log(typeof myObject);
console.log(typeof myArray);

// Toán tử logical và câu lệnh điều kiện If
var a = 1;
var b = 2;

// var result = a < b;
// console.log('result', result);

// if (result) {
//   console.log('A < B');
// } else {
//   console.log('A >= B');
// }

var result = a < b && a < 0 ;
console.log('result', result);

if (result) {
  console.log('A < B');
} else {
  console.log('A >= B');
}

var result = 'A' && 'B' && 'C';
console.log('result', result);

if (result) {
  console.log('TRUE');
} else {
  console.log('FALSE');
}

var result = NaN && 'B' && 'C';
console.log('result', result);

if (result) {
  console.log('TRUE');
} else {
  console.log('FALSE');
}

var result = 'A' || 'B' || 'C' || 'D';
console.log('result', result);

// if (result) {
//   console.log('TRUE');
// } else {
//   console.log('FALSE');
// }
var result = null || 'B' || 'C' || 'D';
console.log('result', result);

var result = 'A' || 'B' || undefined || 'D';
console.log('result', result);

// Chuối trong javascript

// 1. backslash in javascript (\)
// Tạo chuỗi

var fullName = 'Tri Hạ \'Hoa Vũ Đường\'';
 console.log( fullName);

 var fullName = 'Tri Hạ \\';
 console.log( fullName);

var fullName = new String('Tri Hạ');
 console.log(typeof fullName);

// 2. Xem độ dài của chuỗi
var fullName = 'Tri Hạ \'Hoa Vũ Đường\'';
//  console.log( fullName);
 console.log(fullName.length);

var firstName = 'Vu';
var lastName = 'Thi Lam';

console.log('I love ' + firstName + ' ' + lastName);

console.log(`I love ${firstName} ${lastName}`);

// Làm việc chuỗi
var myString = 'Diệp JS Tri JS JS Hạ';

// Keyword : Javascript string methods
// 1. Length
console.log(myString.length);
// 2. Find index
console.log(myString.indexOf('D'));
console.log(myString.indexOf('ABC'));

console.log(myString.indexOf('JS', 8));

console.log(myString.lastIndexOf('JS'));

console.log(myString.search('JS'));

// 3. Cut String
var myString = 'Diệp Thi Lam';
console.log(myString.slice(4,9));
console.log(myString.slice(4));
console.log(myString.slice(0));

console.log(myString.slice(-8, -1));

// 4. Replace
var myString = 'Tô Khinh Chỉ Chỉ Nhi';
console.log(myString.replace('Khinh Chỉ', 'Tử Ngưng'));
console.log(myString.replace(/Chỉ/g, 'Ngưng'));

// 5. Convert to upper case/ lower case

var myString = 'Tần Chiêu Mặc';

console.log(myString.toLowerCase());
console.log(myString.toUpperCase());

// 6. Trim
var myString = '    Tần Mặc Hàm    ';
console.log(myString.trim().length);
console.log(myString.length);

// 8. Split
var languages = 'Javascript, Python, PHP';

console.log(languages.split(', '));

var languages = 'AnNhien';
console.log(languages.split(''));

// 9. Get a character by index
const myString2 = 'Sư Thanh Y';

console.log(myString2.charAt(1));

console.log(typeof myString2.charAt(10));

console.log(typeof myString2[10]);

console.log(myString2[4]);

// Tạo giá trị Number
var age = 18;
var PI = 3.14;

var otherNumber = new Number(9);

console.log(typeof PI);


console.log(typeof otherNumber);

var result = 20/ 'ABC';

console.log(result);

console.log(typeof result);

console.log(isNaN(result));

var result = 20/ 2;
console.log(isNaN(result));

// Làm việc với Number
// To String
// To Fixxed : Làm tròn số thập phân
// Keyword : Javascript number
var age = 18;
var PI = 3.14;

console.log(age.toString());
console.log(typeof age.toString());
console.log(age);

var myString = PI.toString();
console.log(typeof myString);

console.log(PI.toFixed());

console.log(PI.toFixed(false));


var money = 32.3487634782364;

console.log(money.toFixed(2));

// Mảng trong Javascript - Array
// 1. Tạo mảng
var languages = [
       'Javarscript',
       'PHP',
       'Ruby',
       'Dart',
       null,
       undefined,
       function() {
        
       },
       {},
       123,
];

console.log(languages);

var languages = new Array(
  'Javarscript',
  'PHP',
  'Ruby',
  'Dart',
  null,
  undefined,
  function() {
   
  },
  {},
  123,
);
console.log(languages);
console.log(typeof languages);
console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray(languages));


console.log(Array.isArray({}));

console.log(Array.isArray(new Array(1,2)));

var languages = [
  'Javarscript',
  'PHP',
  'Ruby',
  'Dart',
];
// Độ dài mảng
console.log(languages.length);
// index/ key - Lấy phần tử theo index
console.log(languages[0]);

//Làm việc với mảng
// Keyword : Javascript array methods
// 1. to String
var languages = [
  'Javascript',
  'PHP',
  'Ruby',

];
console.log(languages.toString());

console.log(typeof languages.toString());

// 2. Join : thêm vào giữa string
var languages = [
  'Javascript',
  'PHP',
  'Ruby',

];
console.log(languages.join());

console.log(languages.join(''));
console.log(languages.join(' - '));


// 3. Pop : xóa element cuối mảng và trả về đúng phần tử đã xóa

console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());
console.log(languages);

// 4. Push ( thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng )

var languages = [
  'Javascript',
  'PHP',
  'Ruby',

];
console.log(languages.push('Dart'));

console.log(languages);

// 5. Shift : xóa phần tử đầu mảng và trả ra phần tử đã xóa

var languages = [
  'Javascript',
  'PHP',
  'Ruby',

];
console.log(languages.shift());
console.log(languages.shift());
console.log(languages.shift());
console.log(typeof languages.shift());

console.log(languages);
// 6. Unshift : thêm phần tử vào đầu mảng

var languages = [
  'Javascript',
  'PHP',
  'Ruby',

];
console.log(languages.unshift('Dart', 'Java'));

console.log(languages);

// 7. Splicing : xóa/ chèn phần tử mới vào mảng
var languages = [
  'Javascript',
  'PHP',
  'Ruby',

];
// languages.splice(1, 2);
// languages.splice(1, 0, 'Dart');
// languages.splice(1, 1, 'Dart');
languages.splice(1, 2, 'Dart', 'Java');
console.log(languages);

// 8. Concat
var languages = [
  'Javascript',
  'PHP',
  'Ruby',

];
var languages2 = [
  'Dart',
  'Java',

];

console.log(languages.concat(languages2));
console.log(languages2.concat(languages));

// 9. Slicing
var languages = [
  'Javascript',
  'PHP',
  'Ruby',

];
console.log(languages.slice(1,2));
console.log(languages.slice(1));
console.log(languages.slice(1,2));
console.log(languages.slice(-2,-1));

// Hàm ( function) trong Javascript
// Hàm ( là 1 khối mã, làm 1 việc cụ thể)
// Loại hàm ( Built - in, Tự định nghĩa )
// Tính chất 
// - Ko thực thi khi định nghĩa
// - Sẽ thực thi khi được gọi
// - Có thể nhận tham số
// - Có thể trả về 1 giá trị

// 4. Tạo hàm đầu tiên
// quy tắc đặt tên hàm và tên biến : a-z A-Z 0-9 _ $

// function showDialog() {
//   alert('Diệp Tri Hạ');
// };

// showDialog();

// Tham số trong hàm - Javascript
// 1. Tham số
// function writeLog() {
//   console.log('Diệp Ẩn')
// };
// writeLog();

function writeLog(message) {
  console.log(message)
};
// writeLog('Test message');
// writeLog(123);
writeLog(['Javascript', 'Ruby', 'PHP']);
// 1 tham số
function writeLog(message) {
  console.log(typeof message)
};
writeLog('Javascript');
// nhiều tham số
function writeLog(message, message2) {
  console.log(message);
  console.log(message2);
};
writeLog('Javascript', 'PHP');

// function writeLog(message, message2) {
//   console.log(message);
//   console.log(message2);
// };
// writeLog();

function writeLog(message, message2) {
  if (message) {
      console.log(message);
  }
  
  if(message2){
     console.log(message2)
  }
};
writeLog();

// function writeLog(message, message2) {
//   if (message) {
//       console.log(message);
//   }
  
//   if(message2){
//      console.log(message2)
//   }
// };
// writeLog('Tô Trần Nhi', 'Cung Huyền Thanh');

// Arguments 
function writeLog() {
      console.log(arguments);
};
writeLog('Tô Trần Nhi', 'Cung Huyền Thanh', 'Tiêu Uyển Thanh');

function writeLog() {
  console.log(arguments);
};
writeLog();

// Giới thiệu vòng for of

// function writeLog() {
//   for (var param of arguments) {
//     console.log(param);
//   }
// };
// writeLog('Hoa Vũ Đường', 'Thập Nhất', 'Thủy Linh');

function writeLog() {
  var myString = '';
  for (var param of arguments) {
    myString += `${param} - `
  };
  console.log(myString);
};
writeLog('Hoa Vũ Đường', 'Thập Nhất', 'Thủy Linh');

// Return trong hàm
// var isConfirm = confirm('Hoa Vũ Thần');
// console.log(isConfirm);

// function cong(a, b) {
//   return a + b;
// }

// var result = cong(2, 8);
// console.log(result);

// function cong(a, b) {
//   // return a + b;
//   console.log('123');
//   alert();
// }

// var result = cong(2, 8);

// console.log(result);

// function cong(a, b) {
//   return [a, b];
// }

// var result = cong(2, 8);
// console.log(result);


// function cong(a, b) {
//   return a.toString() + b. toString();
// }

// var result = cong(2, 8);
// console.log(result);


function cong(a, b) {
  return '2' + '8';
}

var result = cong(2, 8);
console.log(result);

// Khi function đặt trùng tên ? ( function sau ghi đè function trước)
// function showMessage() {
//   console.log('Message 1');
// };

// function showMessage() {
//   console.log('Message 2');
// };
// showMessage();

// Khai báo biến trong hàm ( biến khai báo trong function thì phạm vi sd chỉ trong functiont thôi)


// function showMessage() {
//   var fullName = 'Diệp Tri Hạ';
//   console.log(fullName);
// };
// showMessage();

// 3. Định nghĩa hàm trong hàm
function showMessage() {
 function showMessage2() {
  console.log('Message 2');
 };

 showMessage2();
};
showMessage();

//  Các loại function
// 1. Declaration function

showMessage1();

function showMessage1() {
    console.log('Diệp Tri Hạ');
};

// 2. Expression functiom

var showMessage2 = function() {
    console.log('Hoa Vũ Đường');
};
showMessage2();

setTimeout(function autoLogin() {

});

var myObject = {
  myFunction: function() {
    
  }
}
// 3. Arrow function

// hosting

// Polyfill? ( search mozilla )
// console.log( Array.indexOf(search, start) !== -1);
// console.log(Array.includes(search, start));

if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}

var title = 'Javascript course';
title.includes();
'Javascript course'.includes('Javascript', 0);
console.log(title.includes('Javascript', 0));
console.log(title.indexOf('Javascript', 0) !==- 1);

// Object trong Javascript

var myInfo = {
  name: 'Vu Thi Lam',
  'Full-name': 'Diệp Huyền Thanh',
  age: 24,
  address: 'China'
};

myInfo.email = 'abc@gmail.com';

myInfo['phone number'] = '0347347473'
console.log(myInfo);

