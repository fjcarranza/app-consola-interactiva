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

    borrarTarea(id=''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    
    get listadoArr(){
        const listado=[];

        Object.keys(this._listado).forEach(key=>{
            const tarea=this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }


    crearTarea(desc=''){
        const tarea=new Tarea(desc);
        this._listado[tarea.id]=tarea;

    }

    cargarTareasFromArray(tareas=[]){
        tareas.forEach(tarea => {
           this._listado[tarea.id]=tarea;
        });     
    }
    
    listadoCompleto(){
        console.clear();
        console.log("=======================================".green);
        console.log("          Listado de Tareas".white);
        console.log("=======================================\n".green);
        /*
        Object.keys(this._listado).forEach(key=>{
            let desc=this._listado[key].desc;
            let id=this._listado[key].id;
            
            let est=this._listado[key].completadoEn;
            if (est){
                console.log(`${id} - ${desc} en estado completado el ${est}`);
            }else{
                console.log(`${id} - ${desc} en estado pendiente`);
            }
            

        })
        */
        
        this.listadoArr.forEach((tarea, i) => {
            const idx=i+1;
            let {desc, completadoEn}=tarea;
            let capital=desc.replace(/^\w/, (c) => c.toUpperCase()); 
            const estado=(completadoEn)?`Completada`.green
                                       :`Pendiente`.red;
                 

            console.log(`${idx}- `.green + ` ${capital}` + ` :: ${estado}.`);
        });
    }

    listarPendientesCompletadas(completadas=true){
        console.clear();
        console.log("=======================================".green);
        let titu=(completadas)? "    Listado de Tareas Completada".green
                                : "    Listado de Tareas Incompletas".red;
        console.log(titu);
        
        console.log("=======================================\n".green);
        
        let idc=1;
        let idi=1;
        this.listadoArr.forEach((tarea, i) => {
                                    
            let {desc, completadoEn}=tarea;
            let capital=desc.replace(/^\w/, (c) => c.toUpperCase()); 
            const estado=(completadoEn)?`se completo el ${completadoEn}`.green
                                        :`Pendiente`.red;
            if(completadas && completadoEn){
                console.log(`${idc}- `.green + ` ${capital}` + ` :: ${estado}.`)
                idc=idc+1;
            }
            if(!completadas && !completadoEn){
                console.log(`${idi}- `.green + ` ${capital}` + ` :: ${estado}.`)
                idi=idi+1;
            }
                    

        });
    }
    
    tareasCompletadas(ids=[]){
        ids.forEach(id=>{
            const tarea=this._listado[id];
            if(!tarea.completadoEn){
                const fecha=new Date();
                
                tarea.completadoEn= fecha.getDate() + "-" + (fecha.getMonth()+1) + "-" + fecha.getFullYear() + " a las " + fecha.getHours() + ":" + fecha.getMinutes()+" hrs.";
            }
            
        });
        this.listadoArr.forEach(tarea=>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn=null;
            }
        });
    }
}


module.exports=Tareas;
