//trong JS có kiểu dữ liệu động (dynamic type). Một biến có thể lưu bất cứ giá trị nào
//template literal để cộng chuỗi


// alert ("Hello world")
// các kiểu biến của kiểu dữ liệu
var string = "123fff"
var number = 1234
var boolean = true
var undefined = undefined
var nan = NaN

var number = 1; //khai báo 1 biến tên number có giá trị bằng 1
console.log (number) //1 biến đc khai báo nhưng k gán giá trị thì sẽ ra undefined

var a=10;
var b=20;
var str1 = "hello aa";
var str2 = "hello bbb";

if (str1.length > str2.length) {
    console.log(str1)
}
else {
    console.log(str2)
}
//khi cộng 1 số với 1 chuỗi (string) thì số đó sẽ thành chuỗi và khi đó sẽ thành cộng chuỗi
//khi trừ 1 số với 1 chuỗi (string) thì chuỗi đó sẽ thành số và khi đó sẽ thành trừ số
console.log (10 + "10")
console.log (10 - "10")

 // length tính luôn khoảng trắng
//kiểm tra biến a là số chẵn hay lẻ
// if (a%2 === 1){ // toán tử so sánh sẽ sử dụng 3 dấu bằng
//     console.log (a+" là số lẻ")
// } else {
//     console.log(a+" là số chẵn")
// }

var result = a%2 === 1 ? a+" là số lẻ" : a+" là số chẵn";
console.log (result);

var tong = (a+b)%2 ===1 ? `tổng của ${a} và ${b} là số lẻ` : `tổng của ${a} và ${b} là số chẵn`;
console.log (tong)

// for (let i=0;i<a;i++){
//     console.log(i);
// }
for (let i=0;i<=a;i++){
    if (i%2 === 0) {
        console.log (i);
    }
}

var n=20
// in ra số chia hết cho 2 và 5 từ 0 đến n
var result1 ="";
for(let i=0;i<=n;i++){
    if (i%10===0) {
        result1= result1 + i + ",";
    }
    if (i==n) {
        result1 =result1 + i;
    }
}
console.log (result1)


const arr = [1,2,3,4] //index: 0,1,2,3
for (let i=0;i<arr.length;i++) {
    if (arr[i]%2===0)
    {
        console.log (arr[i])
    }
}
// .toString() => nối các phần tử trong mảng bằng dấu phẩy, sẽ trả vế 1 chuỗi
const arrString = ["user1", "user2", "user3", "user4"]
console.log(arrString.toString())
//.join(seperator) =>> nối các phần tử trong mảng bằng dấu "seperator", sẽ trả về 1 chuỗi
console.log (arrString.join("|"))
//thêm 1 phần tử vào cuối mảng .push
const d = arrString.push("user-final") //new length
arrString.push ("user-final");
console.log(arrString)
//thêm 1 phần tử vào đầu mảng .unshift
//.unshift() trả về new length
arrString.unshift ("new user")
//.pop để xóa phần tử cuối cùng của mảng, pop sẽ trả về giá trị phần tử vừa xóa
console.log ("ban đầu: " ,arrString)
arrString.pop()
console.log ("sau: ", arrString)
// xóa phần tử đầu mảng
console.log(arrString.shift());
console.log ("sau khi shift", arrString)

//in ra mảng mới gồm 2 phần tử đầu của mảng
//slice() trả về 1 mảng mới
// nếu slice() chỉ có 1 tham số thì trả về mảng mới từ tham số đó đến cuối mảng
const newString=arrString.slice(-2)
console.log(newString)

//in ra mảng mới gồm 2 phần tử cuối mảng

const newString2 = arrString.slice(1, -1);
console.log(newString2)

//thêm 1 phần tử hoặc nhiều phần tử giữa mảng, hoặc delete phần tử của mảng
//splice(start, delete, add)

const numbers = [1,2,3,4,6];
// in ra mảng mới thỏa mãn điều kiện số nào chia hết cho 2 thì sẽ đổi thành true

for (let i=0;i<numbers.length;i++){
    if (numbers[i] %2 ===0 ) {
        numbers.splice(i,1,true);
    }
}
console.log(numbers)

const numbers123 = ["aaa", "bbbb", "cc", "b"];
for (let i=0;i<numbers123.length;i++) {
    for (let j=1; j< numbers123.length; j++) {
        if (numbers123[i].length > numbers123[j].length) {
            numbers123
        }
    }
}

