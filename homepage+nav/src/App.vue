<template>
    <router-view/>
</template>

<style lang="scss">
/* Global Styles

/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap");

/* Global Variables*/
body,.body{
  height: 100%;
  width: 100%;
  overflow: auto;
  margin: 0px;
}
*{
  list-style: none;
  box-sizing: border-box;
}
:root {
  /* font family */
  --ff-primary: "Barlow Condensed", sans-serif;
  --ff-accent: "Bellefair", serif;

  /* font size */
  --fs-base: 16px;

  /* colors */
  --clr-primary: hsl(0, 0%, 98%);
  --clr-accent: hsl(231, 77%, 90%);
  --clr-nav: hsl(230, 35%, 7%);
}

html {
  font-family: var(--ff-primary);
  font-size: var(--fs-base);
  color: var(--clr-primary);
  background-color: var(--clr-nav);
  min-height: 100svh;

}

h1,
h2,
h3,
h4,
h5,
.sub-h-1 {
  font-family: var(--ff-accent);
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.146;
  text-align: center;
}

h5,
.sub-h-2,
.text,
.text--nav {
  font-family: var(--ff-primary);
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
}

/* styles for desktop */
h1 {
  font-size: 9.375rem;
}

h2 {
  font-size: 6.25rem;
}

h3 {
  font-size: 3.5rem;
}

h4 {
  font-size: 2rem;
  letter-spacing: 0.125rem;
}

h5 {
  font-size: 1.75rem;
  letter-spacing: 0.29531rem;
}

/* Subheading 1 */
.sub-h-1 {
  font-size: 1.75rem;
}

.sub-h-2 {
  font-size: 0.875rem;
  letter-spacing: 0.1475rem;
  color: var(--clr-accent);
}

.text {
  font-size: 1.125rem;
  line-height: 1.77777778;
  color: var(--clr-accent);
}

.text--nav {
  font-size: 1rem;
  letter-spacing: 0.16875rem;
}

/* styles for tablet */
@media screen and (max-width: 960px) {
  h1 {
    font-size: 9.375rem;
  }

  h2 {
    font-size: 5rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
    letter-spacing: 0.125rem;
  }

  h5 {
    font-size: 1.25rem;
    letter-spacing: 0.21094rem;
  }

  .sub-h-1 {
    font-size: 1.75rem;
  }

  .sub-h-2 {
    font-size: 0.875rem;
    letter-spacing: 0.14763rem;
  }

  .text {
    font-size: 1rem;
  }

  .text--nav {
    font-size: 0.875rem;
    letter-spacing: 0.14763rem;
  }
}

/* styles for phone */
</style>
