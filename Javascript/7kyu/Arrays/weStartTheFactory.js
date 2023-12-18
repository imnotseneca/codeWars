/**In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

A gift can be made if we have all the necessary materials to make it.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // [] */

function manufacture(gifts, materials) {
    // Crea un conjunto de los materiales disponibles.
    const availableMaterials = new Set(materials);
  
    // Filtra los regalos que se pueden hacer con los materiales disponibles.
    const manufacturableGifts = gifts.filter(gift => {
      // Crea un conjunto de los materiales necesarios para cada regalo.
      const giftMaterials = Array.from(new Set(gift));
  
      // Comprueba si todos los materiales del regalo están disponibles.
      return giftMaterials.every(material => availableMaterials.has(material));
    });
  
    return manufacturableGifts;
  }