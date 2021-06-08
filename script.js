const birthday = (s, d, m) => {
    // Write your code here
    let matches = 0;
    for(let i = 0; i < s.length; i++) {
        let sCheck_M_Spaces = s.slice(i, m + i);
        let sumOf_M_Spaces = sCheck_M_Spaces.reduce((total, cur) => total + cur);
        console.log(i, ' =>', sCheck_M_Spaces, "total ", sumOf_M_Spaces);
        if(sumOf_M_Spaces === d){
            matches++;
        }
    };
    console.log(matches);
    return matches;
}
