const capitalize = word => {
  if (typeof word !== "string") {
    throw new Error("Must pass in a string as a valid argument.");
  }

  const firstLetter = word.slice(0, 1);
  const restOfWord = word.slice(1, word.length);
  const upperCaseFirst = firstLetter.toUpperCase();

  return upperCaseFirst.concat(restOfWord);
};

export default capitalize;
