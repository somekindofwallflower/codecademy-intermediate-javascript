### ES6 Modules Challenge #6

Consider the module below which exports a few values using the default export syntax:

```
/* article-data.js */
const resources = {
  articleTitle: "Implementing Modules using ES6 Syntax",
  numberOfChallenges: 6,
  minutesToComplete: 45
}
export default resources;
```
Which of the following is NOT a valid statement for importing this data?

```
import {articleTitle, numberOfChallnges, minutesToComplete} from './article-data.js'
```