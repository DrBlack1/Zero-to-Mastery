const boo = (string)=>(name)=>(name2)=> 
    console.log(`${string} ${name} ${name2}`)

// boo('hi')('tim')('becca')
const booString = boo('hi');
//5 years
const booStringName = booString()