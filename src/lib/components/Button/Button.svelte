<script lang="ts">
  import type { Sizes, Styles, ColorStrings } from '../../types';

  import type { SvelteComponent } from 'svelte';
  import { colorStore, darkOrLightMode } from '../../store';
  import { Loading } from '../../assets/Icons';

  import { parse } from '../../utils';

  export let label: string;
  export let size: Sizes = 'md';
  export let variant: 'primary' | 'secondary' = 'primary';
  export let color: 'prime' | 'complementary' | ColorStrings = 'prime';
  export let mode: 'dark' | 'light' = $darkOrLightMode;
  export let onClick: () => unknown;
  export let iconBefore: typeof SvelteComponent | undefined = undefined;
  export let iconAfter: typeof SvelteComponent | undefined = undefined;
  export let loading = false;
  export let disabled: boolean = loading;
  export let cs: Styles = {};

  $: mode = $darkOrLightMode;
  $: backgroundGradient = `--backgroundGradient: ${$colorStore[color]?.mediumGradient}`;
  $: textColor = `--textColor: ${$colorStore[color]?.light};`;
  $: accentColor = `--accentColor: ${$colorStore[color]?.['700']};`;
</script>

<!--
  @component 
  Here's some documentation for this component.
  It will show up on hover.
  
  - You can use markdown here.
  - You can also use code blocks here.
  - Usage:

	```tsx
	<main name="Arethra">
		```
-->

<button
  on:click={onClick}
  aria-live="polite"
  {disabled}
  aria-busy={loading}
  class="{size} {variant} {disabled || loading ? 'disabled' : ''} {mode === 'dark' ? 'dark' : 'light'}"
  style={`${backgroundGradient} ${textColor} ${accentColor} ${cs ? parse(cs) : ''} `}
>
  {#if !loading}
    {#if iconBefore}
      <svelte:component this={iconBefore} ariaHidden="true" />
    {/if}
    {label}
    {#if iconAfter}
      <svelte:component this={iconAfter} ariaHidden="true" />
    {/if}
  {:else}
    <Loading color={$colorStore[color]?.['700']} />
  {/if}
</button>

<style>
  button {
    outline: none;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    isolation: isolate;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-weight: 700;
    height: max-content;
    cursor: pointer;
    background: var(--backgroundGradient);
    transition: all 0.5s;
    min-width: 135px;
    max-height: 50px;
    color: var(--textColor);
    gap: 5px;
  }

  button:hover:not(:active, .disabled) {
    filter: brightness(130%);
    padding-inline: 2.3rem;
  }

  button:focus-visible {
    padding-inline: 2.3rem;
    outline-offset: 5px;
    outline: 3px var(--accentColor) solid;
  }
  button:active:not(.disabled) {
    filter: brightness(80%);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-inline: 2.3rem;
  }
  .light.disabled {
    background: rgba(44, 36, 45, 0.7);
    background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.25) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.25) 50%,
      rgba(0, 0, 0, 0.25) 75%,
      transparent 75%,
      transparent
    );
    background-size: 2em 2em, auto auto;
  }
  .dark.disabled {
    background: rgba(127, 120, 128, 0.25);
    background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.25) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.25) 50%,
      rgba(0, 0, 0, 0.25) 75%,
      transparent 75%,
      transparent
    );
    background-size: 2em 2em, auto auto;
  }
  .disabled {
    cursor: default;
    animation: loadingAnimation 2s linear infinite;
  }

  @keyframes loadingAnimation {
    0% {
      background-position: 2em 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  .lg {
    padding: 1.5rem 2rem;
  }
  .md {
    padding: 1rem 2rem;
  }
  .sm {
    padding: 0.5rem 2rem;
  }
</style>
