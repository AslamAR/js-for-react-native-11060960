// stringArray=array of modifiedNames

function Userprofiles(names, stringArray) {
  var id = 1000;
  var objectsArray = [];
  for (let i = 0; i < names.length; i++) {
      objectsArray[i] = `${names[i]} ${stringArray[i]} ${id + (i+1)}`;
  }
  return objectsArray;
}

processArray([1, 2, 3, 4]);
var modifiedNames = formatArrayStrings(["Aslam", "Abenna", "Khan", "Osman"], numbs);
var profiles = Userprofiles(["Aslam", "Abenna", "Khan", "Osman"], modifiedNames);
console.log(profiles);
