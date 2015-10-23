angular.module('example', ['ngBootstrapColorSelector']).controller('MainCtrl', ['$scope', function($scope) {
    $scope.colors = [
        {rgb: 106, hex: "#A0522D", name: "sienna"},
        {rgb: 47, hex: "#CD5C5C", name: "indianred"},
        {rgb: 87, hex: "#FF4500", name: "orangered"},
        {rgb: 17, hex: "#008B8B", name: "darkcyan"},
        {rgb: 18, hex: "#B8860B", name: "darkgoldenrod"},
        {rgb: 68, hex: "#32CD32", name: "limegreen"},
        {rgb: 42, hex: "#FFD700", name: "gold"},
        {rgb: 77, hex: "#48D1CC", name: "mediumturquoise"}
    ];
    
    $scope.colorSelected = $scope.colors[0].hex;
}]);