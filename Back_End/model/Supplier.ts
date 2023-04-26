import mongoose, { Schema, Types } from "mongoose";


const SupplierSchema = new mongoose.Schema({
    supplier_name: {
        type: String,
        required: true
    },
    supplier_address: {
        type: String,
    },
    supplier_phone: {
        type: String,
        required: true
    },
    supplier_email: {
        type: String,
        required: true
    },
    supplier_password: {
        type: String,
        required: true,
    },
    createAtSupplier: {
        type: Date,
        required: true
    },
    updateAtSupplier: {
        type: Date,
        required: true
    },
    deleteAtSupplier: {
        type: Date,
        required: true
    },
    payment_methods: {type: Types.ObjectId, ref: "payment_status" },
    current_order: {type: Types.ObjectId, ref: "order", required: true },
    user_id: {type: Types.ObjectId, ref: "user", required: true }
});

const Supplier = mongoose.model("Supplier", SupplierSchema);
export default Supplier;
