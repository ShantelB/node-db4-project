exports.seed = function(knex) {
  // Inserts seed entries
  return knex('steps').insert([
    {
      
      recipe_id:3,
      step_number:1,
      instructions:'get pears',
    },
    {
      recipe_id:1,
      step_number:1,
      instructions:'get chicken',
    },
    {
      recipe_id:2,
      step_number:5,
      instructions:'get flour',
    },
    {
      
      recipe_id:3,
      step_number:2,
      instructions:'get more pears',
    },
    {
      recipe_id:1,
      step_number:4,
      instructions:'get more chicken',
    },
    {
      recipe_id:2,
      step_number:6,
      instructions:'get more flour',
    },
  ]);
}