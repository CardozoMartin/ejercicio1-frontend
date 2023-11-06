import { useForm } from "react-hook-form";
import Input from "../Input";
import { toast } from "sonner";
import Swal from "sweetalert2";

const AdminForm = (props) => {
  const {setTask} = props;
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmit = (data) => {
    console.log(data);

    const newTask = {...data, id: 123};
    setTask((prev)=>{[...prev, newTask]})

    toast.success('Tarea agregada con exito !!!')
    Swal.fire({
      title: "Tarea agregada con exito !!!",
      icon: "success",
    })
    reset();
  };
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
