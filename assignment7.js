let numbers=[10,15,20,25,30,35,40,50];
console.log(numbers); 
// push
numbers.push(45);
numbers.push(50);
console.log(numbers);

//pop
numbers.pop();
numbers.pop(5);
console.log(numbers);

//shift
numbers.shift();
console.log(numbers);

//unshift
numbers.unshift(5);
numbers.unshift(10);
console.log(numbers);

//forEach

numbers.forEach( fun=(value,index)=>{
    console.log(index+" "+value);
});

//

var arr=[[1,2,3],
         [4,5,6],
         [7,8,9]
];

arr.forEach(function(i){
    console.log(i);
})