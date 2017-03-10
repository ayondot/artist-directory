/**
	Note: To have controllers and modules together in your html file no
	longer works in recent versions of angularjs (including this). If you really
	still wanna do that, follow the following example:

	<script type="text/javascript">
		// Add the following line of code after the usual script tag
		angular.module("ng").config(function($controllerProvider){  
	        $controllerProvider.allowGlobals();  
	    }); 

	    // . . . followed by controller function(s), then end the script tag.
	</script>
*/

var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		$scope.artistOrder = 'name';
	});
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('js/data.json').success(function(data){
		$scope.artists = data;
		$scope.whichItem = $routeParams.itemId;

		if($routeParams.itemId > 0){
			$scope.prevItem = Number($routeParams.itemId) - 1;
		}else{
			$scope.prevItem = $scope.artists.length - 1;
		}

		if($routeParams.itemId < $scope.artists.length - 1){
			$scope.nextItem = Number($routeParams.itemId) + 1;
		}else{
			$scope.nextItem = 0;
		}
	});
}]);

