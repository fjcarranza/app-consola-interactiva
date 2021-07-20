/*
    _listado:
    {'uuid-1231-12358-545-2:{id:1, desc:Tomar el Te, completadoEn:20210720}}, 
    {'uuid-1231-12358-545-2:{id:1, desc:Estudiar NodeJS, completadoEn:20200720}}, 
    {'uuid-1231-12358-545-2:{id:1, desc:Estudiar NodeJS, completadoEn:20200721}}, 
 */

const Tarea = require("./tarea");

class Tareas{
    _listado={};
    constructor(){
        this._listado={};
    }

    crearTarea(desc=''){
        const tarea=new Tarea(desc);
        this._listado[tarea.id]=tarea;

    }
}

module.exports=Tareas;
