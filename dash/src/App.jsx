import'./App.css'
function RegistroForm() {
  return (
    <div className="registro-contenedor">
      <div className="registro-caja">
        <div className="logo">
          <img
            src="./public/img/logo.svg" // Puedes cambiar esta URL por tu propio logo
            alt="Logo"
          />
        </div>
        <h2>Login</h2>
        <form className="registro-formulario">
          <label htmlFor="usuario">Correo Electrónico</label>
          <input type="text" id="usuario" name="usuario" placeholder="Tu Correo electrónico" required />
          
          <label htmlFor="correo">Contraseña</label>
          <input type="email" id="correo" name="correo" placeholder="Tu Contraseña" required />

          <p>Se te enviará un correo para confirmar tu registro.</p>
          <button type="submit">Registrarse</button>
        </form>
        <div className="enlaces-pie">
          <a href="/login">Iniciar sesión</a> | <a href="/recuperar-contraseña">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
}

export default RegistroForm;

