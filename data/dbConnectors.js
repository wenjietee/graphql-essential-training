import mongoose from "mongoose";

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/widgets", {
    useNewUrlParser: true,
});

const widgetSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    soldout: {
        type: Boolean,
    },
    inventory: {
        type: String,
    },
    stores: {
        type: Array,
    },
});

const Widgets = mongoose.model("widgets", widgetSchema);

export { Widgets };
