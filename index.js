//going where so many have gone before
function notMuchHasBeenDoneHere(){
	const roll=round(Math.random());
	return(roll);
}

class Romneyfied {
	constructor(name, age, power){
		this.name=name;
		this.age=age;
		this.power=power;
	}
}

let thisArray=[0,1,2,3,4,5,6,7,8,9];

let MC = {
	bravery: 7,
	strength: 5,
	speed: 8
}

function upgradeMC(){
	let roll=0;
	let oldMCProp="";
	console.log('upgrading...')
	for (let property in MC){
		roll=Math.ceil(Math.random()*10);
		console.log(roll + ' vs ' + MC[property])
		if (roll>MC[property]){
			oldMCProp=MC[property];
			MC[property]=roll;
			console.log(`${property} upgraded from ${MC[property]} to ${roll}`)
		}
	}
}

for (let property in MC){
	console.log(`${property}: ${MC[property]}`);
}

upgradeMC();
upgradeMC();
upgradeMC();


