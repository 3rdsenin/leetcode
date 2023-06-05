// Function to check isomorphic strings
function isIsomorphic(str1, str2) {
    // If length of strings are not equal then
    // they are not isomorphic
    if (str1.length !== str2.length) {
        return false;
    }
    // Map to store the mapping between
    // characters of first string to second
    const map = new Map();

    // Set to store the already mapped
    // character of second string
    const set = new Set();

    for (let i = 0; i < str1.length; i++) {

        // Taking ith char from both strings
        char1 = str1.charAt(i);
        char2 = str2.charAt(i);

        //check to see if a character from first string has been mapped
        if (map.has(char1) == true && map.get(char1) !== char2) {

            //check to see if the value mapped to current character from first string is the same as character from second string

            return false;


        }

        //if current character from first string is appearing for the first time, i.e it has not been mapped
        else {
            //first check if current character from second string has been mapped
            if (set.has(char2)) {
                return false;
            }
            // If none of above conditions is true
            // it means both char1 and char2 are
            // appearing for the first time
            // insert them into the map

            map.set(char1, char2);
            set.add(char2);
        }




    }
    console.log(map);
    return true
}
str1 = "egg";
str2 = "add";

console.log(isIsomorphic(str1, str2));