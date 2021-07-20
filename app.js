require ('colors');
const {inquirerMenu,
       leerInput,
       pausa}=require('./helpers/inquirer');

const Tareas = require('./model/Tareas');

const main=async()=>{

    let opt='';
    const tareas=new Tareas();

    do{
        opt=await inquirerMenu();   
        switch (opt) {
            case 1:
                const desc=await leerInput("Descripción:");
                tareas.crearTarea(desc);
                break;
            case 2:
                console.log(tareas._listado);
                break;
            case 3:
                
                break;
            case 4:
                
                break;
            case 5:
                
                break;
        
        }
                
        await pausa();
        
        console.clear();
    }while(opt !== 0);

    
    //pausa();
    
}

main();