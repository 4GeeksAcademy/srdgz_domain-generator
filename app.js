let pronoun = ["the", "our", "a"];
let adj = ["great", "big", "beautiful", "creapy", "nasty"];
let noun = ["jogger", "racoon", "car", "pizza", "burguer", "thief"];
let dom = [".com", ".org", ".es", ".net", ".xyz"];

function generateDomainNames(pronounArr, adjArr, nounArr, domArr) {
  let domainNames = [];
  for (let i = 0; i < pronounArr.length; i++) {
    for (let x = 0; x < adjArr.length; x++) {
      for (let y = 0; y < nounArr.length; y++) {
        for (let z = 0; z < domArr.length; z++) {
          let domain = pronounArr[i] + adjArr[x] + nounArr[y] + domArr[z];
          domainNames.push(domain);
        }
      }
    }
  }
  return domainNames;
}
let domainNames = generateDomainNames(pronoun, adj, noun, dom);
console.log(domainNames);
