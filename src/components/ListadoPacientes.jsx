import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="capitalize font-black text-center text-2xl">
            Listado Pacientes
          </h2>
          <p className="capitalize font-bold text-lg mt-5 text-center mb-10">
            administra tus{" "}
            <span className="capitalize text-indigo-600 font-bold text-xl">
              Pacientes y citas
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className=" capitalize font-black text-center text-2xl">
            no hay pacientes
          </h2>
          <p className="capitalize font-bold text-lg mt-5 text-center mb-10">
            comienza agregando pacientes{" "}
            <span className="capitalize text-indigo-600 font-bold text-xl">
              y apareceran debajo
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
