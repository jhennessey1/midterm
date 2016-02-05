angular.module('gameMod', [])

angular.module('gameMod')
	.controller('gameController', ['$scope', function($scope){
		$scope.hoverStyle = {
			top: '300px',
			left: '300px'
		}
		$scope.timer = 0
		$scope.gameBegin = function() {
			$scope.beginTimer = function() {
				$interval(($scope.timer += 1), 1)
			}
		}
		$scope.gameOver = function() {
			$scope.gameOverHide = true
			$scope.gameOverShow = true
		}
	}])


	// Using the "style" attribute in the html, link Math.random to those properties to create random transitions. See about using css transtions as well.