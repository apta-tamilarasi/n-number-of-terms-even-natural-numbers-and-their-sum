let a=parseInt(prompt("Enter the number of elements"))

document.write(`Number = ${a}<br><br>`)

var c=0
var sum=0

for(i=1;i<=a;i++){
	if(i%2==0){
		c=c+1
		sum=sum+i

	}
	
}
document.write(`Number of even numbers =${c}<br>`)
document.write(`Even numbers Sum =${sum}<br>`)