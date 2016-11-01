angular.module('dzh123App').controller('b', ['$scope', '$http', '$state', function($scope, $http, $state) {
	$scope.zhuce = function() {
		$http({
			url: "http://www.somenote.cn:1510/users",
			method: "post",
			data: $scope.updata
		}).success(function(e) {
//			alert(1)
			$state.go('a')

		})

	}
}])