<script>
	import rules from '../resources/rules.js';
	import Card from '$lib/Card.svelte';

  const ruleTypes = Object.keys(rules);
</script>

<svelte:head>
	<title>Permia - Rules</title>
  <meta name="keywords" content="Permia, Roleplay, Rules" />
  <meta name="description" content="A summary of permia's sim rules">
</svelte:head>

{#each ruleTypes as ruleType, i}
  <Card body class="mb-3">
    {#if rules[ruleType] && rules[ruleType].title}
    <h1>[{i+1}] {rules[ruleType].title}</h1>
      <ol>
        {#each rules[ruleType].rules as rule}
          <li class="my-2">{@html rule}</li>
        {/each}
      </ol>
    {/if}
  </Card>
{/each}