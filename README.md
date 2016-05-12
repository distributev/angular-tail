# angular-tail
Run nodejs/app.js to start socketio and express
Using any web server to run app/index.html simple ui, which you need to give a filePath and write something into file using writeFile button and then start watching and unwatch the file. All the appended items will be shown at below(I am using file stream so it takes some time to see the changes)

line separator is little bit tricky, since regex is needed and this part as long as you could set and feed to tail backend, I think it should work.



Create an angular-js directive to tail the content of a file (https://docs.angularjs.org/guide/directive)

Libraries to be used

https://angularjs.org
http://expressjs.com
https://github.com/lucagrulla/node-tail
https://github.com/socketio/socket.io/

Here is an example of node.js web application which is doing a similar thing
https://github.com/rhrn/node-tail

The angularjs directive should be called <tail></tail> and it should be created on top of a <pre> HTML tag - http://www.w3schools.com/tags/tag_pre.asp

The new angular <tail> directive should accept as parameters: mandatory parameter is the path to the file to tail. Optional parameters should be lineSeparator, watchOptions, fromBeginning, follow, logger (see https://github.com/lucagrulla/node-tail documentation for more details)

The delivery of this project is the source code of the project/directive along with a demo html page containing 3 or 4 different tails each one watching/tailing a different file.
