# Proxy-bug

This repo exists to reproduce https://github.com/stefanpenner/ember-cli/issues/1921

To demonstrate the bug, launch this trivial backend server:

    cd server
    node ./repro.js

Then launch ember cli

    ember s

View `http://localhost:4200/sample` and submit the form.
