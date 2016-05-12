# angular-tail
Run nodejs/app.js to start socketio and express
Using any web server to run app/index.html simple ui, which you need to give a filePath and write something into file using writeFile button and then start watching and unwatch the file. All the appended items will be shown at below(I am using file stream so it takes some time to see the changes)

line separator is little bit tricky, since regex is needed and this part as long as you could set and feed to tail backend, I think it should work.
