const TheInfinityCollections= artifacts.require("TheInfinityCollections");
const utils = require("./helpers/utils");
const { time } = require("@openzeppelin/test-helpers");
const web3 = require("web3");
const xsSize = 0;
const sSize = 1;
const mSize = 2;
const lSize = 3;
const xlSize = 4;
const xxlSize = 5;
const ultraSize = 6;
const kingSize = 7;
const xsAlloted = 160;
const sAlloted = 200;
const mAlloted = 300;
const lAlloted = 200;
const xlAlloted = 100;
const xxlAlloted = 100;
const ultraAlloted = 28;
const kingAlloted = 2;
const maxMintTransaction = 20;
const allotedArr = [160,200,300,200,100,100,28,2];

const correctFees = [.0001, .0001, .0001 , .0001 , .0001 , .0001 , .0001 ,.0001 ]


const slots = [{
                name: 'xs name',
                description: 'xs test description',
                imgUrl: 'https://i.pinimg.com/736x/0d/4c/a9/0d4ca9ef0a9ab8eefbf0854e7e6b9ee6.jpg',
                size: xsSize,
                tokenURI: 'https://theinfinitycollections.mypinata.cloud/ipfs/QmRQqGVguRt6wMHnwYCWW6b3RvQtugBs3LrvCUvsiiRqdS'
                },
                {
                name: 's name',
                description: 's test description',
                imgUrl: 'https://i.pinimg.com/736x/0d/4c/a9/0d4ca9ef0a9ab8eefbf0854e7e6b9ee6.jpg',
                size: sSize,
                tokenURI: 'https://theinfinitycollections.mypinata.cloud/ipfs/QmRQqGVguRt6wMHnwYCWW6b3RvQtugBs3LrvCUvsiiRqdS'
                },
                {
                name: 'm name',
                description: 'm test description',
                imgUrl: 'https://i.pinimg.com/736x/0d/4c/a9/0d4ca9ef0a9ab8eefbf0854e7e6b9ee6.jpg',
                size: mSize,
                tokenURI: 'https://theinfinitycollections.mypinata.cloud/ipfs/QmRQqGVguRt6wMHnwYCWW6b3RvQtugBs3LrvCUvsiiRqdS'
                },
                {
                name: 'l name',
                description: 'l test description',
                imgUrl: 'https://i.pinimg.com/736x/0d/4c/a9/0d4ca9ef0a9ab8eefbf0854e7e6b9ee6.jpg',
                size: lSize,
                tokenURI: 'https://theinfinitycollections.mypinata.cloud/ipfs/QmRQqGVguRt6wMHnwYCWW6b3RvQtugBs3LrvCUvsiiRqdS'
                },
                {
                name: 'xl name',
                description: 'xl test description',
                imgUrl: 'https://i.pinimg.com/736x/0d/4c/a9/0d4ca9ef0a9ab8eefbf0854e7e6b9ee6.jpg',
                size: xlSize,
                tokenURI: 'https://theinfinitycollections.mypinata.cloud/ipfs/QmRQqGVguRt6wMHnwYCWW6b3RvQtugBs3LrvCUvsiiRqdS'
                },
                {
                name: 'xxl name',
                description: 'xxl test description',
                imgUrl: 'https://i.pinimg.com/736x/0d/4c/a9/0d4ca9ef0a9ab8eefbf0854e7e6b9ee6.jpg',
                size: xxlSize,
                tokenURI: 'https://theinfinitycollections.mypinata.cloud/ipfs/QmRQqGVguRt6wMHnwYCWW6b3RvQtugBs3LrvCUvsiiRqdS'
                },
                {
                name: 'ultra name',
                description: 'ultra test description',
                imgUrl: 'https://i.pinimg.com/736x/0d/4c/a9/0d4ca9ef0a9ab8eefbf0854e7e6b9ee6.jpg',
                size: ultraSize,
                tokenURI: 'https://theinfinitycollections.mypinata.cloud/ipfs/QmRQqGVguRt6wMHnwYCWW6b3RvQtugBs3LrvCUvsiiRqdS'
                },
                {
                name: 'king name',
                description: 'king test description',
                imgUrl: 'https://i.pinimg.com/736x/0d/4c/a9/0d4ca9ef0a9ab8eefbf0854e7e6b9ee6.jpg',
                size: kingSize,
                tokenURI: 'https://theinfinitycollections.mypinata.cloud/ipfs/QmRQqGVguRt6wMHnwYCWW6b3RvQtugBs3LrvCUvsiiRqdS'
                },
            

            ];




