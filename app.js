// //lacture one start 
// //Alert lacture 

// //1
// alert('Welcome to our website...');
// //2
// alert('Error! Please enter the valid password');
// //3 
// alert('Welcome to JS Land... \n Happy Coding!')
// //4
// alert('Welcome to JS Land...');
// alert('Happy Coding!');
// //5
// console.log('Hello... I can run JS through my web browsers console ')
// //7 
// //answer { Head }
// //lacture one End

// //lacture two start
// //variable for string...

// //1
// var username;
// //2
// var myName = "Mohsin Ali Soomro";
// //3
// var message="Hello World";
// alert(message);
// //4
// var name ="Jhone Doe";
// var age ="15 Year Old";
// var certificate ="Certified Mobile Application Developement";
// alert(name);
// alert(age);
// alert(certificate);
// //5
// var pizza= `PIZZA
// PIZZ
// PIZ
// PI
// P`;
// alert(pizza);
// //6
// var email = "Mohsinalisoomro23@gmail.com";
// alert("My Email Address is " + email);
// //7
// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn the book " + book);
// //8
// document.write("Yeh! I can write HTML content through JavaScript");
// //9
// var desing ="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(desing)
// //lacture two End

// //lacture three start
// //Variable for Numbers

// //1
// var age = 22;
// alert(age);
// //2
// var visited;
// visited = 100;
// alert(`You Have visited this site ${visited} times`);
//3
var birthYear=1998;
document.write("My Birth Year is " + birthYear +"<br />");
document.write("Data Type of my declared variable is " + typeof(birthYear));
//4
var visitorname ="Jhone Doe";
var producttitle="T-shirt";
var storename ="XYZ Clothes Store";
var quintity=5;
document.write(`<br /> ${visitorname} ordered ${quintity} ${producttitle}(s) on ${storename}`);
//lacture three End

// //lacture four Start
// //VARIABLE NAMES: LEGAL & ILLEGAL

// //1
// var one,two,three;
// //2
// // ILLEGAL
// var 1one;
// var "two";
// var @three;
// var &four;
// var %five;
// // LEGAL
// var one;
// var _two;
// var th_ree;
// var four4
// var five_5
//3
//A
document.write("<h1>“Rules for naming JS variables</h1>");
//B
document.write("<br>Variable names can only contain letters,digits,underscores and dollar signs.");
//C
document.write("<br>Variables must begin with a letter,$ or case sensitive For example <b>$name, _name</b> or <b>name</b>")
//D
document.write("<br>Variable names are case Sensitive");
//E
document.write("<br>Variable names should not be JS keyword");

//Lacture 4 End

//lacture 5 start
//Math Expressions

//1 
// Add
var a=1;
var b=2;
var c=a+b;
document.write(`Sum of ${a} and ${b} is ${c}`);
//2
// Sub
var a=1;
var b=2;
var c=a-b;
document.write(`substract of ${a} and ${b} is ${c}`);
// Mul
var a=1;
var b=2;
var c=a*b;
document.write(`Multiply of ${a} and ${b} is ${c}`);
// Div
var a=1;
var b=2;
var c=a/b;
document.write(`division of ${a} and ${b} is ${c}`);
//3
//a
var value;
//b
document.write(`<br />Value after variable declaration is ${value}`);
//c
value=5;
//d
document.write(`<br />Initial value ${value}`);
//e
value++;
//f
document.write(`<br />Value after increment is ${value}`);
//g
value = value+7;
//H
document.write(`<br />Value after addition is 7`);
//i
value--;
//j
document.write(`<br />Value after decrement is ${value}`);
//k
value=value%3;
//L
document.write(`<br />The remainder is ${value}`)
//4
var ticket = 600;
ticket=ticket*5;
document.write(`<br/>Total cost to buy 5 tickets to a movie is ${ticket} PKR`);
//5
document.write(`<br/>table of 4`)
document.write(`<br/>4x1=4`);
document.write(`<br/>4x2=8`);
document.write(`<br/>4x3=12`);
document.write(`<br/>4x4=16`);
document.write(`<br/>4x5=20`);
document.write(`<br/>4x6=24`);
document.write(`<br/>4x7=28`);
document.write(`<br/>4x8=32`);
document.write(`<br/>4x9=36`);
document.write(`<br/>4x10=40`);
//6
var celsiusTemp=52;
var fahrenheit=(celsiusTemp*9/5)+32;
document.write('<br/>'+fahrenheit);
var fahrenheitTemp = 102;
var celsius=(fahrenheitTemp-32)*5/9;
document.write('<br/>'+celsius);
//7
var priceItem1=650;
var quantityaItem1=3;
var priceItem2=100;
var quantityaItem2=7;
var shipCharges=100;
document.writeln("<br/>Price of item 1 is "+priceItem1);
document.writeln("<br/>Quantity of the item 1 is "+quantityaItem1);
document.writeln("<br/>Price of item 2 is "+priceItem2);
document.writeln("<br/>Quantity of the item 2 is "+quantityaItem2);
document.writeln("<br/>Shipping Charges "+shipCharges);
var total = (priceItem1*quantityaItem1)+(priceItem2*quantityaItem2)+shipCharges;
document.writeln("<br/>Total cost of your order "+total);
//8
var obtainedmark=804;
var totalmarks=980;
var percentage = (100*obtainedmark)/totalmarks;
document.write("<br/> Total Marks = "+totalmarks);
document.write("<br/> Marks Obtained = "+obtainedmark);
document.write("<br/> Percentage = "+percentage);
//9
var exchangeCurrenncy = (10*104.80) + (28*25);
document.write("<br/>Total Currency"+exchangeCurrenncy);
//10
var someNumber=10;
(someNumber+5)*10/2;
document.write("<br/>Arthmetic "+someNumber);
//11
var currentYear=2020;
var birthDate=1998;
var  yourAge= currentYear-birthDate;
document.write("<br/>Current Year"+currentYear);
document.write("<br/>Birth Year"+birthYear);
document.write("<br/> Your Age is "+yourAge);
//12 Not Understand

//13
var favouritesnake="Chocolate chip";
var currentage=15;
var estimeteage=65;
var amountofsnakeperday=3;
document.write("<br/> Favourite Snack :"+favouritesnake);
document.write("<br/> Current Age is "+currentage);
document.write("<br/> Estimate Maximum Age "+estimeteage);
document.write("<br/> Amount of Snakes Per day "+amountofsnakeperday);
document.write("<br/> You will need 150 "+favouritesnake+" to last you until the ripe old age of "+estimeteage);
