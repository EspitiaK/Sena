const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.get('/', (req, res)=> {
  res.json('Hola mundo');
});

router.get('/usuarios', (req, res) => {

  mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nuevo-usuario',(req,res)=>{

const {name,lastName,userName,email,password,birthdate,address,phone,gender} = req.body;
let alumno = [name,lastName,userName,email,password,birthdate,address,phone,gender];

let nuevoAlumno = `INSERT INTO usuarios(name,lastName,userName,email,password,birthdate,address,phone,gender)
                  VALUES(?,?,?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoAlumno, alumno, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Alumno matriculado`, })
  });
});
router.post('/iniciarsesion',(req,res)=>{

const {email,contraseña} = req.body;
let alumno = [email,contraseña];

let nuevoAlumno = `INSERT INTO usuarios(email,contraseña)
                  VALUES(?,?)`;
mysqlConnection.query(nuevoAlumno, alumno, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Alumno matriculado`, })
  });
});

router.put('/usuario/:idUsuario', (req, res) => {
  const {nombre,apellido,nombreDeUsuario,email,contraseña,fechaNacimiento,direccion,telefono,genero} = req.body;
  let paraUser= [nombre,apellido,nombreDeUsuario,email,contraseña,fechaNacimiento,direccion,telefono,genero];
  const { idUsuario } = req.params;
  mysqlConnection.query(`UPDATE usuarios SET nombre = ?,apellido = ?,
  nombreDeUsuario = ?,email = ?,contraseña = ?,fechaNacimiento = ?,
  direccion = ?,telefono = ?,genero = ? WHERE idUsuario = ${idUsuario}`,
  paraUser, (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Estudiante actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/usuario/:idUsuario', (req, res) => {
  const { idUsuario } = req.params;
  mysqlConnection.query('DELETE FROM usuarios WHERE idUsuario = ?',
   [idUsuario], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Estudiante eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
