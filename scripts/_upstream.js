/* eslint-disable no-process-exit */
"use strict"

const {execFileSync} = require("child_process")

const remoteInfo = execFileSync("git", ["remote", "-v"], {
	windowsHide: true,
	stdio: ["inherit", "pipe", "inherit"],
	encoding: "utf-8",
}).trim().split(/\r\n?|\n/g);

function find(type) {
	const regexp = new RegExp(
		"\t(?:" +
		"(?:(?:git+)?https?|git|ssh)://(?:[^@\\s]+@)?github\\.com/|" +
		"git@github\\.com:" +
		")" +
		`jloads/www \\(${type}\\)$`
	)


	// console.log(type);
	const line = remoteInfo.find((line) => regexp.test(line))
	// console.log(line);
	// return 1;
	return line == null ? undefined : {
		remote: line.slice(0, line.indexOf("\t")),
		repo: line.slice(line.lastIndexOf("\t") + 1, -(type.length + 3)),
	}
}

exports.fetch = find("fetch")
exports.push = find("push")

console.log(exports.fetch);
console.log(exports.push);

if (exports.fetch == null) {
	console.error("You must have an upstream to pull from!")
	process.exit(1)
}
