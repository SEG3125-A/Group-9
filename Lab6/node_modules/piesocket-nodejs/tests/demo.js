const PieSocket = require("../src/PieSocket");

var piesocket = new PieSocket({
  clusterId: 'demo',
  apiKey: 'oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm',
  secret: 'd8129f82f8dd71910aa4a7efa30a7297'
});

piesocket.publish("channel_1", "test", { ok: "done" }, { meta: "nice" }).then(res => {
  console.log("OK");
});