let pronouns = ["a", "the", "your"];
let adjs = ["great", "adventurous", "arrogant"];
let nouns = ["sitcom", "lotus", "cubes", "planet"];
let doms = [".com", ".us", ".es", ".net", ".shop"];
let domain = "";

function generateDomainNames(pronounArr, adjArr, nounArr, domArr) {
  let domainNames = [];
  for (let pronoun = 0; pronoun < pronounArr.length; pronoun++) {
    for (let adj = 0; adj < adjArr.length; adj++) {
      for (let noum = 0; noum < nounArr.length; noum++) {
        for (let dom = 0; dom < domArr.length; dom++) {
          if (
            (adjArr[adj].charAt(0) === "a" ||
              adjArr[adj].charAt(0) === "e" ||
              adjArr[adj].charAt(0) === "i" ||
              adjArr[adj].charAt(0) === "o" ||
              adjArr[adj].charAt(0) === "u") &&
            pronounArr[pronoun] === "a"
          ) {
            domain = "an" + adjArr[adj] + nounArr[noum] + domArr[dom];
          } else {
            domain =
              pronounArr[pronoun] + adjArr[adj] + nounArr[noum] + domArr[dom];
          }
          domainNames.push(domain);
        }
      }
    }
  }
  return domainNames;
}
let domainNames = generateDomainNames(pronouns, adjs, nouns, doms);
console.log(domainNames);
