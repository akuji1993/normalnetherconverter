var masterModule = angular.module("normalNetherApp",[]);

masterModule.controller("netherCtrl",["$scope","$http",function(scope,http){
		
	scope.convertToReal = function(x_nether, z_nether)
	{
		var x = x_nether; 
		scope.x_nether = ""; 
		
		var z = z_nether; 
		scope.z_nether = ""; 
		
		scope.x_real = parseInt(x * 8);
		scope.z_real = parseInt(z * 8); 
	}
	
	scope.convertToNether = function(x_real, z_real){
		var x = x_real;
		scope.x_real = ""; 
		
		var z = z_real; 
		scope.z_real = ""; 
		
		scope.x_nether = parseInt(x / 8);
		scope.z_nether = parseInt(z / 8); 
	} 
	
}]);