contract("TheInfinityCollections", (accounts) => {
    let [alice, bob] = accounts;
    let contractInstance;
    beforeEach(async () => {
        contractInstance = await TheInfinityCollections.new();
    });


    it("initialize a slot", async () => { 
        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // token URI
        assert.equal(result.logs[1].args.name,nameArr[0]); // name
    })

    it("initialize multiple", async () => { 
        let nameArr = utils.getMixedArr('name',2,slots);
        let descriptionArr = utils.getMixedArr('description',2,slots);
        let imgUrlArr = utils.getMixedArr('imgUrl',2,slots);
        let sizeArr = utils.getMixedArr('size',2,slots);
        let tokenURIArr = utils.getMixedArr('tokenURI',2,slots);
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(utils.getCorrectFees(sizeArr,correctFees))});
        assert.equal(result.receipt.status, true);
        let eventIndex = 1;
        for(let i = 0; i < descriptionArr.length; i++ ){
            assert.equal(result.logs[eventIndex].args.description,descriptionArr[i]); // description
            assert.equal(result.logs[eventIndex].args.imgUrl,imgUrlArr[i]); // imgUrl
            assert.equal(result.logs[eventIndex].args.size,sizeArr[i]); // size
            assert.equal(result.logs[eventIndex].args.tokenURI,tokenURIArr[i]); // size
            assert.equal(result.logs[eventIndex].args.name,nameArr[i]); // size
            eventIndex +=2;
        }
    })


    it("rejects bid for xs that is too little", async () => { 
        let size = 0;
        let quantity = 1;
        let nameArr = utils.getArrSameSize('name',quantity,size,slots);
        let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
        let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(.00001)}));
    })


    it("rejects bid for s that is too little", async () => { 
        let size = 1;
        let quantity = 1;
        let nameArr = utils.getArrSameSize('name',quantity,size,slots);
        let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
        let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(.00001)}));
    })


    it("rejects bid for m that is too little", async () => { 
        let size = 2;
        let quantity = 1;
        let nameArr = utils.getArrSameSize('name',quantity,size,slots);
        let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
        let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(.00001)}));
    })

    it("rejects bid for l that is too little", async () => { 
        let size = 3;
        let quantity = 1;
        let nameArr = utils.getArrSameSize('name',quantity,size,slots);
        let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
        let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(.00001)}));
    })

    it("rejects bid for xl that is too little", async () => { 
        let size = 4;
        let quantity = 1;
        let nameArr = utils.getArrSameSize('name',quantity,size,slots);
        let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
        let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(.00001)}));
    })

    it("rejects bid for xxl that is too little", async () => { 
        let size = 5;
        let quantity = 1;
        let nameArr = utils.getArrSameSize('name',quantity,size,slots);
        let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
        let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(.00001)}));
    })

    it("rejects bid for ultra that is too little", async () => { 
        let size = 6;
        let quantity = 1;
        let nameArr = utils.getArrSameSize('name',quantity,size,slots);
        let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
        let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(.00001)}));
    })

    it("rejects bid for king that is too little", async () => { 
        let size = 7;
        let quantity = 1;
        let nameArr = utils.getArrSameSize('name',quantity,size,slots);
        let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
        let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(.00001)}));
    })



    it("limits amount of xs slots to 160", async () => { 
        let size = 0;
        let created = 0;
        let remaining = allotedArr[size];
        while(created < allotedArr[size]){
            let quantity;
            if (remaining > maxMintTransaction){
                quantity = maxMintTransaction;
            } else{
                quantity = remaining;
            }
            let nameArr = utils.getArrSameSize('name',quantity,size,slots);
            let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
            let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
            let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
            let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
            let amount = utils.getValue(utils.getCorrectFees(sizeArr,correctFees));
            const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount});
            assert.equal(result.receipt.status, true);
            let eventIndex = 1;
            for(let i = 0; i < descriptionArr.length; i++ ){
                assert.equal(result.logs[eventIndex].args.name,nameArr[i]); // name
                assert.equal(result.logs[eventIndex].args.description,descriptionArr[i]); // description
                assert.equal(result.logs[eventIndex].args.imgUrl,imgUrlArr[i]); // imgUrl
                assert.equal(result.logs[eventIndex].args.size,sizeArr[i]); // size
                assert.equal(result.logs[eventIndex].args.tokenURI,tokenURIArr[i]); // token URI
                eventIndex += 2
            }

            created += quantity;
            remaining -= quantity;
        }
        let nameArr = utils.getArrSameSize('name',1,size,slots);
        let descriptionArr = utils.getArrSameSize('description',1,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',1,size,slots);
        let sizeArr = utils.getArrSameSize('size',1,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',1,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(utils.getCorrectFees(sizeArr,correctFees))}));
    })


    it("limits amount of s slots to 200", async () => { 
        let size = 1;
        let created = 0;
        let remaining = allotedArr[size];
        while(created < allotedArr[size]){
            let quantity;
            if (remaining > maxMintTransaction){
                quantity = maxMintTransaction;
            } else{
                quantity = remaining;
            }
            let nameArr = utils.getArrSameSize('name',quantity,size,slots);
            let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
            let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
            let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
            let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
            let amount = utils.getValue(utils.getCorrectFees(sizeArr,correctFees));
            const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount});
            assert.equal(result.receipt.status, true);
            let eventIndex = 1;
            for(let i = 0; i < descriptionArr.length; i++ ){
                assert.equal(result.logs[eventIndex].args.name,nameArr[i]); // name
                assert.equal(result.logs[eventIndex].args.description,descriptionArr[i]); // description
                assert.equal(result.logs[eventIndex].args.imgUrl,imgUrlArr[i]); // imgUrl
                assert.equal(result.logs[eventIndex].args.size,sizeArr[i]); // size
                assert.equal(result.logs[eventIndex].args.tokenURI,tokenURIArr[i]); // token URI
                eventIndex += 2
            }

            created += quantity;
            remaining -= quantity;
        }
        let nameArr = utils.getArrSameSize('name',1,size,slots);
        let descriptionArr = utils.getArrSameSize('description',1,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',1,size,slots);
        let sizeArr = utils.getArrSameSize('size',1,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',1,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(utils.getCorrectFees(sizeArr,correctFees))}));
    }).timeout(500000);


    it("limits amount of m slots to 300", async () => { 
        let size = 2;
        let created = 0;
        let remaining = allotedArr[size];
        while(created < allotedArr[size]){
            let quantity;
            if (remaining > maxMintTransaction){
                quantity = maxMintTransaction;
            } else{
                quantity = remaining;
            }
            let nameArr = utils.getArrSameSize('name',quantity,size,slots);
            let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
            let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
            let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
            let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
            let amount = utils.getValue(utils.getCorrectFees(sizeArr,correctFees));
            const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount});
            assert.equal(result.receipt.status, true);
            let eventIndex = 1;
            for(let i = 0; i < descriptionArr.length; i++ ){
                assert.equal(result.logs[eventIndex].args.name,nameArr[i]); // name
                assert.equal(result.logs[eventIndex].args.description,descriptionArr[i]); // description
                assert.equal(result.logs[eventIndex].args.imgUrl,imgUrlArr[i]); // imgUrl
                assert.equal(result.logs[eventIndex].args.size,sizeArr[i]); // size
                assert.equal(result.logs[eventIndex].args.tokenURI,tokenURIArr[i]); // token URI
                eventIndex += 2
            }

            created += quantity;
            remaining -= quantity;
        }
        let nameArr = utils.getArrSameSize('name',1,size,slots);
        let descriptionArr = utils.getArrSameSize('description',1,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',1,size,slots);
        let sizeArr = utils.getArrSameSize('size',1,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',1,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(utils.getCorrectFees(sizeArr,correctFees))}));
    }).timeout(500000);


    it("limits amount of l slots to 200", async () => { 
        let size = 3;
        let created = 0;
        let remaining = allotedArr[size];
        while(created < allotedArr[size]){
            let quantity;
            if (remaining > maxMintTransaction){
                quantity = maxMintTransaction;
            } else{
                quantity = remaining;
            }
            let nameArr = utils.getArrSameSize('name',quantity,size,slots);
            let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
            let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
            let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
            let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
            let amount = utils.getValue(utils.getCorrectFees(sizeArr,correctFees));
            const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount});
            assert.equal(result.receipt.status, true);
            let eventIndex = 1;
            for(let i = 0; i < descriptionArr.length; i++ ){
                assert.equal(result.logs[eventIndex].args.name,nameArr[i]); // name
                assert.equal(result.logs[eventIndex].args.description,descriptionArr[i]); // description
                assert.equal(result.logs[eventIndex].args.imgUrl,imgUrlArr[i]); // imgUrl
                assert.equal(result.logs[eventIndex].args.size,sizeArr[i]); // size
                assert.equal(result.logs[eventIndex].args.tokenURI,tokenURIArr[i]); // token URI
                eventIndex += 2
            }

            created += quantity;
            remaining -= quantity;
        }
        let nameArr = utils.getArrSameSize('name',1,size,slots);
        let descriptionArr = utils.getArrSameSize('description',1,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',1,size,slots);
        let sizeArr = utils.getArrSameSize('size',1,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',1,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(utils.getCorrectFees(sizeArr,correctFees))}));
    }).timeout(500000);

    it("limits amount of xl slots to 100", async () => { 
        let size = 4;
        let created = 0;
        let remaining = allotedArr[size];
        while(created < allotedArr[size]){
            let quantity;
            if (remaining > maxMintTransaction){
                quantity = maxMintTransaction;
            } else{
                quantity = remaining;
            }
            let nameArr = utils.getArrSameSize('name',quantity,size,slots);
            let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
            let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
            let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
            let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
            let amount = utils.getValue(utils.getCorrectFees(sizeArr,correctFees));
            const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount});
            assert.equal(result.receipt.status, true);
            let eventIndex = 1;
            for(let i = 0; i < descriptionArr.length; i++ ){
                assert.equal(result.logs[eventIndex].args.name,nameArr[i]); // name
                assert.equal(result.logs[eventIndex].args.description,descriptionArr[i]); // description
                assert.equal(result.logs[eventIndex].args.imgUrl,imgUrlArr[i]); // imgUrl
                assert.equal(result.logs[eventIndex].args.size,sizeArr[i]); // size
                assert.equal(result.logs[eventIndex].args.tokenURI,tokenURIArr[i]); // token URI
                eventIndex += 2
            }

            created += quantity;
            remaining -= quantity;
        }
        let nameArr = utils.getArrSameSize('name',1,size,slots);
        let descriptionArr = utils.getArrSameSize('description',1,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',1,size,slots);
        let sizeArr = utils.getArrSameSize('size',1,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',1,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(utils.getCorrectFees(sizeArr,correctFees))}));
    })

    it("limits amount of xxl slots to 100", async () => { 
        let size = 5;
        let created = 0;
        let remaining = allotedArr[size];
        while(created < allotedArr[size]){
            let quantity;
            if (remaining > maxMintTransaction){
                quantity = maxMintTransaction;
            } else{
                quantity = remaining;
            }
            let nameArr = utils.getArrSameSize('name',quantity,size,slots);
            let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
            let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
            let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
            let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
            let amount = utils.getValue(utils.getCorrectFees(sizeArr,correctFees));
            const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount});
            assert.equal(result.receipt.status, true);
            let eventIndex = 1;
            for(let i = 0; i < descriptionArr.length; i++ ){
                assert.equal(result.logs[eventIndex].args.name,nameArr[i]); // name
                assert.equal(result.logs[eventIndex].args.description,descriptionArr[i]); // description
                assert.equal(result.logs[eventIndex].args.imgUrl,imgUrlArr[i]); // imgUrl
                assert.equal(result.logs[eventIndex].args.size,sizeArr[i]); // size
                assert.equal(result.logs[eventIndex].args.tokenURI,tokenURIArr[i]); // token URI
                eventIndex += 2
            }

            created += quantity;
            remaining -= quantity;
        }
        let nameArr = utils.getArrSameSize('name',1,size,slots);
        let descriptionArr = utils.getArrSameSize('description',1,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',1,size,slots);
        let sizeArr = utils.getArrSameSize('size',1,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',1,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(utils.getCorrectFees(sizeArr,correctFees))}));
    })

    
    it("limits amount of ultra large slots to 28", async () => { 
        let size = 6;
        let created = 0;
        let remaining = allotedArr[size];
        while(created < allotedArr[size]){
            let quantity;
            if (remaining > maxMintTransaction){
                quantity = maxMintTransaction;
            } else{
                quantity = remaining;
            }
            let nameArr = utils.getArrSameSize('name',quantity,size,slots);
            let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
            let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
            let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
            let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
            let amount = utils.getValue(utils.getCorrectFees(sizeArr,correctFees));
            const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount});
            assert.equal(result.receipt.status, true);

            let eventIndex = 1;
            for(let i = 0; i < descriptionArr.length; i++ ){
                assert.equal(result.logs[eventIndex].args.name,nameArr[i]); // name
                assert.equal(result.logs[eventIndex].args.description,descriptionArr[i]); // description
                assert.equal(result.logs[eventIndex].args.imgUrl,imgUrlArr[i]); // imgUrl
                assert.equal(result.logs[eventIndex].args.size,sizeArr[i]); // size
                assert.equal(result.logs[eventIndex].args.tokenURI,tokenURIArr[i]); // token URI
                eventIndex += 2
            }

            created += quantity;
            remaining -= quantity;
        }
        let nameArr = utils.getArrSameSize('name',1,size,slots);
        let descriptionArr = utils.getArrSameSize('description',1,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',1,size,slots);
        let sizeArr = utils.getArrSameSize('size',1,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',1,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(utils.getCorrectFees(sizeArr,correctFees))}));

    })

    it("limits amount of king level slots to 2", async () => { 
        let size = 7;
        let created = 0;
        let remaining = allotedArr[size];
        while(created < allotedArr[size]){
            let quantity;
            if (remaining > maxMintTransaction){
                quantity = maxMintTransaction;
            } else{
                quantity = remaining;
            }
            let nameArr = utils.getArrSameSize('name',quantity,size,slots);
            let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
            let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
            let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
            let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
            let amount = utils.getValue(utils.getCorrectFees(sizeArr,correctFees));
            const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount});
            assert.equal(result.receipt.status, true);
            let eventIndex = 1;
            for(let i = 0; i < descriptionArr.length; i++ ){
                assert.equal(result.logs[eventIndex].args.name,nameArr[i]); // name
                assert.equal(result.logs[eventIndex].args.description,descriptionArr[i]); // description
                assert.equal(result.logs[eventIndex].args.imgUrl,imgUrlArr[i]); // imgUrl
                assert.equal(result.logs[eventIndex].args.size,sizeArr[i]); // size
                assert.equal(result.logs[eventIndex].args.tokenURI,tokenURIArr[i]); // token URI
                eventIndex += 2
            }

            created += quantity;
            remaining -= quantity;
        }
        let nameArr = utils.getArrSameSize('name',1,size,slots);
        let descriptionArr = utils.getArrSameSize('description',1,size,slots);
        let imgUrlArr = utils.getArrSameSize('imgUrl',1,size,slots);
        let sizeArr = utils.getArrSameSize('size',1,size,slots);
        let tokenURIArr = utils.getArrSameSize('tokenURI',1,size,slots);
        await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice, value: utils.getValue(utils.getCorrectFees(sizeArr,correctFees))}));
    })

    


    it("medium: passes a more robust test checking limits", async () => { 
        let created = [0,0,0,0,0,0,0,0]; // array to hold all that's been created
        const alloted = [xsAlloted,sAlloted,mAlloted,lAlloted,xlAlloted,xxlAlloted,ultraAlloted,kingAlloted];
        while((created[0] <= xsAlloted) || (created[1] <= sAlloted) || (created[2] <= mAlloted) || (created[3] <= lAlloted) || (created[4] <= xlAlloted) || (created[5] <= xxlAlloted) || (created[6] <= ultraAlloted) || (created[7] <= kingAlloted)){
            for(let i = 0; i < 8; i++){
                let flag = false;
                let size = i;
                let quantity = 1;
                let nameArr = utils.getArrSameSize('name',quantity,size,slots);
                let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
            let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
            let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
            let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
            let amount = utils.getValue(utils.getCorrectFees(sizeArr,correctFees));
                if(created[i] >= alloted[i]){
                    flag = true;
                }
                if(flag == true){
                    await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount}));
                } else{
                    const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount});
                    assert.equal(result.receipt.status, true);
                    assert.equal(result.logs[1].args.name,nameArr[0]); // name
                    assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
                    assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
                    assert.equal(result.logs[1].args.size,sizeArr[0]); // size
                    assert.equal(result.logs[1].args.tokenURI, tokenURIArr[0]); // tokenURI
                    //assert.equal(utils.houseIsCorrect(result.logs[0].args.id,result.logs[0].args.house),true); // house number
                    //assert.equal(utils.roomIsCorrect(result.logs[0].args.id,result.logs[0].args.room),true); // room number
                }
                created[i] = created[i] +1;
            }
        }
    }).timeout(500000);

    


    it("hard: passes a more robust test checking limits", async () => { 
        let created = [0,0,0,0,0,0,0,0]; // array to hold all that's been created
        const alloted = [xsAlloted,sAlloted,mAlloted,lAlloted,xlAlloted,xxlAlloted,ultraAlloted,kingAlloted];
        while((created[0] < xsAlloted) || (created[1] < sAlloted) || (created[2] < mAlloted) || (created[3] < lAlloted) || (created[4] < xlAlloted) || (created[5] < xxlAlloted) || (created[6] < ultraAlloted) || (created[7] < kingAlloted)){
            for(let i = 0; i < 8; i++){
                let flag = false;
                let size = i;
                let quantity = allotedArr[size];
                if (allotedArr[size] > maxMintTransaction){
                    const leftover = allotedArr[size] - created[i];
                    if(leftover < maxMintTransaction){
                        quantity = leftover;
                    }else{
                        quantity = maxMintTransaction;
                    }
                }
                let nameArr = utils.getArrSameSize('name',quantity,size,slots);
                let descriptionArr = utils.getArrSameSize('description',quantity,size,slots);
                let imgUrlArr = utils.getArrSameSize('imgUrl',quantity,size,slots);
                let sizeArr = utils.getArrSameSize('size',quantity,size,slots);
                let tokenURIArr = utils.getArrSameSize('tokenURI',quantity,size,slots);
                let amount = utils.getValue(utils.getCorrectFees(sizeArr,correctFees));
                if(created[i] >= alloted[i]){
                    flag = true;
                }
                if(flag == true){
                    await utils.shouldThrow(contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount}));
                } else{
                    const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: amount});
                    assert.equal(result.receipt.status, true);
                    assert.equal(result.logs[1].args.name,nameArr[0]); // description
                    assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
                    assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
                    assert.equal(result.logs[1].args.size,sizeArr[0]); // size
                    assert.equal(result.logs[1].args.tokenURI, tokenURIArr[0]); // tokenURI
                    //assert.equal(utils.houseIsCorrect(result.logs[0].args.id,result.logs[0].args.house),true); // house number
                    //assert.equal(utils.roomIsCorrect(result.logs[0].args.id,result.logs[0].args.room),true); // room number
                }
                created[i] = created[i] + quantity;
            }
        }
    }).timeout(500000);

 
    it("should allow editing of description", async () => { 
        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name,nameArr[0]); // name
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
        const newDescription = 'new description';
        const updatedResult = await contractInstance.changeSlotInfo(result.logs[1].args.id,result.logs[1].args.name, newDescription,result.logs[1].args.imgUrl,result.logs[1].args.tokenURI,{from: alice});
        assert.equal(updatedResult.logs[0].args.description,newDescription); // imgUrl
        const mintedResult = await contractInstance.getSlots({from: alice});
        const arrIDs = mintedResult[4];
        let index;
        for(let i = 0; i < arrIDs.length; i++){
            if(Number(arrIDs[i].toString()) == Number(result.logs[1].args.id.toString())){
                index = i;
                break;
            }
        }
        assert.equal(mintedResult[1][index],newDescription); // tokenURI
    })

    it("new token uri should be updated", async () => { 
        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name,nameArr[0]); // name
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
        const newDescription = 'new description';
        const newTokenURI = "https://theinfinitycollections.mypinata.cloud/ipfs/QmboQtwapDW84pNJn7DQQtZYbcaYmgwrxxh2fj41kigMpV/kanye-explicit.jpeg";
        const updatedResult = await contractInstance.changeSlotInfo(result.logs[1].args.id,result.logs[1].args.name, newDescription,result.logs[1].args.imgUrl,newTokenURI,{from: alice});
        assert.equal(updatedResult.logs[0].args.description,newDescription); // imgUrl
        assert.equal(updatedResult.logs[0].args.tokenURI,newTokenURI); // tokenURI
    })

    it("new name should be updated", async () => { 
        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name,nameArr[0]); // name
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
        const newDescription = 'new description';
        const newName = "new name";
        const updatedResult = await contractInstance.changeSlotInfo(result.logs[1].args.id,newName, newDescription,result.logs[1].args.imgUrl,result.logs[1].args.tokenURI,{from: alice});
        assert.equal(updatedResult.logs[0].args.description,newDescription); // imgUrl
        assert.equal(updatedResult.logs[0].args.name,newName); // name
    })


    it("shouldn't allow to edit more than twice", async () => { 
        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name,nameArr[0]); // name
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI


        const firstUpdate= 'new description';
        const firstUpdateResult = await contractInstance.changeSlotInfo(result.logs[1].args.id,result.logs[1].args.name, firstUpdate,result.logs[1].args.imgUrl,result.logs[1].args.tokenURI,{from: alice});
        assert.equal(firstUpdateResult.logs[0].args.description,firstUpdate); // imgUrl

        const secondUpdate= 'new description';
        const secondUpdateResult = await contractInstance.changeSlotInfo(result.logs[1].args.id,result.logs[1].args.name, secondUpdate,result.logs[1].args.imgUrl,result.logs[1].args.tokenURI,{from: alice});
        assert.equal(secondUpdateResult.logs[0].args.description,secondUpdate); // imgUrl

        const thirdUpdate= 'third description';
        await utils.shouldThrow(contractInstance.changeSlotInfo(result.logs[1].args.id,result.logs[1].args.name, thirdUpdate,result.logs[1].args.imgUrl,result.logs[1].args.tokenURI,{from: alice}));
    })





    it("executes one step transfer correctly", async () => { 
        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name,nameArr[0]); // description
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
        const slotId = result.logs[1].args.id;
        await contractInstance.transferFrom(alice, bob, slotId, {from: alice});
        const newOwner = await contractInstance.ownerOf(slotId);
        assert.equal(newOwner, bob);
    })

    
    it("should approve and then transfer a slot when the approved address calls transferFrom", async () => {
        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
        const slotId = result.logs[1].args.id;
        await contractInstance.approve(bob, slotId, {from: alice});
        await contractInstance.transferFrom(alice, bob, slotId, {from: bob});
        const newOwner = await contractInstance.ownerOf(slotId);
        //TODO: replace with expect
        assert.equal(newOwner,bob);
    })

    it("ability to edit description resets after transfer", async () => { 
        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name,nameArr[0]); // description
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
        const slotId = result.logs[1].args.id;
        const firstUpdate= 'new description';
        const firstUpdateResult = await contractInstance.changeSlotInfo(slotId,result.logs[1].args.name, firstUpdate,result.logs[1].args.imgUrl,result.logs[1].args.tokenURI,{from: alice});
        assert.equal(firstUpdateResult.logs[0].args.description,firstUpdate); // imgUrl

        const secondUpdate= 'new description';
        const secondUpdateResult = await contractInstance.changeSlotInfo(slotId,result.logs[1].args.name, secondUpdate,result.logs[1].args.imgUrl,result.logs[1].args.tokenURI,{from: alice});
        assert.equal(secondUpdateResult.logs[0].args.description,secondUpdate); // imgUrl

        const thirdUpdate= 'third description';
        await utils.shouldThrow(contractInstance.changeSlotInfo(slotId,result.logs[1].args.name, thirdUpdate,result.logs[1].args.imgUrl,result.logs[1].args.tokenURI,{from: alice}));

        await contractInstance.transferFrom(alice, bob, slotId, {from: alice});
        const newOwner = await contractInstance.ownerOf(slotId);
        assert.equal(newOwner, bob);

        const firstUpdateBob= 'new description';
        const firstUpdateResultBob = await contractInstance.changeSlotInfo(slotId,result.logs[1].args.name, firstUpdateBob,result.logs[1].args.imgUrl,result.logs[1].args.tokenURI,{from: bob});
        assert.equal(firstUpdateResultBob.logs[0].args.description,firstUpdateBob); // imgUrl

        const secondUpdateBob= 'new description';
        const secondUpdateResultBob = await contractInstance.changeSlotInfo(slotId,result.logs[1].args.name, secondUpdateBob,result.logs[1].args.imgUrl,result.logs[1].args.tokenURI,{from: bob});
        assert.equal(secondUpdateResultBob.logs[0].args.description,secondUpdateBob); // imgUrl

        const thirdUpdateBob= 'third description';
        await utils.shouldThrow(contractInstance.changeSlotInfo(slotId,result.logs[1].args.name, thirdUpdateBob,result.logs[1].args.imgUrl,result.logs[1].args.tokenURI,{from: bob}));
    })




    it("tokenURI function working properly", async () => {
        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name,nameArr[0]); // name
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
        const slotId = result.logs[1].args.id;
        const tokenURI = await contractInstance.tokenURI(slotId);
        assert.equal(tokenURI,tokenURIArr[0]);
    })

    it("should let owner set a token URI", async () => {
        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name,nameArr[0]); // name
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
        const slotId = result.logs[1].args.id;
        const tokenURI = await contractInstance.tokenURI(slotId);
        assert.equal(tokenURI,tokenURIArr[0]);
        const newTokenURI = "newtokenuri";
        await contractInstance.setTokenURI(slotId,newTokenURI,{from:alice});
        const newTokenURIResult = await contractInstance.tokenURI(slotId);
        assert.equal(newTokenURIResult,newTokenURI);
    })

    it("shouldn't let any one other than owner set a token URI", async () => {
        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name,nameArr[0]); // name
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
        const slotId = result.logs[1].args.id;
        const tokenURI = await contractInstance.tokenURI(slotId);
        assert.equal(tokenURI,tokenURIArr[0]);
        const newTokenURI = "newtokenuri";
        await utils.shouldThrow(contractInstance.setTokenURI(slotId,newTokenURI,{from:bob}));
    })



 
    it("update freeze stamp", async () => { 
        const timeStamp = 1633660469 // Fri Oct 08 2021 02:34:29 GMT+0000
        const BNtimeStamp = utils.toBigNumber(timeStamp)
        const result = await contractInstance.setInitialFreezeTimeStamp(BNtimeStamp,{from: alice});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[0].args.set, true);
    });

    it("update hibernation period", async () => { 
        const period = 4;
        const BN = utils.toBigNumber(period)
        const result = await contractInstance.setHibernationTimePeriod(BN,{from: alice});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[0].args.set, true);
    });

    it("update sale period", async () => { 
        const period = 1;
        const BN = utils.toBigNumber(period)
        const result = await contractInstance.setSaleTimePeriod(BN,{from: alice});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[0].args.set, true);
    });





