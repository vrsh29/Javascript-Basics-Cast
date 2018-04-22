function revInt(int) {
  return int
    .split("")
    .reverse()
    .join("");
}

revInt("51");
revInt("09343");
revInt("8929347");