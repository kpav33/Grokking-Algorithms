// Makeshift graph to use for demonstration of breadth-first algorithm search
const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

// Function that tells you if a person is a mango seller
function personIsSeller(name) {
  return name.slice(-1) === "m";
}

// Implementation of breadth-first search algorithm
function breadthFirstSearch(name) {
  let searchQueue = [];
  searchQueue = [...graph[name]];
  // console.log("QUEUE " + searchQueue);
  let searched = [];

  while (searchQueue.length > 0) {
    let person = searchQueue.shift();
    // console.log("PERSON " + person)
    // console.log("SEARCHED " + searched);
    // console.log(searched.includes(person));
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      } else {
        searchQueue = [...searchQueue, ...graph[person]];
        searched.push(person);
        // console.log("ADD SEARCH QUEUE " + searchQueue);
      }
    }
  }

  return false;
}

breadthFirstSearch("you");
