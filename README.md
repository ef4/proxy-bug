# Proxy-bug

This repo exists to reproduce https://github.com/stefanpenner/ember-cli/issues/1921

To demonstrate the bug, launch this trivial backend server:

    cd server
    node ./repro.js

Then launch ember cli

    ember s

View `http://localhost:4200/sample` and submit the form.

# Clues

 - this is crashing 100% of the time for me under node-10.32
 - if you comment out the `bodyParser.urlencoded` middleware from
   `server/index.js`, the problem goes away.
