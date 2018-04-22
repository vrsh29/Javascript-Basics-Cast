function revInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

revInt("-51");
revInt("09343");
revInt("+8929347");
