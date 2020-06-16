const db = require('../dbConfig.js');

module.exports ={
    getRecipes,
    findById,
    getShoppingList,
    getInstructions,
    add,
    update,
    remove
};

function getRecipes(){
    return db('recipes');
}

function findById(id){
    return db('recipes').where({id}).first();
}

function getInstructions(id) {
    return db('steps')
      .where('steps.recipe_id', id).orderBy('step_number'); 
  }
  function getShoppingList(id) {
    return db('recipe_ingredients')
      .where('recipe_ingredients.recipe_id', id)
      .join('ingredients','recipe_ingredients.ingredient_id','ingredients.id'); 
  }  

  function add(recipe) {
    return db('recipes').insert(recipe)
      .then((ids) => {
        return findById(ids[0])
      })
  }
  
  function update(changes, id) {
    return db('recipes').where("id", id).first().update(changes)
      .then(() => {
        return findById(id)
      })
  }
  
  function remove(id) {
        return db('recipes').where({id}).del()
      }