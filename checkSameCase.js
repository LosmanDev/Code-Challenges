// DESCRIPTION:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b) {
  const caps = /[A-Z]/;
  const nocaps = /[a-z]/;
  const nonchar = /\W|\d|_/;

  if (
    (a.match(caps) && b.match(caps)) ||
    (a.match(nocaps) && b.match(nocaps))
  ) {
    return 1;
  } else if (
    (a.match(nonchar) && b.match(caps)) ||
    (a.match(nonchar) && b.match(nocaps)) ||
    (a.match(caps) && b.match(nonchar)) ||
    (a.match(nocaps) && b.match(nonchar)) ||
    (a.match(nonchar) && b.match(nonchar))
  ) {
    return -1;
  } else {
    return 0;
  }
}
