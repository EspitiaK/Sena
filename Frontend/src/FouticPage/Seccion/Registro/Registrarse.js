import React, { Component } from 'react';
import Iniciar from '../Iniciar/IniciarSesion';
import './estilos.css';
import logo from '../../img/logo.jpeg';
import Google from '../Recursos/Google';
import Facebook from '../Recursos/Facebook';

class Registrarse extends Component {
  render() {
    return (
      <div className="contenedorPadre">
        <form className="contenedorDelFormulario">
          <div className="contenedorDeLaImagen">
            <img src={logo} className="logoImg" />
          </div>
          <h3 className="tituloIS">Registrarse</h3>
          <div>
            <label className="infoLabel">Nombre</label>
            <input type="text" placeholder="Nombre de ususario" className="infoInput" />
            <label className="infoLabel">Apellidos</label>
            <input type="text" placeholder="Apellidos" className="infoInput" />
            <label className="infoLabel">Email</label>
            <input type="email" placeholder="Email" className="infoInput" />
            <label className="infoLabel">Contraseña</label>
            <input type="password" placeholder="Contraseña" className="infoInput" />
            <label className="infoLabel">Repetir Contraseña</label>
            <input type="password" placeholder="Contraseña" className="infoInput" />
            <label className="infoLabel">Telefono movil</label>
            <input type="tel" placeholder="Telefono" className="infoInput" />
            <label className="infoLabel">Direccion</label>
            <input type="text" placeholder="Cl.__ # __ - __ " className="infoInput" />
          </div>
          <div className="contMayor">
            <div className="cont">
              <label className="labelMalo">Genero </label>
              <select size="1" className="tamaño">
                <option>Hombre</option>
                <option>Mujer</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="cont">
              <label className="labelMalo">Fecha de nacimiento</label>
              <input type="date" className="tamaño" />
            </div>
          </div>
          <div className="elboton">
            <input type="submit" value="Enviar" className="buttonEnviar" />
          </div>
          <p className="letraO"> O </p>
          <div className="organizar">
            <Google />
            <Facebook />
          </div>
        </form>
      </div>
    );
  }
}

export default Registrarse;
