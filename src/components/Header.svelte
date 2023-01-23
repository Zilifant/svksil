<!-- Header -->
<script lang="ts">
  import { light, dark } from '$lib/constants';
  import { applySafariNavFix } from '$lib/utilities';
  import { browser } from '$app/environment';
  import type { Theme } from '$lib/types';

  export let theme: Theme;

  function switchTheme(e: any) {
    if (!browser) return;

    theme = e?.target?.checked ? light : dark;
    localStorage.setItem('theme', theme);
    applySafariNavFix();
  }
</script>

<header class="main-head">
  <div class="main-head-grid">
    <h4 class="main-head-item main-head-item-title">Scott Silsbe</h4>
    <label class="main-head-item theme-switch-bg">
      <input
        class="theme-switch-checkbox"
        type="checkbox"
        checked={theme === light}
        on:change={(e) => switchTheme(e)}
      />
      <div class="th-switch-slider preload">
        <div class="eclipse-animation moon preload" />
        <div class="eclipse-animation earth preload" />
      </div>
    </label>
  </div>
</header>

<style lang="scss">
  @import '$styles/utility/header.scss';
</style>
