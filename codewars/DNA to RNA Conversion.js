//CODEWARS JS TASKS 


//TASK 6(DNA to RNA Conversion)
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


//SOLUTION
function DNAtoRNA(dna) {
    // Replace all occurrences of 'T' with 'U' in the given DNA string
    return dna.replace(/T/g, 'U');
  }
  
  console.log(DNAtoRNA("GCAT"));  // Output: "GCAU"
  console.log(DNAtoRNA("GATTACA"));  // Output: "GAUUACA"
  console.log(DNAtoRNA("TTTT"));  // Output: "UUUU"
  console.log(DNAtoRNA(""));  // Output: ""
  