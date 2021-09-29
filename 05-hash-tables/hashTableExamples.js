const book = {};
book["apple"] = 0.67;
book["milk"] = 1.49;
book["avocado"] = 1.49;

console.log(book);

const phoneBook = {};
phoneBook["jenny"] = 8675309;
phoneBook["emergency"] = 911;

console.log(phoneBook.emergency);

const voted = {};
function checkVoter(name) {
  if (voted[name]) {
    console.log("Kick them out");
  } else {
    voted[name] = true;
    console.log("Let them vote");
  }
}

checkVoter("tom");
checkVoter("mike");
checkVoter("mike");

const cache = { youtube: "Youtube cache..." };
function getPage(url) {
  if (cache[url]) {
    return cache[url];
  } else {
    data = "Data from server...";
    cache[url] = data;
    return data;
  }
}

getPage("google");
getPage("youtube");
console.log(cache);
