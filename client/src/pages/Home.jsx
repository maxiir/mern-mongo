import { Formik, Form } from "formik";
import { saveEmpleado } from "../api/api.js";

function Home() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        cel: "",
      }}
      onSubmit={async (values) => {
        console.log(values);
        const respuesta = await saveEmpleado(values);
      }} //para ver lo q se va a enviar
    >
      {(
        { handleChange, handleSubmit } //handlechange almacena lo q tipea el usuario, para luego guardar en campos de initialValues. Hanlesubmit le digo q el formulario se va a ejecutar
      ) => (
        <form onSubmit={handleSubmit}>
          <label>nombre</label>
          <input type="text" name="name" onChange={handleChange} />
          <label>apellido</label>
          <input type="text" name="lastname" onChange={handleChange} />
          <label>celular</label>
          <input type="text" name="cel" onChange={handleChange} />
          <button type="submit">save</button>
        </form>
      )}
    </Formik>
  );
}

export default Home;
