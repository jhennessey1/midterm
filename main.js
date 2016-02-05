angular.module('gameMod', [])

angular.module('gameMod')
	.controller('gameController', ['$scope', function($scope){
		$scope.hoverStyle = {
			top: '300px',
			left: '300px'
		}
		$scope.gameBegin = function() {
			$scope.timer-start
		}
		$scope.gameOver = function() {
			$scope.gameOverHide = true
			$scope.gameOverShow = true
			$scope.timer-end
		}
	}])


	// Using the "style" attribute in the html, link Math.random to those properties to create random transitions. See about using css transtions as well.