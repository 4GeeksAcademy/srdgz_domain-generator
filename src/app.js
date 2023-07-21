/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
//write your code here
let pronouns = ["a", "the", "your"];
let adjs = ["great", "adventurous", "arrogant"];
let nouns = ["sitcom", "lotus", "cubes", "planet"];
let extensions = [".com", ".us", ".es", ".net", ".shop"];
let domain = "";

function generateDomainNames(pronounArr, adjArr, nounArr, extArr) {
  let domainNames = [];
  for (let pronoun = 0; pronoun < pronounArr.length; pronoun++) {
    for (let adj = 0; adj < adjArr.length; adj++) {
      for (let noun = 0; noun < nounArr.length; noun++) {
        for (let ext = 0; ext < extArr.length; ext++) {
          if (
            (adjArr[adj].charAt(0) === "a" ||
              adjArr[adj].charAt(0) === "e" ||
              adjArr[adj].charAt(0) === "i" ||
              adjArr[adj].charAt(0) === "o" ||
              adjArr[adj].charAt(0) === "u") &&
            pronounArr[pronoun] === "a"
          ) {
            domain = "an" + adjArr[adj] + nounArr[noun] + extArr[ext];
          } else if (nounArr[noun].endsWith(extArr[ext].slice(1))) {
            let newDomain = nounArr[noun].slice(
              0,
              nounArr[noun].length - extArr[ext].length - 1
            );
            domain =
              pronounArr[pronoun] + adjArr[adj] + newDomain + extArr[ext];
          } else {
            domain =
              pronounArr[pronoun] + adjArr[adj] + nounArr[noun] + extArr[ext];
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
const generateButton = document.getElementById("generatorBttn");
generateButton.addEventListener("click", displayDomainNames);
