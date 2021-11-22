<script>
  import Card from "$lib/Card.svelte";
  import { recipeSearch } from "$lib/RecipeSearch.js";
	import recipeTypes from '../resources/recipes.js';

  let bindings = {};
  let searchExpanded = false;
  let searchText = "";

  let leftOffset = null;
  let outerWidth;

  let scrollToElement = (item) => {
    if (item && bindings[item]) {
      bindings[item].scrollIntoView();
      recipeSearch.set(null);
    }
  }
  let search = (item) => {
    scrollToElement(item);
    searchExpanded = false;
    searchText = "";  
  }
  let calculateSearchOffset = (blah) => {
    if (bindings["Weapons"]) {
      const rect = bindings["Weapons"].getBoundingClientRect();
      leftOffset = rect.right;
    }
  }

  let timeout = setTimeout(() => {
    scrollToElement($recipeSearch);
    clearTimeout(timeout);
  }, 50);

  $: calculateSearchOffset(outerWidth);
</script>

<svelte:head>
	<title>Permia - Recipes</title>
  <meta name="keywords" content="Permia, Roleplay, Crafting" />
  <meta name="description" content="A list of recipes">
</svelte:head>

<svelte:window bind:outerWidth={outerWidth} />

{#each recipeTypes as recipes, i}
  <Card body class="{i > 0 ? "mt-3" : ""}" id={recipes.title}>
    <h1 class="text-center" bind:this={bindings[recipes.title]}>{recipes.title}</h1>
    <ul class="list-group">
      {#each recipes.content as recipe (recipe.name)}
        <li class="list-group-item list-group-item-dark">
          <div class="row">
            <div class="col-sm-8">
              <span class="fw-bold" id="{recipe.name}"  bind:this={bindings[recipe.name]}>{recipe.name}</span>
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
{/each}

{#if searchExpanded}
  <Card body style="position: fixed; z-index:30; left: {leftOffset-300}px; width:300px; bottom: 2px;">
    <div class="d-grid gap-2">
      {#each recipeTypes as recipes}
        <button type="button" class="btn btn-secondary" on:click={() => search(recipes.title)}>{recipes.title}</button>
      {/each}
      <input type="text" class="input" bind:value={searchText} />
      <div class="row">
        <div class="col-6 d-grid">
          <button type="button" class="btn btn-primary" on:click={() => search(searchText)}>Search</button>
        </div>
        <div class="col-6 d-grid">
          <button type="button" class="btn btn-secondary" on:click={() => searchExpanded = false}>Cancel</button>
        </div>
      </div>
    </div>
  </Card>
{:else}
  <button type="button" class="btn btn-lg btn-primary" style="border-radius: 50%; position: fixed; z-index:30; left: {leftOffset-50}px; bottom: 25px;" on:click={() => searchExpanded = !searchExpanded}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="vertical-align:unset;" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
  </button>
{/if}