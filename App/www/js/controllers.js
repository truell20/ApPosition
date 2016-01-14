angular.module('ApPosition.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('SearchCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope,$ionicPopup) {
	$scope.data = {
		showDelete: false
	};

	$scope.addFriend = function(friendName) {
		$scope.friends.push({
			name: friendName
		});

        $scope.friendName = "";
    };

	$scope.deleteFriend = function(friend) {
		$scope.friends.splice($scope.friends.indexOf(friend), 1);
	};

	$scope.addFriendPrompt = function() {
	   var promptPopup = $ionicPopup.prompt({
	      title: 'Add Friend',
	      template: "Enter your friend's name."
	   });
	   promptPopup.then(function(res) {
	      if (res) {
	         $scope.addFriend(res);
	      }
	   });
	};

	$scope.friends = [
		{ name: 'Michael Truell' },
		{ name: 'Luca Koval' },
		{ name: 'Joshua Gruenstein' }
	];
})

.controller('LoginCtrl', function($scope, $cordovaBarcodeScanner) {

	$scope.scanBarcode = function() {
		$cordovaBarcodeScanner.scan().then(function(imageData) {
			alert(imageData.text);
			console.log("Barcode Format -> " + imageData.format);
			console.log("Cancelled -> " + imageData.cancelled);
		}, function(error) {
			console.log("An error happened -> " + error);
		});
	};

});