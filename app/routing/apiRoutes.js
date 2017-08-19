const friends = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});
	app.post("/api/friends", function(req, res){
		var match = {
			name: "",
			photo: "",
			difference: 0
		};
		
		var inputData = req.body;
		var questionResults = inputData.scores;
		var totalDifference = 0;	

		for (var i = 0; i < friends.length; i++) {
			var friend = friends[i];
			totalDifference = 0;
			
			for (var x = 0; x < friend.scores.length; x++){
				var checkedFriend = friend.scores[x];
				var userResults = questionResults[x];

				totalDifference += Math.abs(parseInt(userResults) - parseInt(checkedFriend));
     		}
      
      	if (totalDifference <= match.difference) {
        
        match.name = friend.name;
        match.photo = friend.photo;
        match.difference = totalDifference;
      	}
    }
			
	friends.push(inputData);
	res.json(match);		
});
};