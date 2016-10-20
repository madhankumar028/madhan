(function () {

    'use strict';

    angular
    .module('app.jstest', [])
    .controller('jstestController', function(jstest, $scope, jstestService, $exceptionHandler) {

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

            $scope.error = '';

            if (selectedTask === $scope.displayTasks[0]) {
                var responseData = jstestService.generateHash(input);
            } else if (selectedTask === $scope.displayTasks[1]){
                validateUserInput(input);
                jstestService.generateCounter(input);
            } else {
                validateUserInput(input);
                jstestService.generateGlobalCounter(input);
            }

            $scope.value = null;
        }

        function validateUserInput(input) {

            var isUserInputNumber = isNaN(input);

            try {
                if (isUserInputNumber != false) {
                    $scope.error = "Only Numbers Are Allowed";
                    throw new Exception;
                }
            } catch (e) {}
        }
    });
}());
