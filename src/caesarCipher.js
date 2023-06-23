function caesarChiper(string, shift){
    const ASCII_DIFF = 26;
    shift = shift % ASCII_DIFF;

    function shiftChar(char) {
        const ASCII_A = 65;
        const ASCII_Z = 90;
        const ASCII_a = 97;
        const ASCII_z = 122;
        const charCode = char.charCodeAt(0);

        if(ASCII_A <= charCode && charCode <= ASCII_Z)
            return String.fromCharCode((charCode - ASCII_A + shift) % ASCII_DIFF + ASCII_A);
        if(ASCII_a <= charCode && charCode <= ASCII_z)
            return String.fromCharCode((charCode - ASCII_a + shift) % ASCII_DIFF + ASCII_a);
        return char;
    }

    return [...string].map(char => shiftChar(char)).join("");
    
}


export default caesarChiper;