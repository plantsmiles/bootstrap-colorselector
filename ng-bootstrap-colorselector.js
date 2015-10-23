angular.module('ngBootstrapColorSelector', [])
    .directive('ngBootstrapColorSelector', function() {
        return {
            restrict: 'E',
            templateUrl: 'ng-bootstrap-colorselector.html',
            link: function (scope, element, attr) {
                scope.colorSelected = scope.colorSelected || '#A0522D';
                scope.changeColor = function(color) {
                    scope.colorSelected = color;
                };
            }
        };
    });