it("correctly gets token by id", async () => {
    let nameArr = [slots[0].name];
    let descriptionArr = [slots[0].description];
    let imgUrlArr = [slots[0].imgUrl];
    let sizeArr = [slots[0].size];
    let tokenURIArr = [slots[0].tokenURI];
    const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
    assert.equal(result.receipt.status, true);
    assert.equal(result.logs[1].args.name,nameArr[0]); // name
    assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
    assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
    assert.equal(result.logs[1].args.size,sizeArr[0]); // size
    assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
    const slotId = result.logs[1].args.id;
    const slotZero = await contractInstance.getSlot(slotId);
    assert.equal(result.receipt.status, true);
    assert.equal(result.logs[1].args.name,slotZero['0']); // name
    assert.equal(result.logs[1].args.description,slotZero['1']); // description
    assert.equal(result.logs[1].args.imgUrl,slotZero['2']); // imgUrl
    assert.equal(Number((result.logs[1].args.size)),Number((slotZero['4']).toString())); // size
    assert.equal(result.logs[1].args.tokenURI,slotZero['6']); // tokenURI
})



 /*
    it("should let you transfer if not initial freeze date", async () => { 
        const timeStamp = 1697008049 // Fri Oct 11 2023 02:34:29 GMT+0000
        const BNtimeStamp = utils.toBigNumber(timeStamp)
        const resultFreezeUpdate = await contractInstance.setInitialFreezeTimeStamp(BNtimeStamp,{from: alice});
        assert.equal(resultFreezeUpdate.receipt.status, true);
        assert.equal(resultFreezeUpdate.logs[0].args.set, true);


        const hibernationPeriod = 4;
        const hibernationPeriodBN = utils.toBigNumber(hibernationPeriod)
        const resultHibernationUpdate = await contractInstance.setHibernationTimePeriod(hibernationPeriodBN,{from: alice});
        assert.equal(resultHibernationUpdate.receipt.status, true);
        assert.equal(resultHibernationUpdate.logs[0].args.set, true);

    
        const salePeriod = 1;
        const salePeriodBN = utils.toBigNumber(salePeriod)
        const resultSaleUpdate = await contractInstance.setSaleTimePeriod(salePeriodBN,{from: alice});
        assert.equal(resultSaleUpdate.receipt.status, true);
        assert.equal(resultSaleUpdate.logs[0].args.set, true);

        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name,nameArr[0]); // description
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
        const slotId = result.logs[1].args.id;
        await contractInstance.transferFrom(alice, bob, slotId, {from: alice});
        const newOwner = await contractInstance.ownerOf(slotId);
        assert.equal(newOwner, bob);

    });

    it("easy: shouldn't let you transfer if in hibernation", async () => { 
        const timeStamp = 1633660469 // Fri Oct 08 2021 02:34:29 GMT+0000
        const BNtimeStamp = utils.toBigNumber(timeStamp)
        const resultFreezeUpdate = await contractInstance.setInitialFreezeTimeStamp(BNtimeStamp,{from: alice});
        assert.equal(resultFreezeUpdate.receipt.status, true);
        assert.equal(resultFreezeUpdate.logs[0].args.set, true);


        const hibernationPeriod = 4;
        const hibernationPeriodBN = utils.toBigNumber(hibernationPeriod)
        const resultHibernationUpdate = await contractInstance.setHibernationTimePeriod(hibernationPeriodBN,{from: alice});
        assert.equal(resultHibernationUpdate.receipt.status, true);
        assert.equal(resultHibernationUpdate.logs[0].args.set, true);

    
        const salePeriod = 1;
        const salePeriodBN = utils.toBigNumber(salePeriod)
        const resultSaleUpdate = await contractInstance.setSaleTimePeriod(salePeriodBN,{from: alice});
        assert.equal(resultSaleUpdate.receipt.status, true);
        assert.equal(resultSaleUpdate.logs[0].args.set, true);

        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        const result = await contractInstance.createSlot(descriptionArr,imgUrlArr,sizeArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[0].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[0].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[0].args.size,sizeArr[0]); // size
        const slotId = result.logs[0].args.id;
        await time.increase(time.duration.days(2));
        await utils.shouldThrow(contractInstance.transferFrom(alice, bob, slotId, {from: alice}));

    });



    it("easy: should let you transfer if in sale period", async () => { 
        const timeStamp = 1633660469 // Fri Oct 08 2021 02:34:29 GMT+0000
        const BNtimeStamp = utils.toBigNumber(timeStamp)
        const resultFreezeUpdate = await contractInstance.setInitialFreezeTimeStamp(BNtimeStamp,{from: alice});
        assert.equal(resultFreezeUpdate.receipt.status, true);
        assert.equal(resultFreezeUpdate.logs[0].args.set, true);


        const hibernationPeriod = 4;
        const hibernationPeriodBN = utils.toBigNumber(hibernationPeriod)
        const resultHibernationUpdate = await contractInstance.setHibernationTimePeriod(hibernationPeriodBN,{from: alice});
        assert.equal(resultHibernationUpdate.receipt.status, true);
        assert.equal(resultHibernationUpdate.logs[0].args.set, true);

    
        const salePeriod = 1;
        const salePeriodBN = utils.toBigNumber(salePeriod)
        const resultSaleUpdate = await contractInstance.setSaleTimePeriod(salePeriodBN,{from: alice});
        assert.equal(resultSaleUpdate.receipt.status, true);
        assert.equal(resultSaleUpdate.logs[0].args.set, true);

        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        const result = await contractInstance.createSlot(descriptionArr,imgUrlArr,sizeArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[0].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[0].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[0].args.size,sizeArr[0]); // size
        const slotId = result.logs[0].args.id;
        await time.increase(time.duration.days((365* hibernationPeriod) + 2));
        await contractInstance.transferFrom(alice, bob, slotId, {from: alice});
        const newOwner = await contractInstance.ownerOf(slotId);
        assert.equal(newOwner, bob);
    });


    it("medium: shouldn't let you transfer if in hibernation", async () => { 
        const timeStamp = 1634080142 // Fri Oct 08 2021 02:34:29 GMT+0000
        const BNtimeStamp = utils.toBigNumber(timeStamp)
        const resultFreezeUpdate = await contractInstance.setInitialFreezeTimeStamp(BNtimeStamp,{from: alice});
        assert.equal(resultFreezeUpdate.receipt.status, true);
        assert.equal(resultFreezeUpdate.logs[0].args.set, true);


        const hibernationPeriod = 103;
        const hibernationPeriodBN = utils.toBigNumber(hibernationPeriod)
        const resultHibernationUpdate = await contractInstance.setHibernationTimePeriod(hibernationPeriodBN,{from: alice});
        assert.equal(resultHibernationUpdate.receipt.status, true);
        assert.equal(resultHibernationUpdate.logs[0].args.set, true);

    
        const salePeriod = 32;
        const salePeriodBN = utils.toBigNumber(salePeriod)
        const resultSaleUpdate = await contractInstance.setSaleTimePeriod(salePeriodBN,{from: alice});
        assert.equal(resultSaleUpdate.receipt.status, true);
        assert.equal(resultSaleUpdate.logs[0].args.set, true);

        let nameArr = [slots[0].name];
        let descriptionArr = [slots[0].description];
        let imgUrlArr = [slots[0].imgUrl];
        let sizeArr = [slots[0].size];
        let tokenURIArr = [slots[0].tokenURI];
        const result = await contractInstance.createSlot(nameArr,descriptionArr,imgUrlArr,sizeArr,tokenURIArr,{from: alice , value: utils.getValue(correctFees[0])});
        assert.equal(result.receipt.status, true);
        assert.equal(result.logs[1].args.name,nameArr[0]); // description
        assert.equal(result.logs[1].args.description,descriptionArr[0]); // description
        assert.equal(result.logs[1].args.imgUrl,imgUrlArr[0]); // imgUrl
        assert.equal(result.logs[1].args.size,sizeArr[0]); // size
        assert.equal(result.logs[1].args.tokenURI,tokenURIArr[0]); // tokenURI
        const slotId = result.logs[1].args.id;
        const timeIncreaseDays = (2* 365 * hibernationPeriod) + (2* 365 *salePeriod) + 15;
        await time.increase(time.duration.days(timeIncreaseDays));
        await utils.shouldThrow(contractInstance.transferFrom(alice, bob, slotId, {from: alice}));

    });
*/



})
