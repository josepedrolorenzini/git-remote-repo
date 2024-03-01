import { get } from "http";

const intro = ():string|number =>{
    let name = 'mary';
    let age  = 42;
    return  `hi ${name} your age is ${age} `
}

async function getFavoriteNumber(): Promise<number> {
    return 26;
  }

  console.log(intro(),getFavoriteNumber())


  function fullname(firstname:string,lastname:string):string{
     return `${firstname} ${lastname}`
  }

  console.log(`hello ${fullname('pepe','lorenzini')}`)