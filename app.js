require ('colors');
const {inquirerMenu, pausa}=require('./helpers/inquirer');

console.clear();

const main=async()=>{
    console.log('Hola Mundo');
    let opt='';
    do{
        opt=await inquirerMenu();   
        console.log("\n Opcion = ", opt);
        await pausa();
        
        console.clear();
    }while(opt !== 0);

    
    //pausa();
    
}

main();