import "./Usuario.css";

const user = "Usuario";

const Usuario = () => {
  return (
    <>
      <div class="usuario">
        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/astral-7998996-6580607.png?f=webp" class="usuarioAvatar" />
        <span class="usuarioName">{user}</span>
      </div>
    </>
  );
};

export default Usuario;
