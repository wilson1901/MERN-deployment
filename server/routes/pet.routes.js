const PetController = require("../controllers/pet.controller");

module.exports = app => {
    app.get("/pets/", PetController.findAllPets);
    app.get("/pets/:id", PetController.getOnePet);
    app.put("/pets/:id", PetController.updateExistingPet);
    app.post("/pets/new", PetController.createNewPet);
    app.delete("/pets/:id", PetController.deleteAnExistingPet);
};