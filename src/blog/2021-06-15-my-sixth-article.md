---
title: Markdown cheat sheet
description: This is David's post. Quite cool isn't it?
author: David Waumsley
date: 2024-11-17T22:33:00.000Z
tags:
  - post
  - featured
image: /assets/blog/article-5.jpg
imageAlt: This is a test
---

# This is a markdown header one (#)

This post was made with Markdown. Here is how to use it.  
I added two spaces after the last sentence so it created a break &lt;br&gt;.

Above is a one line space and this create a new paragraph `<p></p>` I was able to show the HTML by adding two back ticks ` either side and no space. If I want my code over multiple lines I need to add three backticks ``` either side like this:

```
<footer class="site-footer">
<p>© 2024 David Waumsley. All rights reserved.</p>
</footer>

```

## This is a markdown header two (##)

 Here is another paragraph Below, I'm adding "### Header three (###)" just so you can see how we markup a markdown header. These go up to six.

 ### Header three (###) 

Now let's add some styles. **This text is bold** because I added ** and ** to the text without any spaces.

If I want to put *text in italics* I just a one * either side. If I want ***bold and italics*** I add three***.

Let's cross out ~~this text~~. I did that with ~~ and ~~ either side with no space.

Unfortunately, Github does not use the extended markdown for highlighing so we need to use HTML.`<mark> </mark>` <mark>will work</mark>.

Also Github does not support subscript and the sub tag. Again we have to use HTML. &lt;sup&gt;&lt;/sup&gt; for  X <sup>2</sup> (to raise the 2) and &lt;sub&gt;&lt;/sub&gt; H<sub>2</sub>0 (to lower the 2).

## Beyond text 

### Links

[This is a link to the fifth article](/blog/2021-06-15-my-fifth-article/).  
 I created this with [text] followed by (with the url).

 If the text and url are the same I can use <> with no spaces around the url: 

<https://www.youtube.com/@NoScriptShow/>

### Images
![ ](/assets/logo.svg)

This is like links, but we need and exclaimation mark!  
![Alt text] (image url). Leave a space for a blank alt text.

### blockquotes

> This is my quote. which is made using > and a space.

### horiizonal rule

This is made with at least three ***.

***

### lists

1. one
2. two
3. three
4. four

For ordered lists write as seen. For an unordered list I can use * - or + and space before the item.

- a list item
- another list item
- One more for the road.

Use four space for a sub list.

### Table (Git)

| col 1 | col 2    |
| ---    | ---     |
| item 1 |  item 1 |
| item 1 | item 1  |

```
| col 1   | col 2   |
| ---     | ---     |
| item 1  | item 1  |
| item 1  | item 1  |

```

The above is using the pipe | symbol and we need at least 3 dashes to separate the head.
