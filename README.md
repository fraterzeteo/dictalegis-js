# dictalegis
Javascript library for generating Liber AL vel Legis (The Book of the Law) quotations

## Demo
https://fraterzeteo.github.io/dictalegis/

## How To Use
Include the script on your site, then create any kind of HTML element, giving it the class of "legis-quote"

```html
<p class="legis-quote"></p>

<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/fraterzeteo/dictalegis-js/src/dictalegis.js"></script>
```

If you want to customize the quote list used, you can pre-define it before loading the `dictalegis.js` script, or add to it after loading.

```html
<script type="text/javascript">
    // pre-define quote list
    window.dictalegisQuoteList = [
         "quote 1",
         "quote 2",
         "etc."
    ];
</script>
<script type="text/javascript" src="src/dictalegis.js"></script>

<script type="text/javascript">
    // Or add to the quote list after loading
    dictalegis.quoteList.push("quote value");
</script>
```

## Contributing
This repo contains node.js resources for development, specifically `http-server` which can be used via the `npm start` command.

This will make http://127.0.0.1:8080/ available for testing changes.

