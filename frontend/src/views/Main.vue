<template>
  <div :class="$style.Main">
    <h1 :class="$style.PageTitle">Help Center</h1>
    <input :class="$style.SearchBar" type="search" placeholder="search" />
    <div :class="$style.Nav">
      <router-link tag="div" :to="{ name: 'contactForm' }">
        <button>Contact Form</button>
      </router-link>
      <router-link tag="div" :to="{ name: 'orders' }">
        <button>
          Where is my order?
        </button>
      </router-link>
    </div>
  </div>
</template>

<style module lang="scss">
.Main {
  display: flex;
  flex-direction: column;
  align-items: center;

  .PageTitle {
    text-align: center;
    margin: $spacing-xlarge 0;
  }

  .SearchBar {
    min-width: 400px;
  }

  .Nav {
    display: flex;
  }
}
</style>
