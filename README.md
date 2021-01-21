# security-frameworks
Rendering different security frameworks for reference

## building

```bash
# OPTIONAL use the awesome `reload` which auto-refreshes your browser on change using websockets
# `npm install -g webpack webpack-cli reload`
webpack --watch
(cd app/dist && reload -e "html|js|css|json|yml")
# browse to http://localhost:8080/
```