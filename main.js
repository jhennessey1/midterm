angular.module('gameMod', [])

angular.module('gameMod')
	.controller('gameController', ['$scope', function($scope){
		$scope.hoverStyle = {
			top: '300px',
			left: '300px'
		}
		$scope.gameOver = function() {
			$scope.gameOverHide = true
			$scope.gameOverShow = true
		}
	}])