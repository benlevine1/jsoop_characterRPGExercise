

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
        var damageCount = 0;
        for (var x  = 0; x < this.damageStats.count; x++){
            var roll = Math.floor(Math.random() * this.damageStats.dice) + 1;
            damageCount += roll;
        }
        return damageCount;
    }
	remove(){
		
	}
	generateAttackMessage(){
		if (this.type === 'bludgeoning'){
			return 'swings';
		} else if (this.type === 'slashes'){
			return 'slashes';
		} else {
			return 'stabs';
		}
	}
	getData(){
	}
}