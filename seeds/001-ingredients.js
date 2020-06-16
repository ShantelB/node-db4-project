exports.seed = function(knex) {
  return knex('ingredients').truncate()
  // Inserts seed entries
  .then(function (){
  return knex('ingredients').insert([
    {id:1, name: 'egg'},
    {id:2, name: 'milk'},
    {id:3, name: 'butter'}
  ]);
  })
};