// split trả về 1 mảng mới, tách 1 chuỗi thành 1 mảng mới
let str = "hello hello 123 426"

const newArr = str.split("2");
console.log(newArr)
// cách xuất số từ từ 1 chuỗi. Dùng split, sau đó dùng length
console.log(newArr.join("bbb"))

//thay thế tất cả chữ o bằng "aaa"

// tính độ dài của string k bao gồm space
let str123 = "thuan Do 123 456"
console.log(str123[1])
const newArrThuan = str123.split(" ").join("").length;
console.log(newArrThuan)
// viết hoa viết thường
console.log(str123.toUpperCase())
console.log(str123.toLowerCase())
const newArrThuan123 = str123.split(" ");                           

for (let i=0; i <newArrThuan123.length;i++){
    // const newArr123 = newArrThuan123[i].split("")
    // newArr123[0] = newArr123[0].toUpperCase()
    // newArrThuan123[i] = newArr123.join("")
}
console.log (newArrThuan123.join(" "))


for (let i = 0; i <newArrThuan123.length;i++) {
    const newArr123 = newArrThuan123[i].split("")
    for (let j = 0 ;j <newArr123.length; j++) {
        if (64< newArr123[j].charCodeAt() <91) {
            newArr123[j] = newArr123[j].toLowerCase()
            // console.log (newArr123)
        } else if (60 < newArr123[j] < 78) {
            newArr123[j] = newArr123[j].toUpperCase()
            console.log (newArr123)
        }
    }
}

//password
// repeat thay for để lặp lại các ký tự
console.log("abc".repeat(5))
//Number => chuyển 1.6 thành số 1.6
// parseInt => chuyển 1.6 thành 1 (parse Interger)

//vòng lặp trong javascript -> iteration

const array = [1,3,5,8]
//for - in (cách nhớ: chữ i trong chữ Index)
//for - of (cách nhớ: of trong giá trị)
//foreach lúc nào nhận vào cũng là 1 function
for (let i in array) {
    console.log(array[i])
}
array.forEach((val, index) => {
    console.log (`${index} - ${val}`)
})

/*function trong js
function là 1 cái hàm thực hiện 1 chức năng nào đó và chúng ta thường khai báo function và chức năng của function dựa vào cái tên
 + cách 1: function trong declaration
*/

// function printName (name, age) {
//     console.log (`${name} có age là ${age}`)
// }
// printName("user 1", 10);

// const printName = function (name, age) {
//     console.log (`${name} có age là ${age}`)
// }

//arrow function
const printName = (name, age) => {
    console.log (`${name} có age là ${age}`)
}
printName ("User1", 10)

// định nghĩa function "add", nhận 2 tham số a,b
//trả về kết quả tổng của a + b

const add = (number1, number2) => {
    return number1+number2;
}
console.log(add (3,4))

const user = {
    name: "User 1",
    age: "18"
};
console.log (user.name)
const users = [
    {name: "User1", age: 18, price: 43},
    {name: "User2", age: 19, price: 12},
    {name: "User3", age: 20, price: 50},
    {name: "User4", age: 21, price: 10},
    {name: "User5", age: 22, price: 100},
    {name: "User6", age: 23, price: 69}
];
//map trả về 1 mảng mới, có số lượng phần tử bằng mảng cũ
const Usernumbers = users.map((val, index) => {
    return val.name 
});
console.log (Usernumbers)
//filter trả về giá trị val sau điều kiện return
const UsernumbersFilter = users.filter((val, index)=>{
    return val.age >20
})
console.log(UsernumbersFilter)
const totalAge = UsernumbersFilter.reduce((acc, currentVal)=>{
    return acc + currentVal.age
},0)
console.log(totalAge)
const UserAgePrice = users.filter((val, index)=>{
    return (val.age <=20 && val.price<60)
})
const UserAgePrice123 = UserAgePrice.map((val, index) => {
    return val.name 
});
console.log(UserAgePrice123.join(" "))

const numbers1234 = [1,2,5,2,1,4,5,2,657,6534,53,234,22,4,5,4]
//sort trả về mảng mới, nếu return a-b < 0 thì a đứng trước b hay là sắp xếp tăng dần
//sort trả về mảng mới, nếu return a-b > 0 thì a đứng trước b hay là sắp xếp giảm dần
const newNumbers = numbers1234.sort((a,b)=>{
    return a-b;
})
console.log (newNumbers)

