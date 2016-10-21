(function () {

    'use strict';

    angular
    .module('app.jstest', [])
    .controller('jstestController', function(jstest, $scope, JstestService) {

        var self        = this,
            taskObjects = jstest.tasks,
            tasks       = Object.keys(taskObjects);

        self.onSubmit  = onSubmit;
        self.tableData = [];

        $scope.error        = '';
        $scope.displayTasks = [];

        tasks.forEach(function (tasks) {
            $scope.displayTasks.push(tasks);
        });

        $scope.selected = $scope.displayTasks[0];

        function onSubmit(task, value) {

            var selectedTask = task,
                input        = value,
                responseData;

            $scope.error = '';

            if (selectedTask === $scope.displayTasks[0]) {
                responseData = JstestService.generateHash(input);

                responseData.then(function (response) {
                    self.hashResponse = response.data.hash;
                    constructTable(self.hashResponse);
                });
            } else if (selectedTask === $scope.displayTasks[1]){
                var isValid = validateUserInput(input);

                if (isValid !== true) {
                    $scope.value = '';
                    return;
                } else {
                    JstestService.generateCounter(input);
                }
            } else {
                validateUserInput(input);
                JstestService.generateGlobalCounter(input);
            }
            $scope.value = '';
        }

        function constructTable(data) {

            var output = "<table>",
                arr    = [],
                i;

            arr.push(data);

            for(i = 0; i < arr.length; i++) {
                output += "<tr><td>" +
                arr[i].input  +
                "</td><td>"   +
                arr[i].output +
                "</td><td>";
            }
            output += "</table>";

            document.getElementById('tableData').innerHtml = output;
        }

        function validateUserInput(input) {

            var isUserInputNumber = isNaN(input);

            if (isUserInputNumber != false) {
                $scope.error = "Only Numbers Are Allowed";
                return false;
            } else {
                return true;
            }
        }
    });
}());
