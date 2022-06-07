# security-frameworks

Rendering different security frameworks from [jujhars13/security-controls](https://github.com/jujhars13/security-controls) as an HTML table.

## Building

```bash
# OPTIONAL use the awesome `reload` which auto-refreshes your browser on change using websockets
# `npm install -g webpack webpack-cli reload`
webpack --watch
(cd docs && reload -e "html|js|css|json|yml")
# browse to http://localhost:8080/
```
