var app = angular.module("imagesApp",[]);


app.directive("imgDirective", function() {
	
	return {
    	controller: ['$scope', function ImgDirectiveController($scope) {
    		$scope.imgLinks =  [];
    		$scope.imgLinks.push ("https://www.ipofferings.com/drawings/Dec2016/Internet-of-Things.jpg");
    		$scope.imgLinks.push ("http://iot.intersog.com/wp-content/uploads/iot/2015/12/Internet-of-Things-01.png");
    		$scope.imgLinks.push ("https://www.ipofferings.com/drawings/Dec2016/Internet-of-Things.jpg");
    		$scope.imgLinks.push ("http://iot.intersog.com/wp-content/uploads/iot/2015/12/Internet-of-Things-01.png");
    		$scope.imgLinks.push ("https://www.ipofferings.com/drawings/Dec2016/Internet-of-Things.jpg");
    		$scope.imgLinks.push ("http://iot.intersog.com/wp-content/uploads/iot/2015/12/Internet-of-Things-01.png");
    	}],
        templateUrl : "images.html"
    };
});


app.directive('resizer', function($document) {

	return {
		link : function(scope, element, attrs) {
			
			element.on('mousedown', function(event) {
				event.preventDefault();
	
				$document.on('mousemove', mousemove);
				$document.on('mouseup', mouseup);
			});
	
			function mousemove(event) {
	
					var y = event.pageY;
	
					element.css({
						top: y+'px'
					});
					
					angular.element( document.querySelector( '#curtain' ) ).css({
						top : y+'px'
					});
			}
	
			function mouseup() {
				$document.unbind('mousemove', mousemove);
				$document.unbind('mouseup', mouseup);
			}
		}

		
	};
});