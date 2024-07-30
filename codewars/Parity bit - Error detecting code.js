//CODEWARS JS TASKS 


//TASK 13(Parity bit - Error detecting code) # 6 kyu
// In telecomunications we use information coding to detect and prevent errors while sending data.

// A parity bit is a bit added to a string of binary code that indicates whether the number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code, and can detect a 1 bit error.

// In this case we are using even parity: the parity bit is set to 0 if the number of 1-bits is even, and is set to 1 if odd.

// We are using them for the transfer of ASCII characters in binary (7-bit strings): the parity is added to the end of the 7-bit string, forming the 8th bit.

// In this Kata you are to test for 1-bit errors and return a new string consisting of all of the correct ASCII caracters in 7 bit format (removing the parity bit), or "error" in place of ASCII characters in which errors were detected.


//SOLUTION
function parityBit(binary) {
    // Split the input string into 8-bit segments
    const segments = binary.split(' ');
  
    // Process each 8-bit segment
    const result = segments.map(segment => {
      // Check if the segment is exactly 8 bits long
      if (segment.length !== 8) {
        return "error"; // Invalid segment length
      }
  
      // Get the 7-bit data and the parity bit
      const dataBits = segment.slice(0, 7);
      const parityBit = segment[7];
  
      // Count the number of 1-bits in the 7-bit data
      const oneBitsCount = dataBits.split('').filter(bit => bit === '1').length;
  
      // Determine if the parity bit is correct
      const expectedParityBit = oneBitsCount % 2 === 0 ? '0' : '1';
  
      // Return the result based on parity check
      return parityBit === expectedParityBit ? dataBits : "error";
    });
  
    // Join the results with spaces
    return result.join(' ');
  }
  