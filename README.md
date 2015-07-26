#DIRECTORIES
server/ contains server-side code, and client/ contains client-side code.

Use any programming language for writing the server. 
python-bottle and node-express preferred.

Use git to cut a new branch from here and finish your task. 
Once your work is done on the new branch, email us the diff between the master 
and the top of your branch, and your bitbucket user-id so that we can let you 
push the branch.

#EVALUATION
The final code will be tested by executing ``runserver.sh`` in the 
server directory, and heading to the browser at the URL 
``http://localhost:8000/jstest``

You will be evaluated on:
1. Task completion: Completing the task within the parameteres defined. This will involve 
   writing basic HTML, client side JS, basic server-side code, using git, 
   and writing a shell-script.
2. Code quality and adherence to best practices, especially when communicating
   between server and client

Bonus points and evaluation: (Do this last!)
1. For finishing the more complicated global-counter task.
2. For a brief report of the throughput of the server for the 
   different endpoints, and trying to max it out. Document the steps you took. 
   The endpoints would be:
    - /jstest (serves HTML)
    - /api/hash (JSON endpoint)
    - /api/counter (JSON endpoint)
    - /api/global-counter (JSON endpoint)
3. For good-looking CSS on the HTML page, responsive layouts on 
   HTML
4. For server-side code deployed and built with Docker 
5. For requirejs/browserify/webpack/grunt on client side JS 
6. For test converage on server-side code, tests for client side code. 

#TASK
At the http://localhost:8000/jstest url the user encounters a page that allows 
the user to choose one of two values from a dropdown, enter a value, and 
submit. The two values will be *hash* and *counter*. The result of the submit,
and the request number it came from, will be shown on the right. 
Refer to _client/mock.png_ as a reference. Please note that you can design your
output as you want! 
NOTE: You don't need to design the HTML to look exactly like the mockup.

The user can and will make multiple requests rapidly, responses from the 
server should get stacked up on the side.
Server responses should always be in JSON.

##The *hash* action
md5 hash the value sent by the client, and return the string.
The result on the right should show what string the user entered, and its
hash.

##The *counter* action
Second endpoint should increment the user-given value by 1 and return it.
If the user-given value is less than 0, return an error message to the user.
The result on the right show the number the user entered, and the result of
the increment.

##BONUS: The *global-counter* action
A third action can be done for bonus points.
This endpoint will increment the user-given value, with the last valid value 
the user submitted for the *global-counter* action. Valid values are values 
greater than 0. The initial global-counter value can be assumed to be 0.
