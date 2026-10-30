//map Function
// console.log("MapFunction")
// let name = ["john","doe","jeeva","Rahul"]
// const newName = name.map((name,index)=>{
//     return `index of this name is ${name} = ${index}`
// })

// console.log(newName)
// console.log(name)

//Filter Function
// console.log("Filer-Function")
// let num = [1,2,3,4,5]
// const newnum = num.filter((num,index)=>num%2 == 0)
// console.log(newnum)
// console.log(num)

//Find Method
// console.log("Find-Method")
// const data = [
//   { id: 1, name: "jeeva", email: "jeeva123@gmail.com", "phone-NO": 9940430875 },
//   { id: 2, name: "praveen", email: "praveen123@gmail.com", "phone-NO": 9940430777 },
// ];
// const newdata = data.find((data)=>data.id==1);
// console.log(newdata.name)
// console.log(newdata.email)

// const newdata1 = data.find((data)=>data.name == "jeeva");
// console.log(newdata1.id)

//FindIndex
// console.log("Findindex")
// const datas = [
//   { id: 1, name: "arul" },
//   { id: 2, name: "Rani" },
//   { id: 3, name: "jeeva" },
//   { id: 4, name: "anitha" },
//   { id: 5, name: "anand" },
//   { id: 6, name: "giri" },
//   { id: 7, name: "rahul" },
//   { id: 8, name: "sujay" },
//   { id: 9, name: "vishnu" },
//   { id: 10, name: "barth" },
// ];
// const newdatas = datas.findIndex((datas)=>datas.id == 7)
// console.log(newdatas)

// const newdatas1 = datas.findIndex((datas)=>datas.id == 11)
// console.log(newdatas1)
 
// const newdata1 = datas.find((datas)=>datas.id == 11)
// console.log(datas.id)

// const cart = [120,180,200]
// const  total = cart.reduce(
//     (acc,n)=> acc + n,
// )
// console.log(total)

// const letter = ["a", "b" ,"c" ,"d"]
// const joint = letter.reduce((acc,n)=> acc + n,)
// console.log(joint)    

//ForEach function

// console.log("ForEach")
// const items = ['pen','pencil','bottle'];
// items.forEach((item,i)=>{
//     console.log(`${i} ${item}`)
// })

//Sort
// console.log("Sort")
// const n = [1,205,502,101,100,59];
// console.log(n.sort())
// console.log(n.sort((a,b)=>a-b));

// const num = [1,59,101,1000,7];
// console.log(num.sort())

//push and pop()

// console.log("push()")
// const fruits = ['apple','banana'];
// const len = fruits.push('mango','orange');
// console.log(len);
// console.log(fruits);

// console.log("pop()")
// const last = fruits.pop();
// console.log(last);
// console.log(fruits);

//Slice

console.log("Slice")
const num = [10,20,30,40,50];
console.log(num.slice(1,3));
console.log(num.slice(-2));
console.log(num.slice(3))
