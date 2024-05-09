// // Function & Return
// function country():string {
// 	console.log("Pak");      // For Human Beings
// 	return "Aus"             // For JS & TS
// }
// const ans = country()
// console.log(ans)
// // Arrow Function
// const Hello = () => {
// 	console.log(`Hello From Arrow Function`)
// }
// Hello()
// // Arrow Function & const
// const Hello = (digit:number) => {
// 	return digit
// }
// const ans = Hello(5)
// console.log(ans)
// //Next
// const isEven = (digit:number) => {
// 	return digit
// }
// const ans = isEven(10)
// console.log(ans)
// // Arrow Function & Return
// const isEven = (digit) => {
// 	if(digit % 2 == 0){
// 		console.log("Even")
// 	}
// 	else{
// 		console.log("Odd")
// 	}
// }
// isEven(10)
// isEven(103)
// // Return with single statement
// const Name = () => "Faryal"
// const ans = Name()
// console.log(ans);
// // Digit Statement with if & Else statement
// const Calculator = (digit:number,
// digit2:number , sign:string) => {
// 	if(sign == "+"){
// 		console.log(digit + digit2)
// 	}
// 	else if(sign == "-"){
// 		console.log(digit - digit2)
// 	}
// }
// Calculator(5, 10, "+")
// Calculator(10, 7, "-")
//
// function FaryalSession(){
// 	let Faryal = "Faryal"
// 	console.log(Faryal)
// 	console.log(SirAmeen);
// }
// FaryalSession()
// const AbbasiSession = () => {
// 	let Abbasi = "Abbasi"
// 	console.log(Abbasi)
// 	console.log(SirAmeen);
// }
// AbbasiSession()
// Army Function
// let army = "ARMY"
// const KPS(){
// 	let KPS = "KPS"
// 	console.log(KPS);
// 	console.log(army);
// }
// KPS()
// function SFP(){
// 	let SFP = "SFP"
// 	console.log(SFP);
// 	console.log(army);
// }
// SFP()
// //Nearest Scop
// let teacher = " Sir Ameen"
// function FaryalSession(){
// 	let teacher = "Faryal"  //Nearest Scop
// 	console.log(teacher);
// }
// console.log(teacher);
// FaryalSession()
// (Pop, Push,  Shift, Unshift) Pop Remove at last & Push Add at last
var Sabzi = ["Moli", "Karela", "Aloo", "Shaljam", "LlaMirch", "HariMirch"];
Sabzi.pop();
Sabzi.push("ShimlaMirch");
Sabzi.shift();
Sabzi.shift();
Sabzi.unshift("Moli");
console.log(Sabzi);
Sabzi[3] = "Arwi";
console.log(Sabzi);
console.log(Sabzi[2]);
