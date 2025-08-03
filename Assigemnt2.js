const bytes = new Uint8Array([72,101,108,108,111]);
const asciiString =bytesTOAscii(bytes);
console.log(asciiString);


function bytesTOAscii(byteArray){
return new TextDecoder().decode(byteArray);
}