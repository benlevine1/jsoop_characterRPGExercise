

class Weapon{
	constructor(name, type, attackSound, damageStats, weight){
		this.name = name;
		this.attackSound = attackSound;
		this.damageStats = damageStats;
		this.weight = weight;
	}
	wield( bearer ){

	}
	use(){

	}
	remove(){
		
	}
	generateAttackMessage(){
		//bludgeoning weapons swings
		//slashing weapons slashes
		//piercing weapons stabs
	}
	getData(){
		var damageStats = 0;
		for (var x  = 0; x < this.damageStats.count; x++){
			var roll = Math.floor(Math.random() * 3) + 1;
			damageStats += roll;
		}
	}
}