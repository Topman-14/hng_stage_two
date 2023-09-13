const Person = require('../models/personModel')
const mongoose = require('mongoose')


const createPerson = async (req, res) =>{
    const {name} = req.body;

    if (typeof name !== 'string') {
        return res.status(400).json({error: "Name must be a string!"})
      }

    try{
        const person = await Person.create({...req.body})
        res.status(200).json(person)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


const getPerson = async (req, res) => {
  const { user_id } = req.params;

    const decodedUserId = decodeURI(user_id);

    console.log(decodedUserId)

    
    try{
      const conditions = { _id: decodedUserId };

      const person = await Person.findOne(conditions);

      return res.status(200).json(person);

    } catch(error){
      const conditions = { name: decodedUserId }

      const personName = await Person.findOne(conditions);

      if(!personName){
        return res.status(404).json({ error: 'No such person found' });
        
      }
      return res.status(200).json(personName);
    }

};


const updatePerson = async (req, res) => {
    const { user_id } = req.params;
    const { name } = req.body;
  
    if (typeof name !== 'string') {
      return res.status(400).json({ error: "Name must be a string!" });
    }
  
    try{

      const conditions = { _id: user_id };
    
      const person = await Person.findOneAndUpdate(conditions, { name }, { new: true });

      return res.status(200).json(person);
    } catch (error){

      const conditions = { name: decodeURIComponent(user_id.replace(/\+/g, '%20')) };

      const personName = await Person.findOneAndUpdate(conditions, { name }, { new: true });

      if(personName){
        return res.status(200).json(personName);
      }

      return res.status(404).json({ error: 'No such person found' });
    }
  };


  const deletePerson = async (req, res) => {
    const { user_id } = req.params;

    const decodedUserId = decodeURI(user_id);

    console.log(decodedUserId)

    
    try{
      const conditions = { _id: decodedUserId };

      const person = await Person.findOneAndDelete(conditions);

      if(!person){
        return res.status(404).json({ error: 'No such person found' });
      }

      return res.status(200).json(({ message: 'Person deleted successfully' }));

    } catch(error){
      const conditions = { name: decodedUserId }

      const personName = await Person.findOneAndDelete(conditions);

      if(personName){
        return res.status(200).json(({ message: 'Person deleted successfully' }));
      }
      return res.status(404).json({ error: 'No such person found' });
    }

  };
  



module.exports ={
    createPerson,
    getPerson,
    updatePerson,
    deletePerson
}