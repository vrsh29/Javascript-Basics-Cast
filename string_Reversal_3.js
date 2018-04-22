function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

//reverse("varsha");

module.exports = reverse;
