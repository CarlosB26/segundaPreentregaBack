import express  from 'express';
const router = express.Router();
import fs from 'fs';
const productosData = JSON.parse(fs.readFileSync('productos.json'));

router.get('/', async(req, res) => {
  try {
    res.render('home', { title: 'Gestion productos', fullname: 'Carlos', productos: productosData});
} catch (error) {
    res.status(500).json({ error: 'Error al cargar productos' });
}
});

export default router;