const roulette = require('../models/spotrou.model');

class Controllers {
    test(request, response){
        response.json({'success': true});
    }

    newRoulette(request, response){
        const {start, end} = request.query;
        const id = roulette.create(start, end);
        response.json({'success':true, 'rouletteID': id});
    }

    getRoulette(request, response){
        const id = request.params.id;
        const data = roulette.get(id)
        if(data){
            data["success"] = true;
            response.json(data);
        }
        else{
            response.json({"success": false})
        }
    }
}

module.exports = new Controllers();