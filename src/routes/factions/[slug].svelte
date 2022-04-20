<script context="module">
	import factions from '../../resources/factions.js';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
		return {
      props: {
        faction: factions[page.params.slug]
      }
		};
	}
</script>

<script>
	import Card from "$lib/Card.svelte";
  export let faction;
</script>

<svelte:head>
	<title>Permia - {faction?.title || 'Factions'}</title>
  <meta name="keywords" content="Permia, Roleplay, {faction.title}" />
  <meta name="description" content="A summary of the {faction.title} faction within the permia roleplay setting.">
</svelte:head>

<Card body>
  <div class="text-center pb-2">
    <div class="row">
      <div class="col-sm-8 offset-sm-2"><h1>{faction.title}</h1></div>
      <div class="col-sm-2 text-end">
        <a class="btn btn-secondary" href="/factions">Back</a>
      </div>
    </div>
    {#if faction.otherNames}
      <h3 class="fs-5 pb-3">Also known as {faction.otherNames}</h3>
    {/if}
  </div>
  {#if faction.descriptions}
    {#each faction.descriptions as description}
      <p>
        {@html description}
      </p>
    {/each}
  {/if}

  {#if faction.alignment}
    <h2>Alignment</h2>
    <p>
      {faction.alignment}
    </p>
  {/if}

  {#if faction.perceptions}
    <h3>Perceptions</h3>
    <ul class="list-group">
    {#each faction.perceptions as ally}
      <li class="list-group-item list-group-item-dark">
        <a class="fw-bold text-dark" href="/factions/{ally.link}">{ally.title}:</a> 
        {ally.body}
      </li>
    {/each}
    </ul>
  {/if}
</Card>


{#if faction.giver || faction.joiner}
<Card body class="mt-3 text-center text-md-start">
  {#if faction.giver}
    <div class="row">
      <div class="col-md-4">
	<div class="px-5">
	  <img src={faction.giver.image} alt={faction.giver.title} width="100%" />
	</div>
      </div>
      <div class="col-md-8">
	<h3 class="fs-5 pb-3">{faction.giver.title}</h3>
	<p class="pe-sm-5">{faction.giver.location}</p>
      </div>
    </div>
  {/if}
  <hr/>
  {#if faction.bank}
    <div class="row">
      <div class="col-md-4">
	<div class="px-5">
	  <img src={faction.bank.image} alt={faction.bank.title} width="100%" />
	</div>
      </div>
      <div class="col-md-8">
	<h3 class="fs-5 pb-3">{faction.bank.title}</h3>
	<p class="pe-sm-5">{faction.bank.location}</p>
      </div>
    </div>
  {/if}
  <hr/>
  {#if faction.reset}
    <div class="row">
      <div class="col-md-4">
	<div class="px-5">
	  <img src={faction.reset.image} alt={faction.reset.title} width="100%" />
	</div>
      </div>
      <div class="col-md-8">
	<h3 class="fs-5 pb-3">{faction.reset.title}</h3>
	<p class="pe-sm-5">{faction.reset.location}</p>
      </div>
    </div>
  {/if}
  <hr/>
  {#if faction.joiner}
    <div class="row">
      <div class="col-md-4">
	<div class="px-5">
	  <img src={faction.joiner.image} alt={faction.joiner.title} width="100%" />
	</div>
      </div>
      <div class="col-md-8">
	<h3 class="fs-5 pb-3">{faction.joiner.title}</h3>
	<p class="pe-sm-5">{faction.joiner.location}</p>
      </div>
    </div>
  {/if}
</Card>
{/if}

