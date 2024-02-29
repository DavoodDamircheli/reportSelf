---
title: Some Config 
---

# Table of content 
- [Pandoc](#step-0)
- [Marp](#Marp)
- [Markdown](#markdown-review)
- [git](#git)







## step 0
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
```
### Step 2: Set Up a File Watcher

Once you have entr installed, you can set up a file watcher that runs Pandoc to compile your Markdown file into HTML every time you save changes to the file.

Open a terminal and navigate to the directory containing your Markdown file. Run the following command:
```
bash

ls input.md | entr pandoc /_ -s -o output.html -c style.css
```
Replace input.md with the name of your Markdown file and style.css with the path to your CSS file. The /_ is a placeholder that entr uses to refer to the file that has changed.
Step 3: Open the HTML in a Browser

Open output.html in your web browser. Most modern browsers will cache the file, so you may need to manually refresh to see changes. For an even more automatic setup, you can use a browser extension or a development server that automatically refreshes the page when it detects changes to the file.

---
## marp 
we need to compile the md file like following to compile and see the results
marp myfile.md & open myfile.html

---

## markdown review 

- heading
```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```
- Emphasis

    Bold: Wrap text with two asterisks or underscores.

    markdown
```
**bold text**
__bold text__
```

- Italic: Wrap text with one asterisk or underscore.

```
*italic text*
_italic text_
```

- Lists: Use asterisks, plus, or minus signs.

```
- Item 1
- Item 2
- Item 3
```
- Ordered Lists: Use numbers followed by a period.

```
    1. First Item
    2. Second Item
    3. Third Item
```
- Links

To create a link, enclose the link text in brackets and then follow it immediately with the URL in parentheses.

```
[OpenAI](https://www.openai.com/)
```

- images

Similar to links, but start with an exclamation mark, followed by the alt text in brackets, and the path or URL to the image in parentheses.

```
![Alt text](/path/to/image.jpg)
```

- Code

    Inline Code: Wrap text with backticks.

    markdown
```
`Inline code`
```
Code Blocks: Use triple backticks or indent with four spaces for multiple lines of code.




```
```
code block
```
```



- Horizontal Rules

Use three or more asterisks, dashes, or underscores.
```
---
```
- Tables

Create tables by using vertical bars and dashes. Align text by using colons.

```

| Header 1 | Header 2 | Header 3 |
|----------|:--------:|---------:|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```
- Escaping Characters

Use a backslash before Markdown characters you want to escape.

```
\*Not italicized\*
```
- Task Lists

To create a task list, se dashes followed by brackets. If the task is completed, place an x inside the brackets.
```
- [x] Completed task
- [ ] Incomplete task
```
## git

- adding All Files in a Directory

    To add all files in the current directory:

    sh
```
git add .
```

-If you have a directory named dirName, you can add all files within it like so:

```
git add dirName/
```

- adding Specific Files

Suppose you have a directory named myDirectory, and inside it, you want to add the files named file1.txt, file2.txt, and file3.txt to staging. You can add them to Git with the following command:

sh
```
git add myDirectory/file1.txt myDirectory/file2.txt myDirectory/file3.txt
```
- Committing the Added Files

After adding the files, you can commit them with a message describing the changes:

sh
```
git commit -m "Add specific files from myDirectory"
```


- To find out which files are being tracked by Git in your repository, you can use various Git commands that provide insights into the state of your repository, including which files are tracked, untracked, staged for commit, or have been modified. Here are some commands that can help you identify tracked files:
1. git ls-files

The simplest way to list all files that are currently being tracked by Git in your repository is to use the git ls-files command:

sh
```
git ls-files
```
This command will list all the files that Git is tracking in the repository, displaying the paths relative to the repository's root directory.
2. git status

The git status command provides a broader overview of the repository's current state, including which files are tracked and have changes, which files are staged for the next commit, and which files are not being tracked by Git:

sh
```
git status
```
- Tracked files that have modifications will be listed under the "Changes not staged for commit" section.
- Untracked files will appear under the "Untracked files" section.
- Staged files ready for the next commit will be listed under the "Changes to be committed" section.

