const Person = require('../models/personModel')
const mongoose = require('mongoose')


const createPerson = async (req, res) =>{
    const {name} = req.body;

    if (typeof name !== 'string') {
        return res.status(400).json({error: "Name must be a string!"})
      }

    try{
        const person = await Person.create({name})
        res.status(200).json(person)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

const getPerson = async (req, res) =>{
    const {user_id} = req.params;
    let person;

    if(!mongoose.Types.ObjectId.isValid(user_id)){
        //encoded this so it can work for "Mark Essien"
        const personName = decodeURIComponent(user_id);

        person = await Person.findOne({ name: personName });

        if(!person){return res.status(404).json({error: 'No such person found'})}

    } else {
        person = await Person.findById(user_id);

        if(!person){return res.status(404).json({error: 'No such person found'})}
    }

    res.status(200).json(person)
}

const updatePerson = async (req, res) => {
    const { user_id } = req.params;
    const { name } = req.body;
  
    if (typeof name !== 'string') {
      return res.status(400).json({ error: "Name must be a string!" });
    }
  
    const conditions = !mongoose.Types.ObjectId.isValid(user_id)
      ? { name: decodeURIComponent(user_id.replace(/\+/g, '%20')) }
      : { _id: user_id };
  
    const person = await Person.findOneAndUpdate(conditions, { name });
  
    if (!person) {
      return res.status(404).json({ error: 'No such person found' });
    }
  
    res.status(200).json({ message: "Person updated successfully" });
  };


  const deletePerson = async (req, res) => {
    const { user_id } = req.params;
  
    const conditions = !mongoose.Types.ObjectId.isValid(user_id)
      ? { name: decodeURIComponent(user_id.replace(/\+/g, '%20')) }
      : { _id: user_id };
  
    try {
      const person = await Person.findOneAndDelete(conditions);
  
      if (!person) {
        return res.status(404).json({ error: 'No such person found' });
      }
  
      return res.status(200).json({ message: 'Person deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  



module.exports ={
    createPerson,
    getPerson,
    updatePerson,
    deletePerson
}