require ('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu,
       leerInput,
       pausa, 
       listadoTareasBorrar,
       confirmar,
       tareasCompletar
      }=require('./helpers/inquirer');


const Tareas = require('./model/tareas');

const main=async()=>{

    let opt='';
    const tareas=new Tareas();

    const tareasDB=leerDB();
    
    if (tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }
 
    
    do{
        opt=await inquirerMenu();   
        switch (opt) {
            case 1:
                const desc=await leerInput("Descripción:");
                tareas.crearTarea(desc);
                break;
            case 2:
                tareas.listadoCompleto();
                break;
            case 3:
                tareas.listarPendientesCompletadas(true);
                break;
            case 4:
                tareas.listarPendientesCompletadas(false);
                break;
            case 5:
                const selec=await tareasCompletar(tareas.listadoArr); 
                tareas.tareasCompletadas(selec);
                break;
            case 6:
                const id=await listadoTareasBorrar(tareas.listadoArr);
                if(id==='0'){break}
                const confirma = await confirmar("Confirma que quiere Borrar la Tarea?".yellow);
                
                if(confirma){
                    tareas.borrarTarea(id);
                    console.log("Tarea Borrada.".red.bgWhite);
                }else{
                    console.log("Se Cancelo el Borrado de la Tarea.".green);
                }
                break;
        
        }
        guardarDB(tareas.listadoArr);        
        
        await pausa();
        
        console.clear();
    }while(opt !== 0);

    
    
    
}

main();