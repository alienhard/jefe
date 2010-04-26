var 
  sys = require("sys"),
  jefe = new require("../lib/jefe"),
  elJefe = new jefe.Jefe(),
  scriptName = "while forever loop should not run forever"; 

elJefe.compile(scriptName, "while (true) {}", { maxTime: 5000 } );

elJefe.run(scriptName, {}, function (error, sandboxIn, sandboxOut) {
  if (error) {
    sys.puts("error = " + error);
  } else {
    sys.puts("completed without error");
    sys.puts("sandboxOut = " + JSON.stringify(sandboxOut));
  }

  var stats = elJefe.getScriptStats(scriptName);
  sys.p(stats);

  process.exit(0);
});

