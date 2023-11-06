
const AdminTable = (props) => {
  const {task, setTask}= props;
  return (
    <section className='table-responsive mt-3 rounded'>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {task.map((task,index) => (
            <TableRow task={task} key={task.id} index={index} />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default AdminTable