// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  
  Elf.prototype.attack = function() { 
    return 'atack with ' + this.weapon
  }

  const peter = new Elf('Peter', 'stones');
  console.log(peter.__protp__)
  const sam = new Elf('Sam', 'fire');
  console.log(sam.attack())