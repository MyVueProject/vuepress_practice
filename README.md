---
pageClass: main-container
---

<!-- Heading Tag -->
## Title

# H1 Title

<!-- ## H2 Title -->

### H3 Title

#### H4 Title

`Lorem ipsum` dolor sit amet, consectetur adipiscing elit. Nam scelerisque porta ligula et semper. Morbi risus lorem, sodales a eros nec, malesuada porttitor tellus. Praesent tempor sed dui at fermentum. Cras eget urna vel neque eleifend condimentum sit amet placerat diam. Ut eu augue vitae est commodo elementum. `Hello Vuepress` Praesent efficitur tempor orci, ac ultricies diam tristique sed. Suspendisse sed erat odio. Vestibulum quis nisl ut nibh rhoncus euismod eget quis dolor. Quisque consequat metus eu scelerisque cursus. Duis ultrices nisl quis fringilla eleifend.

## Link
[Guide](/guide.html)

[GitHub](https://github.com/choijaewoong)

##  Tooltip
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

## Code Block
``` js{1,4,5}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
#### Import Code Snippets
<<< .vuepress/config.js

## Table
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Built-In Components

Hello World <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>

<OutboundLink/>
