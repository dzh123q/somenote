angular.module('dzh123App').controller('a1', ['$scope', '$http', '$state', '$cookieStore', '$cookies',function($scope, $http, $state, $cookieStore, $cookies) {
	var a = $cookies.get('username')
	
		//alert(a)
	if(a) {
		$state.go("c")
	}
	$scope.denglu = function() {
		if($scope.btn == true) {
			$http({
				url:"http://www.somenote.cn:1510/users/login",
				method: "POST",
				data: $scope.data
			}).success(function(e) {
				
				
				$cookieStore.put("username", $scope.data);
				var expireDate = new Date();
				expireDate.setDate(expireDate.getDate() + 6);
				$cookies.put('username', $scope.data, {
					'expires': expireDate
				})
				$cookieStore.put("uid",e.uid)
				$state.go("c")
			})
		} else {
			$http({
				url: "http://www.somenote.cn:1510/users/login",
				method: "POST",
				data: $scope.data
			}).success(function(e) {
				$cookieStore.put("uid",e.uid)
				$state.go("c")
			})
		}
	}

}])