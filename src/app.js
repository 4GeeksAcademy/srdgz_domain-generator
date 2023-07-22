/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
let pronouns = ["a", "the", "your"];
let adjs = ["great", "adventurous", "arrogant"];
let nouns = ["sitcom", "lotus", "cubes", "planet"];
let extensions = [".com", ".us", ".es", ".net", ".shop"];

function generateDomainNames(pronounArr, adjArr, nounArr, extArr) {
  let domainNames = [];
  for (let pronoun of pronounArr) {
    for (let adj of adjArr) {
      for (let noun of nounArr) {
        for (let ext of extArr) {
          let domain;
          if (
            "aeiou".includes(adj.charAt(0).toLowerCase()) &&
            pronoun === "a"
          ) {
            domain = "an" + adj;
            if (noun.endsWith(ext.substr(1))) {
              let num = noun.length - (ext.length - 1);
              domain += noun.substr(0, num) + ext;
            } else {
              domain += noun + ext;
            }
          } else {
            domain = pronoun + adj;
            if (noun.endsWith(ext.substr(1))) {
              let num = noun.length - (ext.length - 1);
              domain += noun.substr(0, num) + ext;
            } else {
              domain += noun + ext;
            }
          }
          domainNames.push(domain);
        }
      }
    }
  }
  return domainNames;
}
const displayDomainNames = () => {
  const generatedDomains = generateDomainNames(
    pronouns,
    adjs,
    nouns,
    extensions
  );
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = generatedDomains.join("<br>");
};
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", displayDomainNames);
