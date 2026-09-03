//Question No. 1
function describeValue(value) {
  return typeof value + " | " + (value ? "truthy" : "falsy");
}

console.log(describeValue("hello"));    // "string | truthy"
console.log(describeValue(""));         // "string | falsy"
console.log(describeValue(25));         // "number | truthy"
console.log(describeValue(0));          // "number | falsy"
console.log(describeValue(true));       // "boolean | truthy"
console.log(describeValue(null));       // "object | falsy"
console.log(describeValue(undefined));  // "undefined | falsy"
console.log(describeValue("0"));        // "string | truthy"
console.log(describeValue(NaN));        // "number | falsy"


//Question No. 2
function getDayType(day) {
  switch (day.toLowerCase()) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

console.log(getDayType("Friday"));     // "Weekend"
console.log(getDayType("friday"));     // "Weekend"
console.log(getDayType("MONDAY"));     // "Working Day"
console.log(getDayType("Bandarban"));  // "Invalid Day"


//Question No. 3
function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }
  if (username.includes(" ")) {
    return "No Space Allowed";
  }
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}

console.log(validateUsername("rahim123"));      // "Available"
console.log(validateUsername("ab"));             // "Too Short"
console.log(validateUsername("a b"));            // "Too Short"
console.log(validateUsername("abcd"));           // "Available"
console.log(validateUsername("rahim islam"));    // "No Space Allowed"
console.log(validateUsername("superadmin99"));   // "Reserved Word"
console.log(validateUsername("Admin_Rahim"));    // "Reserved Word"


//Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50; // minimum fare covers the first 2 km

  if (distance > 2) {
    fare = 50 + (distance - 2) * 15;
  }

  let waitingCharge = waitingMinutes * 2;
  let total = fare + waitingCharge;

  if (isNight) {
    total = total * 1.2;
  }

  return total;
}

console.log(getCngFare(2));              // 50
console.log(getCngFare(1));              // 50
console.log(getCngFare(5));              // 95
console.log(getCngFare(10));             // 170
console.log(getCngFare(5, false, 10));   // 115
console.log(getCngFare(5, true));        // 114
console.log(getCngFare(5, true, 10));    // 138


//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;
  let verdict;

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict(200, 200, 12));  // "Won"
console.log(getChaseVerdict(200, 190, 0));   // "Lost"
console.log(getChaseVerdict(100, 90, 12));   // "Need 10 runs in 12 balls | Comfortable"
console.log(getChaseVerdict(100, 80, 12));   // "Need 20 runs in 12 balls | Tough"
console.log(getChaseVerdict(100, 70, 12));   // "Need 30 runs in 12 balls | Almost Impossible"
console.log(getChaseVerdict(150, 149, 1));   // "Need 1 runs in 1 balls | Comfortable"