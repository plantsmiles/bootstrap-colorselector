angular.module('ngBootstrapColorSelector', [])
    .provider('ngBootstrapColorSelectorConfig', function(){
    var templateUrl = 'ng-bootstrap-colorselector.html';
    var defaultColors =  [
        '#7bd148',
        '#5484ed',
        '#a4bdfc',
        '#46d6db',
        '#7ae7bf',
        '#51b749',
        '#fbd75b',
        '#ffb878',
        '#ff887c',
        '#dc2127',
        '#dbadff',
        '#e1e1e1'
    ];
    this.setTemplateUrl = function(url){
        templateUrl = url;
    };
    this.setDefaultColors = function(colors){
        defaultColors = colors;
    };
    this.$get = function(){
        return {
            templateUrl : templateUrl,
            defaultColors: defaultColors
        }
    }
})
    .directive('ngBootstrapColorSelector', ['ngBootstrapColorSelectorConfig',function(ngBootstrapColorSelectorConfig) {
        return {
            //scope: {
            //    colors: '=',
            //    colorSelected: '='
            //},
            repalce: true,
            restrict: 'E',
            templateUrl: ngBootstrapColorSelectorConfig.templateUrl,
            link: function (scope, element, attr) {
                scope.colorSelected = scope.colorSelected || '#A0522D';
                scope.changeColor = function(color) {
                    scope.colorSelected = color;
                };
            }
        };

    }]);