import { useQuery } from "@tanstack/react-query";
import AdminForm from "../componentes/admin/AdminForm";
import AdminTable from "../componentes/admin/AdminTable";
import { getTaskFn } from "../api/taskApi";

const AdminView = () => {
  const {
    data: task,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["task"], queryFn: getTaskFn });
  if (isError) {
    return (
      <section className="container text-center ms-auto">
        <h1 className="text-white">Formulario Para Cargar una Tarea</h1>
        <AdminForm />
        <h2 className="text-white">Lista de Tareas</h2>
        <div className="alert alert-danger">
          Ocurrio un error cargando las tareas
        </div>
        )
      </section>
    );
  }

  return (
    <section className="container text-center ms-auto">
      <h1 className="text-white">Formulario Para Cargar una Tarea</h1>
      <AdminForm />
      <h2>Lista de Tareas</h2>
      {isError && (
        <div className="alert alert-danger">
          Ocurrio un error cargando las tareas
        </div>
      )}
      
    </section>
  );
};

export default AdminView;
