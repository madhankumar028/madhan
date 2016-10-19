(function () {

    'use strict';

    angular
    .module('app.jstest', [])
    .controller('jstestController', function(jstest, $scope, jstestService) {

        var self = this;

        var taskObjects = jstest.tasks;
        var tasks = Object.keys(taskObjects);

        self.onSubmit = onSubmit;

        $scope.displayTasks = [];

        tasks.forEach(function (tasks) {
            $scope.displayTasks.push(tasks);
        });

        $scope.selected = $scope.displayTasks[0];

        function onSubmit(task, value) {

            var selectedTask = task,
                input = value;

            if (selectedTask === $scope.displayTasks[0]) {
                var responseData = jstestService.generateHash(input);
            } else if (selectedTask === $scope.displayTasks[1]){
                var isUserInputNumber = isNaN(input);
                if (isUserInputNumber != false) {
                    $scope.error = "Numbers are allowed";
                    return;
                } else {
                    jstestService.generateCounter(input);
                    self.error = jstestService.errorMessage;
                }
            } else {
                jstestService.generateGlobalCounter(input);
            }
        }
    });
}());
