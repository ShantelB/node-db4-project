
exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique().index(); // box 1
      })
      .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique().index();// box 2
      })
      .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id')
        tbl.integer('step_number')
        .notNullable()
        tbl.string('instructions', 255).notNullable();// 
    })
      .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()//recipe the 'red box' the one that joins everything kinda 
            .references('recipes.id')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()//ingredients 
            .references('ingredients.id')
        tbl.float('quantity')
            .notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('recipe_ingredients');
  };
