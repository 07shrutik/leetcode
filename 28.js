let haystack ="sadbutsad"
let needle ="sad"


var strStr = function(haystack, needle) {
   
    if (!needle) {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
}
 console.log(strStr(haystack,needle))