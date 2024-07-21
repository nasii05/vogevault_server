import {Schema, model, Document} from "mongoose";

export interface IProduct extends Document{
    name: string,
    price: number,
    description: string,
    inStock: boolean
}

const productSchema = new Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true},
    description: { type: String, required: true},
    inStock: { type: Boolean, required: true},
});

const Product = model<IProduct>('Product', productSchema);

export default Product;