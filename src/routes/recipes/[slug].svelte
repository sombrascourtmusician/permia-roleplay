<script context="module">
	import recipeTypes from '../../resources/recipes.js';

  const keys = Object.keys(recipeTypes);

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
    const index = keys.indexOf(page.params.slug);

		return {
      props: {
        recipes: recipeTypes[page.params.slug],
        nextLink: (keys.length > index+1) && `/recipes/${keys[index+1]}`,
        nextTitle: (keys.length > index+1) && recipeTypes[keys[index+1]].title,
        prevLink: (index > 0) && `/recipes/${keys[index-1]}`,
        prevTitle: (index > 0) && recipeTypes[keys[index-1]].title,
      }
		};
	}
</script>

<script>
  import Card from "$lib/Card.svelte";
  
  export let recipes;
  export let nextLink;
  export let nextTitle;
  export let prevLink;
  export let prevTitle;
</script>

<svelte:head>
	<title>Permia - {recipes.title || "Recipes"}</title>
  <meta name="keywords" content="Permia, Roleplay, Crafting" />
  <meta name="description" content="A list of recipes">
</svelte:head>

<Card body class="mb-3">
  <div class="row">
    <div class="col-sm-6">
      <h1>{recipes.title}</h1>
    </div>
    <div class="col-sm-6 text-end">
      {#if prevLink}
        <a href={prevLink} class="btn btn-secondary">{prevTitle}</a>
      {/if}
      {#if nextLink}
        <a href={nextLink} class="btn btn-secondary">{nextTitle}</a>
      {/if}
    </div>
  </div>
  <ul class="list-group">
    {#each recipes.content as recipe (recipe.name)}
      <li class="list-group-item list-group-item-dark">
        <div class="row">
          <div class="col-sm-8">
            <span class="fw-bold" id="{recipe.name}">{recipe.name}</span>
            {#if recipe.effects}
            <br/>
            <span>Gives {recipe.effects}</span>
            {/if}
          </div>
          <div class="col-sm-4 text-sm-end">
            <a class='text-dark' href='/classes/crafting/{recipe.crafter.toLowerCase()}'>Requires level {recipe.level} {recipe.crafter}</a>
          </div>
        </div>
        <span>Ingredients:</span>
        <ul>
          {#each recipe.ingredients as ingredient}
            <li>{ingredient.name} ({ingredient.count})</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</Card>
