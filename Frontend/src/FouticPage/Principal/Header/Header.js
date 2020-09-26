import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './estilos.css';
import Menu from './Menu/MenuMap';
import logo from '../../img/logo.jpeg';
import menu from '../../img/menu.png';
import { Dropdown, Button } from 'react-bootstrap';
import perfil from '../../img/Usuario/Perfil.png';

class Header extends Component {

  render() {
    return (
      <div className="hola">
        <div className="header" id="menuResponsive">
        <div className="infoMenu" >
        <img src={menu} />
        </div>
          <div>
            <div className="logoTitulo" href="/">
              <img src={logo} className="logoImg" />
              <p className="titulo">Foutic</p>
            </div>
          </div>
          <div className="todoMenu" >
              <nav className="contenedorInicio">
                <ul className="contenedorLista">
{/*                  {Menu.Encabezado.map((item) => {
                    if (item.type === 0) {
                      return (
                        <div className="encerrandoListado">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="listado enlaces">
                              {item.buttom}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="children">
                              {Menu.Despliegue.map((item2) => {
                                return (
                                  <Dropdown.Item href={item2.href}><Link className="enlaces" to={item2.page}>{item2.name}</Link></Dropdown.Item>
                                );
                              })}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      )
                    } else if (item.type === 2) {
                      return (
                        <div className="encerrandoListado">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="listado enlaces">
                              {item.buttom}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="children">
                              {Menu.Despliegue2.map((item3) => {
                                return (

                                  <Dropdown.Item href={item3.href}><Link className="enlaces" to={item3.page}>{item3.name}</Link></Dropdown.Item>

                                );
                              })}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      );
                    } else if (item.type === 1) {
                      return (

                        <div className="encerrandoListado">
                          <li key={item.key} className="listado"><Link className={item.class} className="enlaces" to={item.page}>{item.buttom}</Link></li>
                        </div>
                      );
                    }
                  })}
                  */}
                  <Link to="/" ><Button variant="success" className="listado">Inicio</Button></Link>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="listado">
                      Catalogos
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link to="/catalogos/hombres" className="enlaces"><Dropdown.Item href="#/action-1">Hombres</Dropdown.Item></Link>
                      <Link to="/catalogos/mujeres" className="enlaces"><Dropdown.Item href="#/action-2">Mujeres</Dropdown.Item></Link>
                      <Link to="/catalogos/niños" className="enlaces"><Dropdown.Item href="#/action-3">Niños</Dropdown.Item></Link>
                      <Link to="/catalogos/niñas" className="enlaces"><Dropdown.Item href="#/action-4">Niñas</Dropdown.Item></Link>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="listado">
                      Diseño
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link to="/diseño/subir imagen" className="enlaces"><Dropdown.Item href="#/action-1">Subir Imagen</Dropdown.Item></Link>
                      <Link to="/diseño/personalizar" className="enlaces"><Dropdown.Item href="#/action-2">Personalizar</Dropdown.Item></Link>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Link to="/iniciar seccion"><Button variant="success" className="listado">Iniciar Seccion </Button></Link>
                  <Link to="/registrarse"><Button variant="success" className="listado">Registrarse</Button></Link>
                  <Link to="/perfil" className="enlaces"><Button variant="success" className="listado activacion">Perfil</Button></Link>
                </ul>
              </nav>
              <Link to="/perfil"><img src={perfil} className="imagenDeUsuario" /></Link>
          </div>
        </div>
        {/*<Rutas />*/}
      </div>
    );
  }
}

export default Header;
