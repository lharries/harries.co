---
title: Copy pocket highlights to your clipboard
date: "2020-04-07T12:22:36"
category: note
---

Enter the following snippet into your chrome developer console

```javascript
copy($x('.//span[@class="highlight"]').map(x => x.innerText).join("\n"))
```