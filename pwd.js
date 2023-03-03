const ls = require("./ls");

module.exports = function () {
  //Stream communication
  const { cwd } = require("node:process");

  //Output a prompt
  process.stdout.write("prompt > ");

  // The stdin 'data' event fires after a user types in a line
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim(); //remove the newline

    if (cmd === "pwd") {
      process.stdout.write(cwd());
    } else if (cmd === "ls") {
      process.stdout.write(ls());
    } else {
      process.stdout.write("prompt > ");
    }
  });
};
