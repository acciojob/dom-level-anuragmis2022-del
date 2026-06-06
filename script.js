//your JS code here. If required.
const level = document.getElementById("level")

let current= level.parentElement;
let count=1
while(current)
{
	count++
	current= current.parentElement
}
console.log("The level of the element is:"+count)
