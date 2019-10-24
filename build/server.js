"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = require('path');

const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _morgan.default)('dev'));
app.use((0, _cors.default)());
app.use("/api", _routes.closetRouter);
app.get("/test", (req, res) => {
  return res.header(200).send({
    greetings: "we're cooking with GAS!!! o(*￣▽￣*)ブ"
  });
});
app.use(_express.default.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
const PORT = 3636;
app.listen(PORT);
console.log('hand-rolled express server listening on Port ::', PORT);