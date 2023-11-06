import { useForm } from "react-hook-form";
import Input from "../Input";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { postTaskFn } from "../../api/taskApi";

const AdminForm = () => {
  //------ RHF
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();

//------ TQUERY
const {mutate:postTask} = useMutation({mutationFn: postTaskFn,})

//------ HANDLER
  const handleSubmit = (data) => {
    
    postTask(data)
    

    toast.success('Tarea agregada con exito !!!')
    Swal.fire({
      title: "Tarea agregada con exito !!!",
      icon: "success",
    })
    reset();
  };


//------ RENDER

  return (
    <form className="" onSubmit={onSubmitRHF(handleSubmit)}>
      <Input
        register={register}
        options={{
          required: true,
          minLength: 5,
          maxLegnth: 30,
        }}
        label="Titulo"
        name="title"
        placeholder="Ingrese el titulo de la tarea"
        error={!!errors.title}
      />
      <Input
        register={register}
        options={{
          required: true,
          minLength: 5,
          maxLegnth: 50,
        }}
        className="mt-1"
        label="subtitulo"
        name="subtitulo"
        placeholder="Ingrese el subtitulo de la tarea"
        error={!!errors.subtitulo}
      />
      <Input
        register={register}
        options={{
          required: true,
          minLength: 5,
        }}
        className="mt-1"
        label="descripcion"
        name="descripcion"
        placeholder="Ingrese la descripcion de la tarea"
        error={!!errors.descripcion}
      />
      <button className="btn btn-success mt-3 " type="submit">
        Guardar
      </button>
    </form>
  );
};

export default AdminForm;
