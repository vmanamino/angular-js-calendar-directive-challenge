angular.module('calendarDemoApp', []).

// your controller and directive code go here

    directive('calendarDisplay', function(){
        return {
            restrict: 'E',
            templateUrl: 'table.html',
            scope: true,
            transclude: true,
            controller: function($scope, $element){
                $scope.calendar = {
                    dates: CalendarRange.getMonthlyRange(new Date(2016, 3, 1))
                    // "May 01, 2016 00:00:00"
                }
            }
        };
    })