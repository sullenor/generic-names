"use strict";

const genericNames = require("../index");
const test = require("tape");
const path = require("path");

test("identity", t => {
  const generate = genericNames("[local]");
  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "foo" // Update with actual value
  );
  t.end();
});

test("leading digit", t => {
  const generate = genericNames("0[local]");
  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "_0foo" // Update with actual value
  );
  t.end();
});

test("leading digit in the token", t => {
  const generate = genericNames("[local]");
  t.equal(
    generate("0foo", path.join(__dirname, "test/case/source.css")),
    "_0foo" // Update with actual value
  );
  t.end();
});

test("leading two hyphens", t => {
  const generate = genericNames("--[local]");
  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "_--foo" // Update with actual value
  );
  t.end();
});

test("leading hyphen and digit", t => {
  const generate = genericNames("-0[local]");
  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "_-0foo" // Update with actual value
  );
  t.end();
});
