# Highlight.js plugin for Vue.js

This plugin provides a `highlightjs` component for use
in your templates:

```html
  <div id="app">
    <!-- bind to a data property named `code` -->
    <highlightjs autodetect :code="code" />
    <!-- or literal code works as well -->
    <highlightjs language='javascript' code="var x = 5;" />
  </div>
```

## Using the pre-built libraries

```html
<link rel="stylesheet" href="/path/to/styles/default.css">
<script src="/path/to/highlight.min.js"></script>
<script src="/path/to/highlight-vue.min.js"></script>
```

Then simply register the plugin with Vue:

```js
Vue.use(hljsVuePlugin);
```


## Using ES6 modules / bundling

```js
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import vuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);

Vue.use(vuePlugin);
```

Note: This plugin imports `lib/core` internally (but no languages).  Thanks to the magic of ES6 modules you can import Highlight.js anywhere you need in order to register languages or configure the library.  Or can also simply use the "common" languages (as of v11):

```js
import hljs from 'highlight.js/lib/common';
import vuePlugin from "@highlightjs/vue-plugin";
Vue.use(vuePlugin);
```
