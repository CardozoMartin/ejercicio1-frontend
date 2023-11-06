import { TableRow } from "./TableRow";

const AdminTable = (props) => {
  const { task } = props;



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
          {task.map((item, index) => (
            <TableRow task={item} key={item.id} index={index} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AdminTable;
