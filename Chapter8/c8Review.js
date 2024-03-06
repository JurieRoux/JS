// // let x = "tr";
// // console.log(isNaN(x));

// // let uri = "https://www.example.com/submit?name=maaike vanputten";
// // let encoded_uri = encodeURI(uri);
// // console.log("Encoded:", encoded_uri);
// // let decoded_uri = decodeURI(encoded_uri);
// // console.log("Decoded:", decoded_uri);

// ////////// encoding and decoding
// // Define two variables storing secret messages, one already URI encoded and another not encoded
// const secretMes1 = "How's%20it%20going%3F";    
// const secretMes2 = "How's it going?";
// console.log (secretMes1);
// console.log (secretMes2);

// // // Decode the URI encoded message to retrieve the original message
// // const decodedComp = decodeURIComponent(secretMes1);
// // console.log(decodedComp); // Output the decoded message to the console

// // // Encode the message to make it a URI component
// // const encodedComp = encodeURIComponent(secretMes2);
// // // console.log(encodedComp); // Output the encoded message to the console

// // // Define a URI containing a query parameter with spaces
// // const uri = "http://www.basescripts.com?=HelloWorld";

// // // Encode the URI to ensure correct formatting for web use
// // const encoded = encodeURI(uri);
// // console.log(encoded); // Output the encoded URI to the console

// let x = 34;
//     console.log(isNaN(x));
//     console.log(!isNaN(x));
// let y = "hi";
//     console.log(isNaN(y));
// let z = "5";
//     console.log(isNaN(z));

// // let x = 3;
// // let str = "finite";
// // console.log(isFinite(x));
// // console.log(isFinite(str));
// // console.log(isFinite(Infinity));
// // console.log(isFinite(10 / 0));

// // let x = 3;
// // let str = "integer";
// // console.log(Number.isInteger(x));
// // console.log(Number.isInteger(str));
// // console.log(Number.isInteger(Infinity));
// // console.log(Number.isInteger(2.4));

// let xx = 1.23456;
// let newX = xx.toFixed(2);
// console.log (newX);

// // let x = 1.23456;
// // let newX = x.toFixed(3);
// // console.log(x, newX);

// // let x = 1.23456;
// // let newX = x.toPrecision(2);

// // let x = 1.23456;
// // let newX = x.toPrecision(4);
// // console.log(newX)

// // let str_float = "7.6";
// // let int_float = parseInt(str_float);
// // console.log("Type of", int_float, "is", typeof int_float);
// // let str_binary = "0b101";
// // let int_binary = parseInt(str_binary);
// // console.log("Type of", int_binary, "is", typeof int_binary);

// // /////// can only handle 1 dot at a time
// // let str_float = "7.6.5";
// // let float_float = parseFloat(str_float);
// // console.log("Type of", float_float, "is", typeof float_float);

// // let str_binary = "0cantSeePastNaN101";
// // let float_binary = parseFloat(str_binary);
// // console.log("Type of", float_binary, "is", typeof float_binary);

// // let str_nan = "hello!";
// // let float_nan = parseFloat(str_nan);
// // console.log("Type of", float_nan, "is", typeof float_nan);

// // let arr = ["grapefruit", 4, "hello", 5.6, true];
// // function printStuff(element, index) {
// // console.log("Printing stuff:", element, "on array position:", index);
// // }
// // arr.forEach(printStuff);
// // arr.forEach (e => console.log(e));

// ///////////// filter method
// // let arr = ["squirrel", 5, "Tjed", new Date(), true, false];
// // function checkString(element) {
// //     // Finding the element in the array - number, string etc
// // return typeof element === "string";
// // }
// //     //use .find instead of .filter to find just 1st data (boolean for example) 
// // let filterArr = arr.filter(checkString);
// // //console.log(filterArr);

// // console.log(arr.every(checkString));

// // arr = ["grapefruit", 4, "hello", 5.6, true];
// // arr.copyWithin(0, 3);
// // console.log (arr);

//let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// //////index method
// // let index_re = poem.indexOf("re");
// // console.log(index_re);

// //////search method
// // let searchStr = "When I see my fellow, I say hello";
// // let pos = searchStr.search("I");
// // console.log(pos);

// ///////char - gives the value of that index
// let pos1 = poem.charAt(10);
// console.log(pos1);

// // ///////char - gives the value of that index
// // let pos1 = poem.charAt(10);
// // console.log(typeof pos1);

// // let str = "Create a substring";
// // let substr1 = str.slice(5);
// // let substr2 = str.slice(0,3);
// // console.log("1:", substr1);
// // console.log("2:", substr2);

// // //////// upper to lower to cap 1st letter
// // let caps = "HI HOW ARE YOU?";
// // let fixed_caps = caps.toLowerCase();
// // let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
// // console.log(first_capital);

// // let x = 3;
// // let str = "finite";
// // console.log(isFinite(x));
// // console.log(isFinite(str));
// // console.log(isFinite(Infinity));
// // console.log(isFinite(10 / 0));

// // ///////// decimal places
// // let x = 1.239565126561656515615154;
// // let newX = x.toFixed(2);
// // console.log (newX);

// // let x = 1.2490;
// // let newX = x.toPrecision(2);
// // console.log (newX);

// // let highest = Math.max(2, 56, 12, 1, 233, 4);
// // console.log(highest);
// // let lowest = Math.min(2, 56, 12, 1, 233, 4);
// // console.log(lowest);

// // let x = 6.78;
// // let y = 5.34;

// // //// round number
// // console.log("X:", x, "becomes", Math.round(x));
// // console.log("Y:", y, "becomes", Math.round(y));

// // ///// round up
// // console.log("X:", x, "becomes", Math.ceil(x));
// // console.log("Y:", y, "becomes", Math.ceil(y));

// // ////// negative numbers rounding 
// // let negativeX = -x;
// // let negativeY = -y;
// // console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// // console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

// // let currentDateTime = new Date();
// // console.log(currentDateTime);

// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());
// // d.setFullYear(2010);
// // console.log(d);
// // d.setMonth(9);
// // console.log(d);
// // d.setDate(10);
// console.log(d);

