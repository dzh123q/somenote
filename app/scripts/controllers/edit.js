angular.module('dzh123App').controller('d', ['$scope', '$http', '$state', '$cookieStore', '$cookies',function($scope, $http, $state, $cookieStore,$cookies) {
	var num = 0;
	var qwe=$cookieStore.get('uid')
	 $scope.updata={"uid":qwe}
	$scope.add = function() {
		
		$http({
			url: "http://www.somenote.cn:1510/item",
			method: "POST",
			data: $scope.updata
		}).success(function(e) {
	
			debugger
			$scope.data.push($scope.updata)
			$scope.updata = null
			$state.go('c')
		})

	}
	$scope.del = function(e) {
		$http({
			url: "http://www.somenote.cn:1510/item/" + e.id,
			method: "delete"
		}).success(function() {
			$scope.data.splice($scope.data.indexOf(e), 1)
		})
	}
	$scope.edit = function(e) {
		$scope.editdata = e
	}
	$scope.save = function() {
		$http({
			url: "http://www.somenote.cn:1510/item",
			method: "PUT",
			data: $scope.editdata
		}).success(function() {

		})
	}
	$scope.out = function() {
		$http({
			url: "http://www.somenote.cn:1510/users/logout",
			method: "POST"

		}).success(function(e) {
			$cookieStore.remove('username')
			$cookieStore.remove('password')
			$state.go('a')
		})
	}
	$scope.next = function() {
		num += 10;
		$http({
			url: "http://www.somenote.cn:1510/item",
			method: "GET",
			params: {
				"$skip": num,
				"$limit": 10,
				"uid":$cookieStore.get('uid')
			}
		}).success(function(e) {
			$scope.data = e
		})
	}
	$scope.shang = function() {
		num -= 10;
		$http({
			url: "http://www.somenote.cn:1510/item",
			method: "GET",
			params: {
				"$skip": num,
				"$limit": 10,
				"uid":$cookieStore.get('uid')
			
			}
		}).success(function(e) {
			$scope.data = e
		})
	}
//alert($cookieStore.get('uid'))
	$http({
		url: "http://www.somenote.cn:1510/item",
		method: "get",
		params: {
			"$skip": num,
			"$limit": 10,
			"uid":$cookieStore.get('uid')
			
		}
	}).success(function(e) {
		//		console.log(e)
		
		$scope.data = e

	})
}])