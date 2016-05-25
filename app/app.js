angular.module('calendarDemoApp', []).

// your controller and directive code go here

    directive('calendarDisplay', function(){
        return {
            restrict: 'E',
            templateUrl: 'table.html',
            scope: true,
            transclude: true,
            controller: function($scope, $element){
                var date = new Date();
                $scope.currentMonth = date.getMonth();
                $scope.currentYear = date.getFullYear();
                
                $scope.dates;
                
                $scope.reset = function(){
                    console.log('reset called');
                    $scope.setCalendar($scope.currentMonth, $scope.currentYear);
                };
                
                $scope.setCalendar = function(month, year) {
                    $scope.dates = CalendarRange.getMonthlyRange(new Date(year, month, 1));
                    $scope.dates.days.forEach(addClass);
                };
                $scope.setCalendar($scope.currentMonth, $scope.currentYear);
                
                function addClass(element, index, array) {
                console.log(element);
                if (element.month < $scope.currentMonth || element.month > $scope.currentMonth) {
                    element.monthClass = 'previous-or-next-month';
                    console.log(element.monthClass);
                }
            }
            }
        };
    })