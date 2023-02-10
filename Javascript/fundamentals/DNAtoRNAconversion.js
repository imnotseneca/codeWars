//PREP:
//PARAMETERS: we have "dna" as a string of letters that describes the nucleic acid bases in DNA.
//RETURN: we must return a new string that has been transformed from DNA to RNA. It means we must replace "T" for "U"
//EXAMPLE: "GCAT"  =>  "GCAU"
// ("TTTT"), "UUUU")
// ("TTTT"), "UUUU")
// ("GACCGCCGCC"), "GACCGCCGCC")

function DNAtoRNA(dna) {
    for(let i = 0; i < dna.length; i++) {
      if(dna[i].includes('T')) {
        dna = dna.replace('T','U')
    }
  }
    return dna
  }