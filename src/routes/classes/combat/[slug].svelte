<script context="module">
	import classes from '../../../resources/combat-classes.js';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
		return {
      props: {
        _class: classes[page.params.slug]
      }
		};
	}
</script>

<script>
	import Card from '$lib/Card.svelte';

  export let _class;
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
      <a class="btn btn-secondary" href="/classes/combat">Back</a>
    </div>
  </div>
  <div class="row pb-3">
    <div class="col-md-7">
      <p>
        {_class.location}
      </p>
      <p>
        {@html _class.description}
      </p>
    </div>
    <div class="col-md-5">
      <Card body>
        {#if _class.stats}
        {#each Object.keys(_class.stats) as statType}
        <div class="row">
          <div class="col-8">{statType}:</div>
          <div class="col-4">{_class.stats[statType]}</div>
        </div>
        {/each}
        {/if}
      </Card>
    </div>
  </div>

  <ul class="list-group">
    {#each _class.skills as skill}
      <li class="list-group-item list-group-item-dark">
        <div class="row">
          <div class="col-sm-6 fw-bold">{skill.name}{#if skill.cost}{' - '}{skill.cost}{/if}</div>
          <div class="col-sm-6 text-muted text-sm-end">
            {#if skill.scaling}
            Scales with {skill.scaling}
            {/if}
          </div>
        </div>
        {#if skill.restrictions}
          {skill.restrictions} <br />
        {/if}
        {skill.description} <br />
        <span class="fst-italic">"{skill.flavorText}"</span>
      </li>
    {/each}
  </ul>
</Card>
