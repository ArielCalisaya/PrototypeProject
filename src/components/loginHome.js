import React from 'react';
import profileImg from '../images/profileImg.png'
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome'
import { faUser, faKey} from  '@fortawesome/free-solid-svg-icons'
import '../css/index.css'      //css solo para login Home


class Login extends React.Component{
  render(){
    return(

      <body>
    <div className="contenedor">
      <header>
      <h1 className="title">Play At</h1>
      <a href="/">Registrate</a>
      </header>
      <div className="login">
      <article className="fondo">
        <img src={profileImg} alt="user_image" />
        <h3>Inicio de Sesión</h3>
        <form className="" action="index.html" method="post">
          <input className="inp" type="text" name="user" value=""/><FontAwesomeIcon icon={faUser} size="lg" id="userIcon" /><br/>
          <input className="inp" type="password" name="pass" value=""/><FontAwesomeIcon icon={faKey} size="lg" color="white" id="keyIcon"/> <br/>
          <a href="/" className="ForgottenPass">He olvidado mi contraseña</a>
          <input className="boton" type="submit" name="inicio" value="Iniciar Sesión"/>
        </form>
      </article>
      </div>
    </div>
    </body>


    )
  }
}

export default Login;
