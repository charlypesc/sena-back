const db = require('../config/db'); // Configuración de la conexión a la base de datos
const Terminos = {
  findAll: async () => {
    const [rows] =  await db.promise().query('SELECT * FROM Terminos'); // Recupera todos los usuarios
    return rows;
  },
  
  findById: async (id) => {
    const [row] = await db.promise().query('SELECT * FROM Terminos WHERE Id = ?', [id]);
    return row;
  },
  createTer: async (terminoData) => {
    const { Termino, Descripcion, FechaCreacion, ImagenUrl, Link } = terminoData;
    return db.promise().query('INSERT INTO Terminos ( Termino, Descripcion, FechaCreacion, ImagenUrl, Link) VALUES (?, ?, ?, ?, ?)', [Termino, Descripcion, FechaCreacion, ImagenUrl, Link]);
  },
  updateTer: async (id, terminoPut) => {
    const { Termino, Descripcion, FechaModificacion, ImagenUrl, Link } = terminoPut;
    console.log('ESTOY EN EL MODELO')
    console.log(terminoPut)
    return db.promise().query('UPDATE Terminos SET Termino = ?, Descripcion = ?, FechaModificacion = ?, ImagenUrl = ?, Link = ? WHERE Id = ?', [Termino, Descripcion, FechaModificacion, ImagenUrl, Link, id]);
  },
  deleteTer: async (id) => {
    return db.promise().query('DELETE FROM Terminos WHERE Id = ?', [id]);
  }
};

module.exports = Terminos;  