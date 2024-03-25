---
title: hi body
---


## step 0

- this is a test2


## pandoc and marp
- I am using marp for presentation
- If I need a long continous ducment i am using pandoc
- for running the pandoc I use
```
pandoc selfTuroring.md -s  -o selfTuroring.html --css pondoc.css
```
.css file is for the theme and format the one that I am using is

[pandoc.css](https://gist.github.com/killercup/5917178)
## live watch the edits 

To have a live preview of your Markdown document as you edit it, with changes automatically compiling and updating in an HTML file that you can view in a browser, you'll need to use a combination of tools. Here's how you can set up a live preview system using Pandoc, a file watcher like entr, and a web browser.
### Step 1: Install entr

```
on Ubuntu:

bash

sudo apt-get install entr
