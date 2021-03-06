const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Recipes.findById(id)
  .then(recipe => {
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});

router.get('/:id/shoppinglist', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
  .then(steps => {
    if (steps.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find steps for given recipe' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get steps' });
  });
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    Recipes.getInstructions(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({ message: 'Could not find steps for given recipe' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get steps' });
    });
  });

router.post('/', (req, res) => {
  const recipeData = req.body;

  Recipes.add(recipeData)
  .then(recipe => {
    res.status(201).json(recipe);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create a new recipe' });
  });
});

router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params; 

  Recipes.findById(id)
  .then(recipe => {
    if (recipe) {
      Recipes.addStep(stepData, id)
      .then(step => {
        res.status(201).json(step);
      })
    } else {
      res.status(404).json({ message: 'Could not find recipe with that given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create a new step' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Recipes.findById(id)
  .then(recipe => {
    if (recipe) {
      Recipes.update(changes, id)
      .then(updatedRecipe => {
        res.json(updatedRecipe);
      });
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update recipes' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Recipes.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete the recipe' });
  });
});

module.exports = router;