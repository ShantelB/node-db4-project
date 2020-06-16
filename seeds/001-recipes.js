
exports.seed = function(knex) {
  return knex('recipes').truncate()
  // Inserts seed entries
  .then(function(){
  return knex('recipes').insert([
    {id: 4, name: 'curry chicken'},
    {id: 2, name: 'cherry pie'},
    {id: 3, name: 'pear pie'}
  ]);
  })
};