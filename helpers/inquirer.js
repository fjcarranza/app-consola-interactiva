const inquirer = require('inquirer');
require ('colors');

const preguntas=[
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?', 
        choices: [
            {
                value:1,
                name:' 1.'.green + ' Crear Tares'
            }, 
            {
                value:2,
                name:' 2.'.green +' Listar tareas', 
            },
            {
                value:3,
                name:' 3.'.green +' Listar tareas completadas',
            },
            {
                value:4,
                name:' 4.'.green +' Listar tareas pendiente', 
            },
            {
                value:5,
                name:' 5.'.green +' Listar tarea(s)', 
            },
            {
                value:6,
                name:' 6.'.green +' Borrar tarea', 
            },
            {
                value:0,
                name:' 0.'.green +' Salir'
            }
        ]
    }
]

const questions = [
    {
      type: 'input',
      name: 'confirm',
      message: 'Presione cualquier tecla para continuar..'.red,
      
    }]

const inquirerMenu=async()=>{
   // console.clear();
    console.log("=======================================".green);
    console.log("       Seleccione una Opcion".w);
    console.log("=======================================".green);

    const {opcion}=await inquirer.prompt(preguntas);
    return opcion;
}

const pausa=async()=>{
    // console.clear();
     
     console.log("\n=============", "<<ENTER>>".green, "===============\n");
 
     const {opcion}=await inquirer.prompt(questions);
     return opcion;
 }


const leerInput=async(message)=>{
    const questions = [
        {
          type: 'input',
          name: 'desc',
          message,
          validate(value){
              if(value.length===0){
                  return 'Por favor ingrese un Valor';
              }
              return true;
          }
        }];
        const {desc}=await inquirer.prompt(questions);
        return desc;
     
}

module.exports={
    inquirerMenu,
    pausa,
    leerInput
}