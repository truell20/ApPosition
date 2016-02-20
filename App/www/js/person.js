function Person(userID, name, email, password, schedule, friends) {
	this.userID = userID;
	this.name = name;
	this.email = email;
	this.password = password;
	this.schedule = schedule;
	this.friends = friends;

	this.getFreeFriends = function(day, index) {
		console.log(this.friends)
		return this.friends.filter(function(friend) {
			return friend.isFree;
		});
	}
}

Person.names = ["Fred", "Lisa", "Ben", "Josh", "Michael", "Teddy", "Luca", "Stephanie", "Henry", "Danah", "Nick"];
Person.randomPerson = function() {
	if(Person.names.length < 1) return null;
	console.log(Person.names.length);
	var periods = [];
	for(var a = 0; a < Schedule.numDays; a++) {
		var day = [];
		for(var b = 0; b < Schedule.numPeriods; b++) {
			if(a == 1 && b == 2) day.push({ name: "Free", isFree: true});
			else day.push({ name: "Art", isFree: false })
		}
		periods.push(day);
	}
	var nameIndex = Math.floor(Math.random()*Person.names.length);
	var name = Person.names[nameIndex];
	Person.names.splice(nameIndex, 1);

	return new Person(1, name, null, null, new Schedule(periods), [Person.randomPerson()]);
}