const users123 = [
    {
      name: "user 1",
      age: 17,
    },
    {
      name: "user 2",
      age: 20,
    },
    {
      name: "user 3",
      age: 5,
    },
  ];
  const userSorts = users123.sort((a,b)=> {
      return a.age - b.age
  })
  console.log (userSorts)

const numbertotal = [2,3,6,7]
//reduce để t1=ính tổng các số trong mảng
//cách hoạt động
//b1: check initialValue có hay không
//bước 2: nếu có thì ở vòng lặp 1, acc = initialValue, currentVal = array[0]
//bước 3: nếu không thì ở vòng lặp 1, acc = array[0], currentVal = array[1]
const total = numbertotal.reduce ((acc, currentVal)=>{
    return acc + Number(currentVal)
})
console.log (total)
const products = [
    {
    name: "item 1",
    price: 20,
    },
    {
    name: "item 2",
    price: 15,
    },
    {
    name: "item 3",
    price: 8,
    },
];
const totalPrice = products.reduce((acc, currentVal)=>{
    return acc + currentVal.price
}, 0)
console.log (totalPrice)

// let chuoi = "Loremm ipsums dolor sit amet";
// const mang = []
// const mangmoi = chuoi.split(" ")
// let strMax = mangmoi[0]
// console.log (strMax.length)
// for (let i = 0; i < mangmoi.length; i++) {
//     if (strMax.length == mangmoi[i].length) {
//         mang.push(mangmoi[i])
//     }
// }
//  console.log (mang.join(""))

 const arrayIndex = [3,4,5,6,8]

 //kiểm tra số 5 có tồn tại trong mảng k
 const idx = arrayIndex.indexOf(5,1); //phương thức kiểm tra index(vị trí) xuất hiện đầu tiên indexOf(số cần xuất vị trí, vị trí bắt đầu tìm kiếm)
 // nếu có: trả về index đầu tiên
 // nếu không có: trả về -1
 console.log(idx)
 
 //.include() là thuật toán kiểm tra số đó có trong mảng hay không, trả về true or false (áp dụng cho number và string)
 console.log(arrayIndex.includes(8))

 //.findIndex() dùng để kiểm tra số vị trí trong object

 const indexPractice = [
    {name: "User1", age: 18, price: 43, role: ["admin", "guest"]},
    {name: "User2", age: 19, price: 12, role: ["admin"]},
    {name: "User3", age: 20, price: 50, role: []},
    {name: "User4", age: 21, price: 10, role: ["guest"]},
    {name: "User5", age: 22, price: 100},
    {name: "User6", age: 23, price: 69}
];

const findGuest = indexPractice.filter((val, index)=> {
    // for (let i in val.role) {
    //     if(val.role[i] === undefined) {
    //         return val.role
    //     }
    // }
    if ((val.role === undefined) || (val.role === [])) return val
    else for (let i in val.role) {
        if(val.role.includes("admin")) {
            return val
        }
    }
})
console.log (findGuest)

const numberArrays = [1,1,4,4,5,5,3,3]
let count = 0
const numberReduce = numberArrays.reduce((acc, val)=>{
    if(val in acc){
        acc[val]++
    } 
    else acc[val] = 1;  
    if (acc[val] >1) {
        count++;
    }
    return acc;
},{})
console.log(count)

name = ["glove", "glove", "glove", "glove", "glove"]
price = [2,2,2,2,2]
weight = [2,2,2,2,2]
let countTotal = 0;
for (let i=0; i<name.length;i++){
    for (let j = i+1; j<name.length;j++){
        if (`${name[i]} ${price[i]} ${weight[i]}` === `${name[j]} ${price[j]} ${weight[j]}`) {
            countTotal++;
            name[i] =`${name[i]} bị trùng`
            name[j] =`${name[j]} bị trùng`
            break;
        }
    }
}
console.log(countTotal)
// const objName = {}
// const arrayName = []
// for (let i=0; i<name.length;i++) {
//     objName.name = name[i]
//     objName.price = price[i]
//     objName.weight = weight[i]
//     console.log(objName)
//     arrayName.push(objName)
//     console.log(arrayName)
// }
//console.log(objName)
//arrayName.push(objName)
//console.log (arrayName)