angular.module('gameMod', [])

angular.module('gameMod')
	.controller('gameController', ['$scope','$interval', function($scope, $interval){
		$scope.hoverStyle = {
			top: '300px',
			left: '300px'
		}
		$scope.timer = 0
		$scope.gameBegin = function() {
			$scope.beginTimer = function() {
				timer += 1
			}
			$interval(function(){$scope.beginTimer()}, 1)
		}
		$scope.gameOver = function() {
			$scope.gameOverHide = true
			$scope.gameOverShow = true
		}
	}])


	// Using the "style" attribute in the html, link Math.random to those properties to create random transitions. See about using css transtions as well.