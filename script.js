// Destructuring of Function

// const person={
//     name:"padma",
//     lastname:"shree",
//     Age:25,
// };

// function display({name,lastname}){
//     console.log(`Name of Person is:${name}${lastname}`);
// }

// display(person);

// // Spread operator used to merge two arrays

// let array1=[10,20,30,40,50];
// let array2=[...array1,60,70,80];

// console.log(array2);

// console.table(array2);


// let android=["samsung","oppo","asus","vivo"];
// let iphones=["iphone8","iphone7","iphonex","iphone11"];

// let phones=[...android,...iphones,"Nokia 1100"];

// console.table(phones);

// let obj1={
//     name:"padma",
//     age:25,
// };

// let obj2={
//     name:"santhosh",
//     age:32,
// };

// let merged=[obj1,obj2];
// console.table(merged);

// // rest parameter is used to represent infinite number of arguuments
// let sum=0;
// function getSum(...numbers){
// for(let k in numbers){
//     sum+=numbers[k];
// }
// return sum;
// }

// console.log(getSum(10,20,30,40,50));


// function getColor(color1,color2,...colors){
//     return `color1:${color1}
// color2:${color2}
// colors:${colors}`;
// }

// console.log(getColor("red","blue","green","yellow","white"));


// function getSortedData(...data){
//     let sorted=data.sort((a,b)=>a-b);
//     console.log(sorted);
// }

// getSortedData(6,8,2,5,9,12,18,3);


// class Vehicle{
//     constructor(type,model){
//         this.type=type;
//         this.model=model;
//     }

//     getdetails(...array){
//         return `${this.type}  ${this.model} ${array.join(' ')}`;
//     }

// }

// let obj=new Vehicle("car","Toyota");

// array=["ertica","Baleno"];
// console.log(obj.getdetails("ertica","baleno"));


// class Calc{


// getAvg(...number){
//     let avg;
//     if(number.length===0){
//         return 0;
//     }
//     else{
//         let sum=0;
//         for(let k in number){
//             sum+=number[k];
//         }
//             avg=sum/number.length;
//     }
//     console.log(avg);
// }

// }

// let objc=new Calc();
// objc.getAvg(1,2,3,4,5);



// class Calc{


//     static getAvg(...number){
//         let avg;
//         if(number.length===0){
//             return 0;
//         }
//         else{
//             let sum=0;
//             for(let k in number){
//                 sum+=number[k];
//             }
//                 avg=sum/number.length;
//         }
//         console.log(avg);
//     }
    
//     }
    
//     // let objc=new Calc();
//     Calc.getAvg(1,2,3,4,5);


    class Person{

        constructor(name){
            this.name=name;
        }

        greetings(){
            let msg1="Welcome to Method Greeting";
            return msg1;
        }

        getFood(){
            return `${this.name} would like to eat pizza`;
        }

        static displayWalk(){
            return `Iam static method with ${this.name} Display walk`
        }


    }

    let person1=new Person("Lavish");
    let food=new Person("Omkar");



    console.log(person1.greetings());

    console.log(food.getFood());

    console.log(Person.displayWalk());
    
