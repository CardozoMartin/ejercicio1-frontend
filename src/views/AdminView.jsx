import { useEffect, useState } from "react"
import AdminForm from "../componentes/admin/AdminForm"
import AdminTable from "../componentes/admin/AdminTable"

//const taskLS = JSON.parse(localStorage.getItem('task')) || [];
const AdminView = () => {
    const [task, setTask]= useState([]);

    
  return (
    <section className="container text-center ms-auto">

    <h1 className="text-white">Formulario Para Cargar una Tarea</h1>
    <AdminForm setTask={setTask}/>
    <h2>Lista de Tareas</h2>
    <AdminTable task={task} setTask={setTask}/>
    
    </section>
  )
}

export default AdminView