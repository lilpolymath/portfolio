---
layout: blog
title: How to Add Dark Mode to your Static Website
date: 2020-09-09T20:33:30.905Z
thumbnail: /image/dark-mode.png
credit: https://www.svgrepo.com/svg/70994/moon
tags: frontend, static websites
slug: how-to-add-dark-mode-to-your-static-websites
---
### Introduction
Dark mode is a trend that is fast becoming common among websites. It involves using low light to present content while still meeting the minimum colour contrast ratios for accessibility and usability. It helps to reduce eye strain, suitable for night time use and also saves battery power.

In this article, you will learn how to switch between a dark and light theme for your website, persist the selection and how to switch when the visitor has a preferred colour scheme.

### Data-theme.

The data-theme attribute is part of the custom data-* attributes that you can use with HTML5 elements to store extra information. It is quite useful when you are working on hacks that don't need to be visible to the user. Here is an [MDN resource](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) detailing more about them. 

The `data-theme` attribute would be used to house the value of our theme.

### Local storage.

You will store the value of the theme selected by the visitor in the local storage since you don't want it to expire or get clear after you close the tab. This is a sample usage of the local storage API.

```js
// To store a value of an item.
localStorage.setItem('theme', 'dark');

// To get the value of an item
const theme = localStorage.getItem('theme');

// To delete an item
localStorage.removeItem('theme');

// To clear everything stored in the localstorage
localStorage.clear();
```

### Prefers color scheme

The `prefers-color-scheme` attribute is one of the [media features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) of CSS that allows you to get the state or presence of some various characteristics from the device accessing that a particular webpage. [Check here](https://caniuse.com/?search=prefers-color-scheme) for the support.

### CSS Variables

CSS allows you to store variables adding `--` suffix to the variable name for example.

```css
* {
  --primary: #eee; /* To set a variable. */
  --secondary: #333;
	--display: none;
}

body {
  background-color: var(--primary); /* To access the variable */
  color: var(--secondary);
}

.hero_text{
	display: var(--display);
}
```

Here is the JavaScript way of setting CSS variables.

```js
document.documentElement.style.setProperty('--primary', '#333');
```

### HTML

The HTML file will have some default text as our hero and SVGs that you use to tell the visitor what theme they are currently using.

```html

	<h2 class="hero_main">
		Just vibes.
	</h2>
	
	<p class="hero_sub">
		Something something next billion creators.
	</p>
	
	<label class="switch">
	  <input type="checkbox" id="theme_toggle" />
	  <section class="theme_switch">
	
		  <!-- moon svg -->
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon">
			  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
		  </svg>
		
			<!-- sun svg -->
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun">
				<circle cx="12" cy="12" r="5"></circle>
				<line x1="12" y1="1" x2="12" y2="3"></line>
				<line x1="12" y1="21" x2="12" y2="23"></line>
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
				<line x1="1" y1="12" x2="3" y2="12"></line>
				<line x1="21" y1="12" x2="23" y2="12"></line>
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
			</svg>
		</section>
	</label>
```

You can also see that SVGS are wrapped inside a checkbox that way you can track the visitor's choice with the state of the checkbox and map that to each theme.

### CSS

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: 62.5% 'Noto Sans', sans-serif;
}

:root {
  --primary: #eee;
  --secondary: #333;
  --sun-display: none;
  --moon-display: inline-block;
}

[data-theme='light'] {
  --primary: #eee;
  --secondary: #333;
  --sun-display: none;
  --moon-display: inline-block;
}

[data-theme='dark'] {
  --primary: #333;
  --secondary: #eee;
  --sun-display: inline-block;
  --moon-display: none;
}

@media (prefers-color-scheme: dark) {
  :root {
    --primary: #333;
    --secondary: #eee;
    --sun-display: inline-block;
    --moon-display: none;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --primary: #eee;
    --secondary: #333;
    --sun-display: none;
    --moon-display: inline-block;
  }
}

body {
  background-color: var(--primary);
  color: var(--secondary);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.hero_main {
  font-size: 4rem;
  margin: 0.25em;
}

.hero_sub {
  font-size: 2.5rem;
  text-align: center;
}

.theme_switch {
  cursor: pointer;
}

.moon {
  display: var(--moon-display);
  stroke: var(--secondary);
}

.sun {
  display: var(--sun-display);
  stroke: var(--secondary);
}

#theme_toggle {
  display: none
}
```

- The `[attribute=value]` selector is used to style the website based on the value specified.
- There is a media query to check if the visitor prefers a dark or light color theme from the start and applies the appropriate style.
- The display of the SVGs is also controlled by the theme.
- The checkbox has its display set to none because the label tag still allows the checkbox to work as expected.

### Choosing Colours

While you are selecting colours to use for each theme, make sure that you are using colours that meet the minimum WCAG contrast ratio for accessibility. You can use [this tool](https://webaim.org/resources/contrastchecker/) for that purpose.

So far, the webpage can't switch between themes.

### Switching between themes.

First, you attach an event listener to the DOM to trigger just before the content is rendered so that you don't have a flash of the default theme then you need to attach an event listener to the checkbox on change so we can track the state of the checkbox.

**Note:** We can still interact with the checkbox because `display: none` only removes an element from the document flow, it doesn't prevent it from existing and content inside the ```<label>``` tag can modify the checkbox

 

```js
<script>
	window.addEventListener('DOMContentLoaded', () => {
		const darkModeToggle = document.getElementById('theme_toggle');

		const switchTheme = (e) => {
			if (e.target.checked) {
				document.documentElement.setAttribute('data-theme', 'dark');
			}
			else {
				document.documentElement.setAttribute('data-theme', 'light');
			}
		}
		
		darkModeToggle.addEventListener('change', switchTheme, false);
	});
</script>
```

Now, you control the active theme using the SVG and all that is left now is to be able to store the value of our data attribute and also detect the visitor's prefered colour scheme on the first load.

```js
	window.addEventListener('DOMContentLoaded', () => {
		...

		const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

		if (currentTheme) {
			document.documentElement.setAttribute('data-theme', currentTheme);

			if (currentTheme === 'dark') {
				darkModeToggle.checked = true;
			}
		}

		const switchTheme = (e) => {
		....
```

The currentTheme variable checks the localStorage to see there is a saved theme and returns null if there isn't. 

The next step is to save the value of the theme when the state of the checkbox changes.

```js
	...
		const switchTheme = (e) => {
			if (e.target.checked) {
				document.documentElement.setAttribute('data-theme', 'dark');
				localStorage.setItem('theme', 'dark');
			}
			else {
				document.documentElement.setAttribute('data-theme', 'light');
				localStorage.setItem('theme', 'light');
			}
		}
	...
```

To animate the transition between the themes, you can add this;

```css
body {
	...
	transition: background cubic-bezier(0.49, 0.11, 0.6, 1) 1.5s;
}
```

And Voila! You have learnt how to switch between light and dark modes and persist the visitor's choice. Here is the link to [the repo](https://github.com/lilpolymath/darkmode) just in case.
