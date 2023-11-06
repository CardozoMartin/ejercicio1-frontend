
const API_URL = import.meta.env.VITE_API_URL
export const getTaskFn = async ()=>{
    const res = await fetch(`${API_URL}/`);
    
    if(!res.ok){
      throw new Error("Ocurrio un erro al obtener las tareas")
    }
    const data = await res.json();
    return data;
  }

  export const postTaskFn = async (data)=>{
    const res = await fetch(`${API_URL}/`,{
        method:'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-type':'application/json',
        }
    })

    if(!res.ok){
        throw new Error("Ocurrio un error al crear una tarea")
    }
  }