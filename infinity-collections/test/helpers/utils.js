const web3 = require("web3");
const start_end = [[1,160],[161,304],[305,430],[431,545],[546,660],[661,755],[756,850],[851,923],[924,986],[987,1041],[1042,1090]];
async function shouldThrow(promise) {
    try {
        await promise;
        assert(true);
    }
    catch (err) {
        return;
    }
    assert(false, "The contract did not throw.");
    
    }
    function getValue(amount){
        var tokens = web3.utils.toWei(amount.toString(), 'ether')
        var bntokens = web3.utils.toBN(tokens);
        return bntokens;
    }
    function getCorrectFees(sizeArr,correctFees){
        let result = 0;
        for(let i = 0; i < sizeArr.length; i++){
            result += correctFees[sizeArr[i]];
        }
        //result = Math.ceil(result * 10000) / 10000;
        result = Number(result.toFixed(4));
        return result;
    }
    function getMixedArr(field, quantity, allSlots){
        let result = [];
        for(let i = 0; i < quantity;i++){
            j = i % allSlots.length;
            if(field == 'description'){
                result.push(allSlots[j].description);
            } else if(field == 'imgUrl'){
                result.push(allSlots[j].imgUrl);
            }else if(field == 'size'){
                result.push(allSlots[j].size);
            }else if(field == 'name'){
                result.push(allSlots[j].name);
            }  else{
                result.push(allSlots[j].tokenURI);
            }   
        }
        return result;
    }

    function getArrSameSize(field, quantity, size, allSlots){
        let result = [];
        for(let i = 0; i < quantity;i++){
            if(field == 'description'){
                result.push(allSlots[size].description);
            } else if(field == 'imgUrl'){
                result.push(allSlots[size].imgUrl);
            }else if(field == 'size'){
                result.push(allSlots[size].size);
            }else if(field == 'name'){
                result.push(allSlots[size].name);
            } else{
                result.push(allSlots[size].tokenURI);
            }   
        }
        return result;
    }

    function houseIsCorrect(id,house){
        id = Number(id.toString())
        const _idOffset = id +1;
        house = Number(house.toString());
        let _house = null;
        for(let i = 0; i < start_end.length; i++){
            let house_start_end = start_end[i];
            let _start = house_start_end[0];
            let _end = house_start_end[1];
            if(_idOffset  >= _start && _idOffset <= _end){
                _house = i +1;
            }
        }
        return _house == house;
    }

    function roomIsCorrect(id,room){
        id = Number(id.toString())
        const _idOffset = id +1;
        room= Number(room.toString());
        let _room = null;

        const _idsRoomOne = [
            [1,28], [161,182], [285,288], [300,304],
            [305,335], [431,448], [529,532], [542,545], 
            [546,563], [644,647], [657,660], [661,674], 
            [740,743], [752,755], [756,769], [835,838], 
            [847,850], [851,866], [917,918], [924,935], 
            [936,939], [987,994], [1035,1036], [1042,1052]
        ];

        const _idsRoomTwo = [
            [29,50], [89,106], [137,144], [183,194],
            [195,202], [233,246], [273,278], [336,366], 
            [413,416], [449,464], [489,499], [521,524], 
            [564,579], [604,614], [636,639], [675,686], 
            [706,714], [732,735], [770,781], [801,809], 
            [827,830], [867,876], [893,899],[913,914],
            [940,958],[995,1002], [1014,1019], [1031,1032],
            [1053,1065], [1083,1084]
        ];

         const _idsRoomThree = [
            [51,60], [107,136], [145,152], [203,210],
            [247,272], [279,284], [367,372], [391,412], 
            [417,420], [465,470], [500,520], [525,528], 
            [580,585], [615,635], [640,643], [687,691], 
            [715,731], [736,739], [782,786], [810,826], 
            [831,834], [877,880], [900,912], [915,916],
            [959,963],[972,982], [1003,1005], [1020,1030], [1033,1034],
         [1066,1072], [1079,1082], [1085,1086]
        ];

        const _idsRoomFour = [
            [61,88], [153,160], [211,232], [289,299],
            [373,390], [421,430], [471,488], [533,541], 
            [586,603], [648,656], [692,705], [744,751], 
            [580,585], [615,635], [640,643], [687,691], 
            [787,800], [839,846], [881,892], [919,923], 
            [964,971], [983,986],  [1006,1013],[1037,1041],
            [1073,1078], [1087,1090]
        ];

        for(let i = 0; i < _idsRoomOne.length; i++){
            const tuple = _idsRoomOne[i];
            if(_idOffset >= tuple[0] && _idOffset <= tuple[1]){
                _room = 1;
            }
            if(_idOffset < tuple[0]){ // no need to keep searching. not in this room
                break;
            }

        }

        for(let i = 0; i < _idsRoomTwo.length; i++){
            const tuple = _idsRoomTwo[i];
            if(_idOffset >= tuple[0] && _idOffset <= tuple[1]){
                _room = 2;
            }
            if(_idOffset < tuple[0]){ // no need to keep searching. not in this room
                break;
            }

        }

        for(let i = 0; i < _idsRoomThree.length; i++){
            const tuple = _idsRoomThree[i];
            if(_idOffset >= tuple[0] && _idOffset <= tuple[1]){
                _room = 3;
            }
            if(_idOffset < tuple[0]){ // no need to keep searching. not in this room
                break;
            }

        }

        for(let i = 0; i < _idsRoomFour.length; i++){
            const tuple = _idsRoomFour[i];
            if(_idOffset >= tuple[0] && _idOffset <= tuple[1]){
                _room =  4;
            }
            if(_idOffset < tuple[0]){ // no need to keep searching. not in this room
                break;
            }

        }

        if(_room == room){
            return true;
        } else{
            console.log(_idOffset, _room, room);
            return false;
        }
  


    }

    function toBigNumber(num){
       return web3.utils.toBN(num);
    }
    
    
    module.exports = {
        shouldThrow,
        getValue,
        getMixedArr,
        getCorrectFees,
        getArrSameSize,
        houseIsCorrect,
        roomIsCorrect,
        toBigNumber
    };
    