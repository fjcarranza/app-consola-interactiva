const inquirer = require('inquirer');
const Tarea = require('../model/tarea');
require ('colors');



const inquirerMenu=async()=>{
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
    console.clear();
    console.log("=======================================".green);
    console.log("       Seleccione una Opcion".white);
    console.log("=======================================".green);

    const {opcion}=await inquirer.prompt(preguntas);
    return opcion;
}

const pausa=async()=>{
    // console.clear();
    const questions = [
        {
            type: 'input',
            name: 'confirm',
            message: 'Presione cualquier tecla para continuar..'.red,
            
        }]
     
     console.log("\n=============", "<<ENTER>>".green, "===============\n");
 
     const {confirm}=await inquirer.prompt(questions);
     return null;
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

const listadoTareasBorrar=async(tareas=[])=>{
    let idx=0;
    const choices= tareas.map((tarea, i)=>{
        idx=i+1;
        const capital=tarea.desc.replace(/^\w/, (c) => c.toUpperCase());
        return {
            value: tarea.id,
            name:`${idx} - `.green + capital
        }
    })
    choices.unshift({
        value:'0',
        name:'0 - '.green+'Ninguna',
    })
    
    const preguntas=[
        {
            type:'list',
            name:'id',
            message: 'Borrar',
            choices
        }
    ]
    console.log();
    const {id}=await inquirer.prompt(preguntas);
    return id;
}

const confirmar=async(message)=>{
    const questions = [
        {
          type: 'confirm',
          name: 'ok',
          message,
          
        }]
    console.log();
    const {ok}=await inquirer.prompt(questions);
    return ok;
}

const tareasCompletar=async(tareas=[])=>{
    let idx=0;
    const choices= tareas.map((tarea, i)=>{
        idx=i+1;
        const capital=tarea.desc.replace(/^\w/, (c) => c.toUpperCase());
        return {
            value: tarea.id,
            name:`${idx} - `.green + capital,
            checked: (tarea.completadoEn) ? true : false
        }
    });
    
    const preguntas=[
        {
            type:'checkbox',
            name:'ids',
            message: 'Tareas Completas',
            choices
        }
    ]
    console.log();
    const {ids}=await inquirer.prompt(preguntas);
    return ids;
}

module.exports={
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    tareasCompletar
}