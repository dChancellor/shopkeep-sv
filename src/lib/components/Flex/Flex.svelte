<script lang="ts">
  import type { Styles } from '../../types';
  import { parse } from '../../utils';
  export let cs: Styles = {};
</script>

<div style={cs && parse(cs)}>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-flow: row nowrap;
  }
</style>
