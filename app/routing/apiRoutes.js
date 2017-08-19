const friends = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	app.post("/api/friends", function(req, res){
    console.log("here");
		var match;
		var inputData = req.body;
		var questionResults = inputData.scores;
    var scoreDifference;
		var totalDifference = 0;	
    var currentHighestDiff = 0;

		for (var i = 0; i < friends.length; i++) {
			var friend = friends[i];
			totalDifference = 0;
			
			for (var x = 0; x < friend.scores.length; x++){
				var checkedFriend = friend.scores[x];
				var userResults = questionResults[x];

        // get the difference for each score
				scoreDifference = Math.abs(parseInt(userResults) - parseInt(checkedFriend));
        // add those to get a total difference
        totalDifference += scoreDifference;
      }

      // add that total difference as a key on the corresponding friend object
      friends[i].difference = totalDifference;
    }

  // gets the object with the highest difference
  // in the array
  for (var i = 0; i < friends.length; i++){
    var friend = friends[i];
    if (friend.difference >= currentHighestDiff) {
      match = friend
    }
  }

  console.log(match);
	friends.push(inputData);
	res.json(match);		
});
};
