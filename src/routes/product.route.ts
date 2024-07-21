import express, {Request, Response} from "express";
import Product, {IProduct} from "../models/product";
const router = express.Router();

// get all products
router.get('/', async(req: Request, res: Response)=>{
    try {
        const products = await Product.find();
        res.json(products)
    } catch (err:any) {
        res.status(500).send(err.message)
    }
})

// Get product by ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err:any) {
        res.status(500).send(err.message);
    }
});

// Create a new product
router.post('/', async (req: Request, res: Response) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
        console.log(newProduct)
    } catch (err:any) {
        res.status(400).send(err.message);
    }
});

// Update a product
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err:any) {
        res.status(400).send(err.message);
    }
});

// Delete a product
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (product) {
            res.status(204).send();
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err:any) {
        res.status(500).send(err.message);
    }
});

export default router;