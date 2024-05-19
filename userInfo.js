// userinfo.js

function createUserProfiles(names, modifiedNames) {
  // arranges name and modified name in while using the index
  // and name from the formatArrayString function
  return names.map((name, index) => ({
    id: index + 1,
    originalName: name,
    modifiedName: modifiedNames[index]
  }));
}
//exports function to be used 
module.exports = createUserProfiles; // Export the function for use in other files
