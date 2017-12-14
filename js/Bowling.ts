class Frame {
	score: number;

	getScore(): number {
		return this.score;
	}
	constructor() {
		this.score  = Math.floor(Math.random() * 31);
	}
}

let frms: Frame[] = [];
let total: number = 0;
for(let idx:number = 0; idx < 10; idx++) {
	let framex: Frame = new Frame();	
	frms[idx] = framex;	
	total += frms[idx].getScore();
}
console.log(frms[0].getScore(), 
	frms[1].getScore(), frms[2].getScore(), 
	frms[3].getScore(), frms[4].getScore(), 
	frms[5].getScore(), frms[6].getScore(), 
	frms[7].getScore(), frms[8].getScore(), 
	frms[9].getScore(), total )