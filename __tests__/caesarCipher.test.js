const caesarCipher = require("../caesarCipher");

const plainText = "Defend the East Wall of the castlez.";
const shift = 1;
const cipherText = "Efgfoe uif Fbtu Xbmm pg uif dbtumfa.";

test("caesarCipher", () =>  {
    expect(caesarCipher(plainText, shift)).toBe(cipherText);
})