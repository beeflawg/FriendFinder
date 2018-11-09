var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        res.json(true);
        var totalArr = [];

        for (var i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i].scores);
            var a = friendsData[i].scores
            var result = a.map(function (x) {
                return parseInt(x, 10);
            });
            console.log(result);
            var total = (result.reduce((x, y) => x + y))
            totalArr.push(total);
            console.log(total);
            console.log(totalArr);

        }
        num = totalArr[totalArr.length - 1];
        console.log(num);

        //compare totalArr to num to get closest
        //after getting closest, display information related to that profile in the modal

    });

};