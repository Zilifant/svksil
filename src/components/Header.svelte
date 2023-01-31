<!-- Header -->
<script lang="ts">
  import type { Theme } from '$lib/types';
  import { theme } from '$lib/store';
  import { light, dark } from '$lib/constants';
  import { applySafariNavFix } from '$lib/utilities';
  import { browser } from '$app/environment';
  import '$styles/components/header.scss';

  function switchTheme(event: Event): void {
    if (!browser) return;

    const cookieMaxAge = 60 * 60 * 24 * 30; // 30 days

    const newTheme: Theme = (<HTMLInputElement>event.target).checked
      ? light
      : dark;
    theme.set(newTheme);
    document.cookie = `theme=${newTheme}; max-age=${cookieMaxAge}`;

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
        checked={$theme === light}
        on:change={(event) => switchTheme(event)}
      />
      <div class="th-switch-slider">
        <div class="eclipse-animation moon" />
        <div class="eclipse-animation earth" />
      </div>
    </label>
  </div>
</header>
