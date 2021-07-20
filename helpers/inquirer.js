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
                name:' 1. Crear Tares'
            }, 
            {
                value:2,
                name:' 2. Listar tareas', 
            },
            {
                value:3,
                name:' 3. Listar tareas completadas',
            },
            {
                value:4,
                name:' 4. Listar tareas pendiente', 
            },
            {
                value:5,
                name:' 5. Listar tarea(s)', 
            },
            {
                value:6,
                name:' 6. Borrar tarea', 
            },
            {
                value:0,
                name:' 0. Salir'
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
    console.log("       Seleccione una Opcion".green);
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

module.exports={
    inquirerMenu,
    pausa
}