const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        unique: [true, "La mascota ya existe, prueba con otro"],
        minlength: [3, "Debe tener mas de 3 caracteres"]
    },
    petType: {
        type: String,
        minlength: [3, "Debe tener mas de 3 caracteres"]
    },
    petDescription: {
        type: String,
        minlength: [3, "Descripcion debe tener mas de tres caracteres"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
}, { timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);
PetSchema.plugin(uniqueValidator)
module.exports = Pet;