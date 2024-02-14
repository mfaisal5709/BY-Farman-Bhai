



// // function add(){
// //     sum = 0
// //    for(i = 0; i < arguments.length; i++){
// //     sum = sum + arguments[i]
// //    }
// //    console.log(sum);
// // }

// // add(4,6,8,)


// // ___________________________________________________________1 st_____________________________________________________
// // function addnumber(...argm){
// //     var count = 0;
// //     for(i = 0; i < argm.length; i++){
// //         count = count + argm[i]
// //     }
// //     console.log(count);
// // }
// // addnumber(1,2,3,4,5)




// // ___________________________________________________________2st_____________________________________________________


// // addnumber("1",2,3,4,5)
// // function addnumber(...argm){
// //     var count = 0;
// //     for(i = 0; i < argm.length; i++){
// //         count = count + argm[i]

// //         if(Number.isInteger(argm[i])){
// //         }else{
// //         console.log("its not a number");

// //         }
// //     }
// //     console.log(count);
// // }

// // addnumber("1",2,3,4,5)





// // function addNum (...numbers){
// //     sum=0;
// //     numbers.forEach(number => {
// //         if(Number.isInteger(number)){
// //             sum+=number;
// //         }
// //     })
// //     return sum;
// // }
// // console.log(addNum(1,2,3,4,5));


// // var arr = [1,2,3,[4,5,6,[7,8],9],1];
// // var arr2 = arr.flat().flat();
// // sum = 0
// // for(i = 0; i < arr2.length; i++){
// //     sum = sum + arr[i]
// // }
// // console.log(sum);

// // ___________________________________________________________________________________________________________________________

// // const data = [2,3,5,[1,2,[2,4],3],2]
// // let sum = 0;

// // getTotalFromArray(data);

// // function getTotalFromArray(arr){
// //     arr.forEach(a  => {
// //         if (Array.isArray(a)) getTotalFromArray(a);
// //         else sum += a;
        
// //     });     
// // }
// // console.log(sum);;



// // const data = [2,3,5,[1,2,[2,4],3],2]
// // let sum = 0;
// // var myArr=[];
// // getTotalFromArray(data);

// // function getTotalFromArray(arr){
// //     arr.forEach(a  => {
// //         if (Array.isArray(a)) getTotalFromArray(a);
// //         else myArr.push(a)
// //         });
// // }
// // console.log(myArr);


// // const data = [2,3,5,[1,2,[2,4],3],2]
// // let sum = 0;
// // var myArr=[];
// // getTotalFromArray(data);

// // function getTotalFromArray(arr){
// //     arr.forEach(a  => {
// //         if (Array.isArray(a)) getTotalFromArray(a);
// //         else myArr.push(a)
// //         });
// // }
// // console.log(data);


// // __________________________________________________________________________________________________________________________________

// // var star = [] 

// // for (let i = 0; i < 5; i++) {
// //     for(j = 0; j <= i; j++){
// //         star.push("****")
// //     }
    
// // }
// // console.log(star)

// // _____________________________________________________________  _____________________________________________________________________
// // const data = [2,3,5,[1,2,[2,4],3],2]
// // var result = []
// // for(i = 0; i < data.length; i++){
// //     if(Array.isArray(data[i])){
// //         result.push(...data[i])

// //     }else{
// //         result.push[i]
// //     }
    
// // }
// // console.log(result);

// // __________________________________________________________________________________________________________________________________



// const arr = [1,2,3]


// // const res1 = arr.push(8)
// //  console.log(res1);
// //  console.log(arr);

// // const res2 = arr.pop()
// //  console.log(res2);
// //  console.log(arr);


// // const res3 = arr.unshift(8)
// //  console.log(res3);
// //  console.log(arr);


// // const res4 = arr.shift()
// // console.log(res4);
// // console.log(arr);

// // ________________________________________________________19/12/23__________________________________________________________________________



// console.log( [2,3,4,5,6,8,9].filter((v) => !(v%2)));

// var arr = [2,3,4,5,6,7];
// function isEven(number){
//     return !(number % 2)
// }
// console.log(arr.filter(isEven));


// console.log( [2,3,4,5,6,8,9].map((v) => v+1))


// var arr = [2,3,4,5,6,7];
// function newArr(number){
    //     return number+1
    // }
    // console.log(arr.map(newArr));
    
    // var obj = [
        //     {
            //         id:1,
            //         name:'hello'
            //     },
            //     {
//         id:2,
//         name:'welcome'
//     }
// ];
// var arr = obj.map((v) =>({ ...v, 'status': 'true' }))
// console.log(arr);


// var num = [1,2,3,4,5,6]
// var num2 = ['F','A','I','S','A','L']
// var arr = [];
// for(i=0;i<num.length;i++){
    //     arr.push({num2[i]:num[i]})
    // }
    // console.log(arr);
    
    
    // var num = [1, 2, 3, 4, 5, 6];
    // var num2 = ['F', 'A', 'I', 'S', 'A', 'L'];
    // var arr = [];
    
    // for (var i = 0; i < num.length; i++) {
        //     var obj = {};
        //     obj[num2[i]] = num[i];
        //     arr.push(obj);
        // }

// console.log(arr);

// const user = {
    //     name : 'luffy',
    //     age : 21,
    //     mail : 'hello@gmail.com'
    // }
    
    // Object.entries(user).forEach(entry => {
        //     const[key,value] = entry;
        //     console.log(key,value);
        // });
        // const array = ["name", "luffy","age","15"]
        
        
// let chk = array.push()

// console.log(chk);




// // ________________________________________________________19/12/23__________________________________________________________________________



const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();
console.log(iterator1.next(1).value);
console.log(iterator1.next(1).value);













