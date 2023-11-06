const url = import.meta.env.VITE_API_URL;

export const getPostFn = async ()=>{
    const res = await fetch(`${url}/`);
    if(!res.ok){
        throw new Error("Ocurrio un error al obtener los datos de la bd");
    }
    const data = await res.json();

    return data;
}