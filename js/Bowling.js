var Frame = /** @class */ (function () {
    function Frame() {
        this.score = Math.floor(Math.random() * 31);
    }
    Frame.prototype.getScore = function () {
        return this.score;
    };
    return Frame;
}());
var frms = [];
var total = 0;
for (var idx = 0; idx < 10; idx++) {
    var framex = new Frame();
    frms[idx] = framex;
    total += frms[idx].getScore();
}
console.log(frms[0].getScore(), frms[1].getScore(), frms[2].getScore(), frms[3].getScore(), frms[4].getScore(), frms[5].getScore(), frms[6].getScore(), frms[7].getScore(), frms[8].getScore(), frms[9].getScore(), total);
