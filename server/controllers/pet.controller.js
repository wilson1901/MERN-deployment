const Pet = require("../models/pet.model");

module.exports.findAllPets = (req, res) => {
    console.log("findAllPets");
    Pet.find()
        .then(allDaPets => res.json({ pets: allDaPets }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getOnePet = async (req,res) =>{
    console.log("Controller method: getOneUser");
    try{
        const pet = await Pet.findOne({_id: req.params.id});
        console.log(pet);
        return res.json({pet});
    }catch(err){
        return res.status(500).json({err})
    }
}

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json({ user: oneSingleUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPet = (req, res) => {
    console.log("createNewPet");
    Pet.create(req.body)
        .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
        .catch(err => res.status(500).json({  err }));
};

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};