var rna = require("drawrnajs");
var app = rna.vis;

var input = ["AAAAA", "(...)"];
var struct = rna.t.transformDotBracket(input[0], input[1]);
yourDiv.className += " cy";
app({graph: struct, el: yourDiv});