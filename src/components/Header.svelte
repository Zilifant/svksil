<!-- Header -->
<script lang="ts">
  import type { Theme } from '$lib/types';
  import { light, dark } from '$lib/constants';
  import { applySafariNavFix } from '$lib/utilities';
  import { browser } from '$app/environment';
  import '$styles/components/header.scss';

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
      <div class="th-switch-slider">
        <div class="eclipse-animation moon" />
        <div class="eclipse-animation earth" />
      </div>
    </label>
  </div>
</header>
