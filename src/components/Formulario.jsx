import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("algun campo esta vacio");
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //EDITANDO PACIENTE
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //AGREGANDO PACIENTE
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //REINICIAR DATOS
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 capitalize">
      <h3 className="font-black text-center text-2xl capitalize">
        seguimiento de pacientes
      </h3>
      <p className="capitalize font-bold text-lg mt-5 text-center">
        añade pacientes y <span className="text-indigo-600">administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md py-10 px-5 my-10"
      >
        {error && <Error mensaje="todos los campos son obligatorios" />}
        <div className="flex flex-col mb-5">
          <label
            htmlFor="mascota"
            className="uppercase text-gray-700 font-bold"
          >
            nombre mascota
          </label>
          <input
            id="mascota"
            className="border-2 p-2 mt-2 rounded-md placeholder:capitalize"
            type="text"
            placeholder="nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label
            htmlFor="propietario"
            className="uppercase text-gray-700 font-bold"
          >
            nombre propietario
          </label>
          <input
            id="propietario"
            className="border-2 p-2 mt-2 rounded-md placeholder:capitalize"
            type="text"
            placeholder="nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="uppercase text-gray-700 font-bold">
            email
          </label>
          <input
            id="email"
            className="border-2 p-2 mt-2 rounded-md placeholder:capitalize"
            type="email"
            placeholder="email contacto propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="alta" className="uppercase text-gray-700 font-bold">
            alta
          </label>
          <input
            id="alta"
            className="border-2 p-2 mt-2 rounded-md placeholder:capitalize"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="sintomas"
            className="uppercase text-gray-700 font-bold"
          >
            sintomas
          </label>
          <textarea
            className="border-2 p-2 mt-2 rounded-md placeholder:capitalize"
            id="sintomas"
            rows="5"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          className="rounded-sm bg-indigo-600 w-full font-bold uppercase text-white p-2 hover:bg-indigo-700 transition-all cursor-pointer"
          type="submit"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
}

export default Formulario;
