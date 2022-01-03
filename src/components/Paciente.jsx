function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div className="md:ml-5 bg-white shadow-md px-5 py-10 rounded-xl mb-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        fecha alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          className="rounded-sm py-2 px-10 text-white text-bold uppercase bg-indigo-600 hover:bg-indigo-700"
          onClick={() => {
            setPaciente(paciente);
          }}
        >
          Editar
        </button>
        <button
          className="rounded-sm py-2 px-10 text-white text-bold uppercase bg-red-600 hover:bg-red-700"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;
