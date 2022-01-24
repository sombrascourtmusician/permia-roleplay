<script context="module">
	import classes from '../../../resources/crafting-classes.js';
  import recipesList from '../../../resources/recipes.js';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
    let recipes = [];
    recipesList.forEach(recipeType => 
      recipeType.content.forEach(recipe => {
        if (recipe.crafter.toLowerCase() == page.params.slug) {
          recipes.push(recipe);
        }
      })
    );

		return {
      props: {
        _class: classes[page.params.slug],
        recipes: recipes.sort((first, second) => first.level - second.level),
      }
		};
	}
</script>

<script>
  import Card from "$lib/Card.svelte";
  import { recipeSearch } from "$lib/RecipeSearch";

  export let _class;
  export let recipes;
</script>

<svelte:head>
  <title>Permia - {_class?.title || 'Coming Soon'}</title>
  <meta name="keywords" content="Permia, Roleplay, {_class.title}" />
  <meta name="description" content="{_class.description}">
</svelte:head>

<Card body>
  <div class="row">
    <div class="col-8">
      <h1>
        {_class.title}
        {@html _class.icon}
      </h1>
    </div>
    <div class="col-4 text-end">
      <a class="btn btn-secondary" href="/classes/crafting">Back</a>
    </div>
  </div>
  <p>
    {_class.location}
  </p>
  <p>
    {_class.description}
  </p>

  <ul class="list-group">
    {#each recipes as recipe}
      <li class="list-group-item list-group-item-dark">
        <div class="row">
          <div class="col-sm-8">
            <a href="/recipes" on:click={() => recipeSearch.set(recipe.name)} class="fw-bold text-dark">{recipe.name}</a>
          </div>
          <div class="col-sm-4 text-sm-end">
            Requires level {recipe.level}
          </div>
        </div>
        <ul>
          {#each recipe.ingredients as ingredient}
            <li>{ingredient.name} ({ingredient.count})</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</Card>
