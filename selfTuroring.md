---
title: Some Configs
---

# Table of content 
- [Pandoc](#step-0)
- [Marp](#Marp)
- [Markdown](#markdown-review)
- [git](#git)
  - [creating](#creat-repository)
  - [stop tracking](#stop-tracking)
  - [fork and branching](#fork-and-branching)
  - [collaboration on Github](#collaboration-and-github)
- [make](#review-make)
- [git for hpc](git-hpc)



<!-- 

to run the md file and see the changes live

ls  selfTuroring.md | entr pandoc /_ -s -o selfTuroring.html --css pandoc.css

-->




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

ls input.md | entr pandoc /_ -s -o output.html --css style.css
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

- Commenting

```
<!--   -->
```

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

---

## git

### creat repository 


###  Step 1: Create a New Repository on GitHub

1.    Log in to your GitHub account and go to your dashboard.
2.    Click on the 'New' button next to 'Repositories' on your dashboard or navigate to https://github.com/new directly.
3.    Enter a repository name. This doesn’t have to match your local directory's name, but it's recommended for simplicity.
4.    Choose if the repository will be Public or Private.
5.    Initialize the repository with a README, .gitignore, or license if needed. (Optional, and you might skip this if you are pushing an existing project that already has these files.)
6.    Click 'Create repository'.

### Step 2: Push Your Local Project to GitHub

After creating your repository on GitHub, you need to push your local project. If your local directory is not already a Git repository, you will need to initialize it first.

1. Open Terminal or Command Prompt and navigate to your project directory.

```
    bash

cd path/to/your/project
```
2. Initialize the local directory as a Git repository (if not already a Git repo).

```
bash

git init
```


3. Add the files in your local repository. This stages them for the first commit.

```
bash

git add .
```

    . adds all files. You can replace . with specific filenames to add specific files.

4. Commit the files that you've staged in your local repository.

```
bash

git commit -m "First commit"
```

5. Add the URL for the remote repository where your local repository will be pushed.

```
bash

git remote add origin https://github.com/your-username/your-repository.git
```
   
  Replace https://github.com/your-username/your-repository.git with the URL of your newly created GitHub repository.

6. Push the changes in your local repository to GitHub.

```
bash

git push -u origin main
```



 - If your main branch is named differently (like master), replace main with your branch name.


###  adding All Files in a Directory

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


### stop tracking


### Renaming a Directory and Pushing Changes

- If you rename a directory and push the changes, Git tracks this as a deletion of the directory with the old name and the addition of a new directory with the new name. Here's how you would handle it:

- Rename the directory locally. You can do this through your file explorer or with the command line.
-  Use git add -A to stage all changes, including deletions and additions.
- Commit and push as described in the previous answer.

- Remember, Git tracks content, not files, so renaming is seen as deleting the old path and creating a new one with the same content.


#### repository and local directory

- **Local Repository**: This is your project directory on your computer where you use Git commands. When you commit changes here, they are recorded in your project's history locally.

- **Remote Repository**: This is the version of your project that is hosted on a service like GitHub. Changes made here can be pulled into your local repository, and changes made locally can be pushed to this remote repository to share them with others.


#### To Stop Tracking but Keep the File Locally
(**meaning keep the file in the track locally**)

- If you want to keep the file on your local system but remove it from the repository and stop tracking changes, use the git rm --cached command. This command removes the file from the staging area (making Git stop tracking it) but keeps it in your working directory.

   1. Open your terminal or command prompt.
   2. Navigate to your Git repository directory.
   3.  Use the following command, replacing file_name with the name of your file:

```

git rm --cached file_name
```

- If the file is inside a folder, you need to include the path:


```
git rm --cached path/to/your/file_name
```

- For multiple files or to apply the command to an entire directory, use the -r option:


```
git rm --cached -r folder_name/
```

- After running this command, you need to commit the change:


```
git commit -m "Stop tracking file_name"
```

#### To Delete the File from the Repository and Stop Tracking It

- If you intend to remove the file from both the repository and your local file system, use the git rm command without --cached:

   1.  Open your terminal or command prompt.
   2.  Navigate to your Git repository directory.
   3.  Use the following command:

```
git rm file_name
```

- Or for a directory:

```
git rm -r folder_name/
```

- Then, commit the change:

```
git commit -m "Remove file_name"
```

#### Ignoring the File in Future Commits

- If you don’t want the file to be accidentally re-added to the repository, consider adding its name to a .gitignore file at the root of your repository. This tells Git to ignore the file(s) in future operations.

    1. Open or create a .gitignore file in the root of your repository.
    2. Add the file or pattern you want to ignore. For example:

bash

- **Ignore a single file**
```
file_name
```
- **Ignore an entire directory**

```
folder_name/
```

- Save the .gitignore file and commit it:

```
git add .gitignore
git commit -m "Update .gitignore to ignore specific files"
```


#### delete from remote repository

- To make sure that the changes (like file deletion or stopping tracking a file) are reflected on GitHub or another remote repository, you need to push those changes. After committing the changes locally (with git commit), you push them using:


```
git push origin main
```

- Or, if you're using a different branch, replace main with the name of your branch:


```
git push origin your-branch-name
```


### .gitignore

Basic Syntax

   -  Blank lines are used for spacing for readability and are ignored.
   -  Comments start with a # symbol. Lines beginning with # are ignored by Git.
   -  Standard glob patterns are used for matching file names. A glob pattern is a string of literal and special characters used to match file paths.
   - Slash / at the beginning of a pattern will specify that the pattern only matches files and directories in the repository root.
   - Slash / at the end of a pattern specifies a directory.
   - Asterisk * matches zero or more characters in a file or directory name, except for a slash /.
   - Question mark ? matches any one character except for a slash /.
   - Square brackets [] match any one character inside the brackets. For example, [abc] matches a, b, or c.
   - Negation ! at the beginning of a pattern negates the pattern; it includes the pattern in what will be tracked by Git despite matching patterns defined earlier in the file.

### Best Practices

- Version control your .gitignore: It's a good practice to add .gitignore to your repository so that everyone working on the project is ignoring the same unnecessary files.

- Use global .gitignore for personal files: For files specific to your development environment (like IDE configuration files), consider using a global .gitignore file that applies to all repositories on your machine. This can be configured with git config --global core.excludesFile *~/.gitignore_global*.



### fork and branching

#### purpose

**Branches**

    1. Scope: Branches are used within a single repository. They represent parallel versions of the project contained within the same repository, allowing multiple lines of development.
    2. __Purpose__ The main purpose of branching is to isolate development work without affecting the main or master branch of the project. For example, a developer might create a branch to develop a new feature or fix a bug.
    3. Collaboration: Branches make it easy for multiple developers to work on different features or fixes simultaneously without interfering with each other's work. Once the work on a branch is complete, it can be merged back into the main branch, incorporating the changes into the project.
    4. Example Usage: Creating a branch for developing a new feature, fixing a bug, or experimenting with something new without disturbing the stable version of the project.


**Forks**

    1. Scope: Forking is a GitHub concept (though other platforms have similar concepts) that involves creating a complete separate copy of a repository at a specific point in time. This copy exists under your GitHub account, separate from the original repository.
    2.  __Purpose__: Forking is used to create a personal copy of someone else’s project. This allows you to freely experiment with changes without affecting the original project. It is often used when you want to contribute to someone else’s project. You can make changes in your fork and then submit a pull request to the original repository.
    3. Collaboration: Forks are particularly useful in open-source projects for contributing to someone else's project. By forking a project, you can make changes in your copy and then propose that the original repository incorporate your changes through a pull request.
    3.  Usage: Contributing to an open-source project, maintaining a personal version of a project, or taking a project in a new direction independently of the original version.


### forking in github

#### Step-by-Step Guide to Fork a Repository on GitHub

- Log in to GitHub: Make sure you're logged into your GitHub account.
-  Find the Repository: Navigate to the original repository you wish to fork on GitHub.
-  Fork the Repository:
        Look for the "Fork" button in the top-right corner of the repository's page on GitHub.
        Click on the "Fork" button. GitHub will then create a copy of the repository in your GitHub account. This process might take a few seconds.

- After Forking

Once the repository is forked, you have your own copy on your GitHub account. You can clone this forked repository to your local machine, make changes, commit them, and push the changes back to your fork on GitHub. Here’s how:

- Clone Your Forked Repository:
1. Navigate to your forked repository on GitHub.
2. Click on the "Code" button and copy the URL provided.
3. Open your terminal or command prompt, navigate to where you want to clone the repository, and use the git clone command followed by the URL you copied.

    Example:

```
    bash

git clone https://github.com/your-username/repository-name.git
```

- Make Changes Locally: After cloning, you can make changes to the repository locally on your computer.

- Push Changes to Your Fork:

    After making changes, add and commit those changes locally using git add and git commit.
    Push your changes back to your fork on GitHub using git push.

Example:

```
bash

    git add .
    git commit -m "Description of the changes"
    git push origin main
```

- Contributing Back to the Original Repository

If you want to contribute your changes back to the original repository, you can create a pull request:

-  Navigate to Your Fork on GitHub and click the "Pull request" button.
-    Fill Out the Pull Request Form: GitHub will automatically use the differences between your fork and the original repository to fill out the form. Make sure to provide a clear description of what changes you've made and why.
-    Submit the Pull Request: Once you submit the pull request, the maintainers of the original repository will review your changes. They might merge your changes into the original repository, request changes, or discuss further implications with you.

### collaboration and github

 - When someone invites you to collaborate on a GitHub project, there's a general workflow to follow to ensure smooth collaboration. Here's a step-by-step guide to help you track and submit the changes you make to the project:
1. **Accept the Invitation**:
Go to the repository's GitHub page. If you were invited to collaborate, there should be a notification prompting you to accept the invitation.
2. **Clone the Repository**:

```
git clone https://github.com/username/repository-name.git
```

3.  **Navigate to the Repository**:
Change your directory to the cloned repository:
bash

```
cd repository-name
```

4. **Create a New Branch (optional but recommended)**:
Instead of working directly on the main branch (e.g., main or master), create a new branch for your feature or fix. This makes the collaboration process cleaner.

```
git checkout -b your-branch-name
```


5. **Make Your Changes**:
Edit, add, or delete files as necessary.
6. Track Your Changes:
After you've made some changes, check the status of your changes using:

```
git status
```

This will show you the modified files. To add these changes to be committed, use:

```
git add .
```

The . will add all changes. If you wish to add specific files, replace . with the filename.

7. **Commit Your Changes**:
Once you've added your changes, commit them with a meaningful message:

```
git commit -m "Descriptive message about the changes you made"
```

8. **Push Your Changes**:
Push your changes to GitHub:

```
git push origin your-branch-name
```

9. **Create a Pull Request**:
Once you've pushed your branch to GitHub, go to the repository's GitHub page.
Click on "Pull requests" then "New Pull Request".
Select your branch from the dropdown menu to compare it with the main branch.
Review your changes and click "Create Pull Request". Add any necessary comments or descriptions.

10. **Collaboration**:
The repository owner (or other collaborators) will review your changes. They might request some modifications.
Once everything is approved, your changes can be merged into the main branch.

11. **Sync Your Local Repository**:
After your changes are merged (or periodically, even before they are merged), you'll want to update your local repository to get any other changes from the main branch or other collaborators:

```
css
git pull origin main
```

- Remember to replace main with the name of the main branch if it's different.
Repeat:

- For every new feature or fix, you can repeat the process: creating a new branch, making changes, committing, and creating a pull request.
- Remember that Git and GitHub have a bit of a learning curve, so don't be discouraged if things seem complex at first. Over time, this workflow will become second nature. It's also worth noting that there are many other Git commands and features that can be useful, but the above steps outline a basic collaborative workflow.

---

## review-make

---

## git-hpc


