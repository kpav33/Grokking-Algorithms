// Set covering problem

let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

let stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

let finalStations = new Set();

// Use setName.size to find out the length of a Set
while (statesNeeded.size) {
  let bestStation = null;
  let statesCovered = new Set();

  // Loop over stations object
  for (let station in stations) {
    let states = stations[station];
    // JavaScript doesn't have a built in Set intersection method, so filter method can be used instead
    let covered = new Set([...statesNeeded].filter((i) => states.has(i)));
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  }

  // Replacement for performing Set difference in JavaScript, similar to above Set intersection
  statesNeeded = new Set(
    [...statesNeeded].filter((i) => !statesCovered.has(i))
  );
  finalStations.add(bestStation);
}

console.log(finalStations);
