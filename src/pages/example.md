---
title: Markdown syntax guide
description:
keywords: ['markdown']
image: ''
---

# Markdown syntax guide

The page below contains examples of Markdown syntax. For a full list of all the Markdown syntax, consult the CommonMark help or specification.

# This is an H1

## This is an H2

###### This is an H6

# This is also an H1

## This is also an H2

Paragraphs are separated by empty lines. To create a new paragraph, press `<return>` twice.

Paragraph 1

Paragraph 2

### Character styles

_Italic characters_ <br/>
_Italic characters_ <br/>
**bold characters** <br/>
**bold characters** <br/>
~~strikethrough text~~

### Unordered list

- Item 1
- Item 2
- Item 3
  - Item 3a
  - Item 3b
  - Item 3c

### Ordered list

1.  Step 1
2.  Step 2
3.  Step 3
    1.  Step 3.1
    2.  Step 3.2
    3.  Step 3.3

### List in list

1.  Step 1
2.  Step 2
3.  Step 3
    - Item 3a
    - Item 3b
    - Item 3c

### Quotes or citations

> Neque porro quisquam est qui
> dolorem ipsum quia dolor sit amet,
> consectetur, adipisci velit...

### Inline code characters

Use the backtick to refer to a `function()`.

There is a literal `` backtick (`) `` here.

### Code block

Indent every `line` of the block by at least 4 spaces.

This is a normal paragraph:

    This is a code block.
    With multiple lines.

Alternatively, you can use 3 backtick quote marks before and after the block, like this:

```
This is a code block
```

To add syntax highlighting to a code block, add the name of the language immediately
after the backticks:

```javascript
var oldUnload = window.onbeforeunload
window.onbeforeunload = function () {
  saveCoverage()
  if (oldUnload) {
    return oldUnload.apply(this, arguments)
  }
}
```

### Links to external websites

This is [an example](http://www.example.com/) inline link.

[This link](http://example.com/ 'Title') has a title attribute.

Links are also auto-detected in text: http://example.com/

### Images

Inline image syntax looks like this:

![Alt text](https://picsum.photos/200 'Optional title attribute')
![Alt text](https://picsum.photos/200)

### Tables

| Day     | Meal    | Price |
| ------- | ------- | ----- |
| Monday  | pasta   | $6    |
| Tuesday | chicken | $8    |

### Backslash escapes

Certain characters can be escaped with a preceding backslash to preserve the literal display of a character instead of its special Markdown meaning. This applies to the following characters:

```markdown
\  backslash
`  backtick
*  asterisk
_  underscore
{} curly braces
[] square brackets
() parentheses
#  hash mark
>  greater than
+  plus sign
-  minus sign (hyphen)
.  dot
!  exclamation mark
```

### iFrame

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Syntax highlighting

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-prismjs`],
    },
  },
]
```

```jsx
class FlavorForm extends React.Component {
  // highlight-line
  constructor(props) {
    super(props)
    this.state = { value: 'coconut' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
}
```

```css
.stage {
  height: 300px;
  width: 500px;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  perspective: 9999px;
  transform-style: preserve-3d;
}
```

```tsx
<div style={{backgroundColor: 'tomato', padding: '20px'}} />
```
