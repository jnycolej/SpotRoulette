const shortid = require('shortid');

const destinations = [
    "Restaurant A",
    "Bar B",
    "Attraction C"
];

class SpotRoulette{
    constructor(){
        this.roulettes = {};
    }

    create(start, end){
        const number = Math.floor(Math.random() * (end - start + 1)) + start;

        const id = shortid.generate();

        const roulette = {
            number: number,
            start: start,
            end: end,
            over: false
        };

        this.roulettes[id] = roulette;

        console.log(this.roulettes);

        return id;
    }

    get(id){
        if(this.roulettes[id]){
            const {number, ...data} = this.roulettes[id];
            return data;
        }
        else {
            return null;
        }
    }
}

module.exports = new SpotRoulette();