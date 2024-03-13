<span id="top"></span>
---
Some Configs
---

# Table of content 
- [Pandoc](#step-0)
- [Marp](#Marp)
- [Markdown](#markdown-review)
- [linux](#linux)
- [git](#git)
  - [creating](#creat-repository)
  - [stop tracking](#stop-tracking)
  - [fork and branching](#fork-and-branching)
  - [collaboration on Github](#collaboration-and-github)
  - [git LFS](#git-LFS)
- [make](#review-make)
- [git for hpc](git-hpc)
  - [track repository on HPC server](#hpc-track)
- [prepare and run a project on HPC](#step0-hpc)
  - [bash programing](#bash)
  - [simple step by step preparing PBS file](#basic-pbs-file)
  - [environment varibles](#env-variable)
  - [real exprements](#real)
- [conda](#conda)
  - [conda and hpc](#conda-and-hpc)
  - [python_packages_concept](#concept)
  - [LSU conda HPC](#conda-lsu)
  - [confilct with different Python versions](#pythons)
  - [tests](#tests)






---


<!-- 

to run the md file and see the changes live

ls  selfTuroring.md | entr pandoc /_ -s -o selfTuroring.html --css pandoc.css

-->




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

## linux 


**Checking the Size of Directories/Files**

   - To check the size of a specific directory or file, you can use the du (disk usage) command for directories and the ls command for files. For a directory:

    bash
```
du -sh /path/to/directory
```

- The -s option provides the total size of the directory, and -h makes the size human-readable (e.g., KB, MB, GB).

- To check the size of files within a directory (including the directory size itself), you can use:



```
du -ah /path/to/directory | less
```


The -a option lists files as well as directories.


**Checking the Time of Modification**

- To check the modification time of files and directories, use the ls command with the -l option:

 
```
ls -l /path/to/directory
```


- This command lists files and directories with details including the modification time. The modification time is displayed in the format YYYY-MM-DD HH:MM.

- For a more detailed view, including hidden files, add the -a option:


```
ls -la /path/to/directory
```


**Sorting the Output**

To sort the directories by their size, you can use the sort command in conjunction with du:

bash

```

du -h /path/to/directory | sort -h
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


#### Current branch

```
git branch
```

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



### git LFS

- Using Git Large File Storage (Git LFS) is an effective way to handle large files in your Git repository without bloating the repository's size. Git LFS replaces large files in your repository with tiny pointer files. The actual files are stored on a separate server. Here's how to set up and use Git LFS to manage large files and potentially reduce your repository's size:

- Step 3: Track Large Files with Git LFS

- Specify the types of files you want Git LFS to manage. You can do this by file extension or filename. For example, to track all .zip files, you would use:

```

git lfs track "*.zip"
```


- Replace *.zip with the appropriate pattern for your large files. Each pattern you want to track must be added with a separate git lfs track command.

- After tracking the desired files, make sure to add the .gitattributes file to your repository:

```

git add .gitattributes
git commit -m "Track large files with Git LFS"
```

- Step 4: Migrate Existing Large Files to Git LFS

- If you already have large files in your repository's history, you need to migrate them to Git LFS. This step involves rewriting your repository's history, which can affect other users. Coordinate with your team before proceeding.

- you can use the git lfs migrate command to move existing large files to LFS:


```
git lfs migrate import --include="*.zip" --include-ref=everthing

```


- Replace *.zip with the pattern for your large files, and refs/heads/main with the branch you're targeting. This command rewrites the history for the specified branch, replacing the large files with LFS pointers.

- Step 5: Push Changes to Your Remote Repository

- After migrating large files to Git LFS, push your changes to the remote repository:


```
git push --force origin main
```

- Use --force with caution, as it will overwrite the remote branch with your rewritten history. This is necessary after rewriting history but can cause issues for others who have cloned the repository. Ensure all team members are aware of the change and ready to handle it.

---

## example 


2038  git lsf track "*.png" "*.h5" "*.mp4"
 2039  git-lsf track "*.png" "*.h5" "*.mp4"
 2040  git lfs track "*.png" "*.h5" "*.mp4"
 2041  git lfs migrate import --inldue="*.png" --everything
 2042  git lfs migrate import --incldue="*.png" --everything
 2043  git lfs migrate import --include="*.png" --everything
 2044  git lfs migrate import --include="*.h5" --everything
 2045  git add .gitattributes
 2046  git commit -m "track large files with Git LFS"
 2047  du -h 
---


## review-make


---

## hpc track

- When working with projects on both a local PC and an HPC (High-Performance Computing) server, and using GitHub for version control, you typically want to keep your project synchronized across these environments without necessarily tracking changes independently on the HPC server. Here's a common workflow:

   1.  Clone the Repository on HPC Server:
        To clone the project to your HPC server, use the git clone command followed by the repository URL. For example:

```
git clone https://github.com/yourusername/yourproject.git /home/user/yourproject

```

2. Working on the HPC Server:

   - When you work on the HPC server, you would typically pull the latest changes from GitHub to make sure you're working with the most up-to-date version of your project. Before you start working, you can do:

```
git pull origin main
```

- Make your changes, run your experiments, or perform computations as needed.


3. Pushing Changes Back to GitHub (if necessary):

   - If you make changes to your code on the HPC server that need to be preserved or shared with others, you would commit those changes and push them back to GitHub, just like you would from your local PC:

```
git add .
git commit -m "Description of changes made on HPC"
git push origin main
```

- This step assumes you've made changes that are relevant to be tracked, such as modifications to scripts or source code. If you're just generating data or results, those might not need to be tracked with Git and could be ignored via .gitignore.

4. Keeping HPC Work Separate (if necessary):

   - Sometimes, you might want to keep the work done on the HPC server separate from your main development branch (e.g., main or master). In this case, you can create a new branch on the HPC server before starting your work:

```    

git checkout -b hpc-work
```

- After you're done, commit your changes to this branch and push it to GitHub. This way, you can merge these changes into your main branch later, either through a pull request on GitHub or by merging the branches manually.

5. Do You Need to Track on HPC Too?

   - You do not need to maintain a separate version control system on the HPC server. The same Git repository can be used to track your project across all machines. The key is to commit and push changes made in one environment (e.g., your local PC) and pull them in the other (e.g., the HPC server) to keep them synchronized.

6. .gitignore on HPC:

   -  Ensure your .gitignore file is properly set up to ignore files that should not be tracked (e.g., large data files, binary files, temporary files). This is particularly important on HPC servers where you might generate large amounts of data.







---

## step0 hpc


1. Prepare Your Local Environment

    - Organize your project: 
    - Make sure your project directory is well-organized, with source code, data files, and any scripts you use for building or running your project neatly arranged.
    - Compile C++ code: If your project includes C++ code, compile it on your **local machine** to ensure there are no compilation errors.
    - Note any special compiler flags or libraries you use.

2. Transfer Files to the HPC System

    - Use Secure Copy (SCP) or rsync:
    -  Transfer your project directory to the HPC system using SCP or rsync.
    -  The command might look like 


```
scp -r /path/to/local/project username@hpc.domain:/path/to/remote/directory for SCP

 or rsync -av /path/to/local/project username@hpc.domain:/path/to/remote/directory for rsync.
```
 
- Using Git to transfer files to an HPC (High-Performance Computing) system can streamline your workflow, especially if you frequently update your code.

3. Set Up Your Environment on the HPC

    - Load necessary modules: HPC systems often use environment modules to manage software. Use module load to load any compilers or software you need. For example, you might need to load Python, a C++ compiler, or specific libraries.
    - Install Python dependencies: If you can, use a virtual environment for Python dependencies. For example, you can create a virtual environment with python -m venv myenv and activate it with source myenv/bin/activate. Then, install your requirements using pip install -r requirements.txt.

4. **Compile C++ Code on the HPC**

    - Recompile your C++ code: Since the HPC environment might differ from your local machine, recompile your C++ code on the HPC system. Adjust your compilation commands as necessary based on the available compilers and libraries.

5. Test Your Setup

    - Run tests: Before submitting any large jobs, run tests to make sure both your Python and C++ components work as expected in the HPC environment.


6. Write Submission Scripts

    - Prepare submission scripts: HPC systems typically use job schedulers like Slurm, PBS, or SGE. Write submission scripts that load the necessary modules, activate your Python environment, and run your application.


7. Submit Jobs

    - Use the job scheduler: Submit your job to the HPC's job scheduler using a command like sbatch my_submission_script.sh for Slurm.

8. Monitor and Collect Results

    - Check job status: Use the job scheduler's commands (e.g., squeue for Slurm) to monitor your job's status.
    - Collect results: Once your job has completed, collect and review your results. Check the output and error files specified in your submission script.





### bash

**shebang or hashbang**

- #!/bin/bash is known as a shebang or hashbang. It's a character sequence at the very start of a script file that specifies which interpreter should be used to execute the script. In the case of #!/bin/bash, it tells the operating system to use the Bash shell to interpret the script.

- Here's a breakdown of the components:

    - "#" is the hash symbol that starts a comment in many scripting languages.
    - ! following the hash symbol distinguishes this comment as a special one, the shebang.
    - /bin/bash specifies the path to the Bash shell interpreter.

- This line should be the very first line in a script file. When you make the script executable and run it, the operating system reads this line to know that it should use Bash, located at /bin/bash, to execute the script's commands.

- It's important to note that /bin/bash is the common path to the Bash interpreter on many Unix-like systems, but the path could be different depending on the system configuration. Other interpreters (like Python, Ruby, etc.) can also be specified in a similar manner for their respective scripts.


---

**`dirname \ "$0\"`**

- it shows the path that the the .sh file is exacute form look at the example

- The command dirname "$0" is used in shell scripts to get the directory path of the script itself, regardless of where it's called from. Let's break down this command:

-   **dirname** is a Unix command that takes a pathname as an argument and returns the path of the directory part of the pathname. It effectively strips the last component from the supplied path, leaving just the path to the directory.

-   **$0** is a special parameter in shell scripts that represents the name of the script itself. When you execute a script, $0 contains the full path to the script if it was called with a path (e.g., ./myscript.sh or /path/to/myscript.sh). If the script was found in the PATH and executed by just its name, $0 will only contain the name of the script.

-    The quotation marks " " are used to handle any spaces or special characters in the pathname. Without them, a path containing spaces would be split into multiple arguments, likely causing errors.

-    The backticks ` (or alternatively, $( ) in modern scripts) are used for command substitution. It allows the output of the dirname "$0" command to be used as part of another command or assigned to a variable.

Putting it all together, dirname "$0" is often used in scripts to find the path to the directory where the script itself resides. This can be particularly useful for scripts that need to access files relative to their own location. For example, if you have a script and some data files in the same directory, you can use dirname "$0" to construct the path to the data files, making the script work regardless of the current working directory from which it is executed.

#### Example

```
DavDam->cd projects/beta_perigrain_v2/examples/hpcExample/3d-kalthoff-hpc/
DavDam->ls
base.conf  hpcRun.sh  run.sh  setup.py
DavDam->bash hpcRun.sh 
path= .
DavDam->cd ../..
DavDam->pwd
/home/davood/projects/beta_perigrain_v2/examples
DavDam->cd ..
DavDam->bash examples/hpcExample/3d-kalthoff-hpc/hpcRun.sh 
path= examples/hpcExample/3d-kalthoff-hpc
```

### **export**

The command **export PROJ_DIR=$HOME/peri-wheel** is used in Unix-like operating systems to set an environment variable named PROJ_DIR and make it available to subsequent processes launched from the current shell. Here's a breakdown of the command:

- export is a shell builtin command used to set environment variables so that they are inherited by any child processes or subshells. This is necessary if you want the variable to be available not just in the current shell session but also in any programs or scripts launched from this session.

- PROJ_DIR is the name of the environment variable being set. Environment variable names are typically uppercase by convention, but this is not a requirement.

-    = assigns the value on the right to the variable on the left. There should be no spaces around the = in variable assignments in the shell.

-   $HOME is a special variable in Unix-like systems that contains the current user's home directory path. It's used here as part of the value being assigned to PROJ_DIR.

-    /peri-wheel is a directory path appended to $HOME, resulting in a full path. This means that if your home directory is /home/username, PROJ_DIR will be set to /home/username/peri-wheel.



### basic pbs file 

Writing a PBS (Portable Batch System) script to submit a job to a High-Performance Computing (HPC) cluster involves creating a text file that specifies how the HPC scheduler should run your project. This file will include directives for the scheduler and the commands necessary to execute your project. Here's a step-by-step guide to creating a basic PBS file for your project, assuming it has a Bash script (run_project.sh) that runs your Python and C++ code in order:

1. Create the PBS file: Start by creating a new text file for your PBS script. This could be named **submit_project.pbs**, for example.

2. Add PBS directives: At the top of the file, add lines for PBS directives. These lines start with #PBS and are used to specify resources and settings for the job. Common directives include:
     -   -N: Name of the job.
     -   -q: The queue to submit the job to.
     -   -l: Resources requested (e.g., nodes, processors per node, walltime).
     -   -m: Mail options (e.g., send email on start, end, and abort).
     -   -M: Email address for notifications.
     -   -o: Path for the output file.
     -   -e: Path for the error file.

Here's an example of what these directives might look like

```
#PBS -N MyProject
#PBS -q batch
#PBS -l nodes=1:ppn=4
#PBS -l walltime=01:00:00
#PBS -m abe
#PBS -M your.email@example.com
#PBS -o /path/to/your/output
#PBS -e /path/to/your/error
```

3. Load modules: If your project requires specific software modules (e.g., Python, a C++ compiler), load them after the PBS directives. Use the module load command if your HPC environment uses a module system to manage software:

```
module load python/3.8
module load gcc/9.2
```

4. Navigate to your project directory: If your bash script isn’t in your home directory, add a cd command to navigate to the directory containing your project's bash script:

```
cd /path/to/your/project
```

5. Execute your script: Finally, add the command to execute your bash script. If your script is named run_project.sh, you would add:

```
bash run_project.sh
```


6. Submit your PBS script to the queue: Once your PBS script is ready, you submit it to the job queue with the qsub command:


```

qsub submit_project.pbs
```


- Here is how the **complete PBS** script might look:

```
#!/bin/bash
#PBS -N MyProject
#PBS -q batch
#PBS -l nodes=1:ppn=4
#PBS -l walltime=01:00:00
#PBS -m abe
#PBS -M your.email@example.com
#PBS -o /path/to/your/output
#PBS -e /path/to/your/error

module load python/3.8
module load gcc/9.2

cd /path/to/your/project
bash run_project.sh
```

### env variable

![HPC env variables](images/envs.png)

- **$PBS_NODEFILE**:

 In the context of a PBS job, PBS_NODEFILE is an environment variable **automatically** set by the PBS system. It points to a file that contains a list of the compute nodes allocated to the current job, with each line representing a node. If nodes are allocated more than one processor (core), the node's name will appear in the file once for each allocated processor, thus indicating the total number of processors available to the job.




## real




- pip3 install -r requirements.txt

- source .bashrc
- source .modules
- Ctrl r +type the dastor






## conda


![conda env variables](images/conda1.png)

- To use Conda to install packages listed in a requirements.txt file for your project, follow these steps. This process assumes you have Conda installed on your system. If not, you'll need to install either Anaconda or Miniconda first.

  1.  Create a new Conda environment (optional): If you don't already have a Conda environment for your project, create one using the command below. Replace myenv with the name you wish to give your environment. You can also specify a Python version (e.g., python=3.8) if your project requires a specific version.

```    

conda create --name myenv python=3.8
```

2. Activate the Conda environment: Before installing any packages, activate the environment you've just created or an existing one you intend to use.


```
conda activate myenv
```

3. Install packages using requirements.txt: Conda does not directly support installing all packages from a requirements.txt file because this file is designed for pip, Python's package installer. However, you can use pip within a Conda environment. First, ensure pip is installed in your Conda environment:


```
conda install pip
```


4. Then, use pip to install the packages from your requirements.txt file:

```

    pip install -r requirements.txt
```

- This approach leverages the best of both worlds: Conda's environment management and pip's extensive package support. Remember that while Conda can manage many packages natively, using pip as a fallback is perfectly acceptable for packages that are either not available through Conda or are more up-to-date on PyPI (the Python Package Index).


**Additional Tips**
    - List environments: conda env list or conda info --envs
    - Remove an environment: conda env remove --name myenv
    - Update Conda: conda update -n base -c defaults conda
    - Search for packages: conda search package_name
    - List installed packages: conda list


#### Understanding the relationship between Conda, Python, and how versions are managed can be a bit confusing at first. Here’s a simple way to look at it:

    - Conda is both a package manager (like pip) and an environment manager. It is used to install Python packages and can also be used to create isolated environments that contain specific versions of Python and other packages. When you install Conda (either via Miniconda or Anaconda), you don't need to install Python separately; Conda itself will install a version of Python.

    - Python Versions Within Conda: When you create a new environment using Conda, you can specify which version of Python you want to use in that environment. If you don't specify a version, Conda will use the default Python version that came with it, which might not necessarily be the latest version.

- To clarify further:

1. Installing Python on Conda

- You don’t install Python on Conda; instead, you use Conda to install Python. For example, when you create a new environment, you can specify the version of Python you want:

bash
```
conda create --name myenv python=3.8
```

- This command creates a new Conda environment named myenv and installs Python 3.8 in it.
Checking Python Version in a Conda Environment

- To know which version of Python is being used in a specific Conda environment, you can activate the environment and then check the Python version:

   2. Activate the environment:

    bash
```
conda activate myenv
```

3. Check the Python version:

bash
```
    python --version
```
This command will display the Python version installed in the currently active Conda environment.
Additional Notes

    Without specifying a Python version: If you create a Conda environment without specifying a Python version, Conda will still include Python in the environment. It will use the version that was bundled with Conda or the latest version that is compatible with other specified packages.

    Updating Python in a Conda environment: You can update the Python version in an existing environment by using the conda update command. For example, to update Python in your current environment, you could use:

    bash
```
    conda update python
```
Conda makes it straightforward to manage multiple versions of Python and ensures that different projects can have their own isolated environments with specific package versions, without interfering with each other.

----


### conda and hpc


```
conda install -c conda-forge gmsh
```



---

### **conda-forge**



Using the command conda install -c conda-forge gmsh is a straightforward way to install Gmsh using Anaconda or Miniconda, by fetching it from the conda-forge channel. This method is particularly useful for managing different software environments and can be especially convenient if you're working on a cluster where you might not have permissions to install software globally or where compiling from source might be complex due to dependency issues. Here's how to do it step-by-step:
1. Load Anaconda/Miniconda Module (If Required)

On some clusters, Anaconda or Miniconda is made available as a module. First, check if this is the case and load the module:

bash

module load anaconda

or

bash

module load miniconda

The exact command depends on your cluster's configuration. If Anaconda or Miniconda is not available as a module, it needs to be installed following the cluster's or your own user space guidelines.
2. Create a New Conda Environment (Optional)

It's often a good practice to create a new environment for each project or software toolset to avoid conflicts between dependencies. You can create a new Conda environment with:

bash

conda create --name mygmshenv python=3.9

Here, mygmshenv is the name of the new environment, and python=3.9 specifies the Python version. You can adjust the Python version according to your requirements.
3. Activate the New Environment

Before installing Gmsh, activate the environment you just created (or an existing one if you're installing there):

bash

conda activate mygmshenv

4. Install Gmsh

Now, you can install Gmsh from the conda-forge channel:

bash

conda install -c conda-forge gmsh

This command tells Conda to install the Gmsh package from the conda-forge community-maintained channel.
5. Verify Installation

After the installation completes, you can verify it by running:

bash

gmsh --version

This should print the installed version of Gmsh to the console.
Notes

    Environment Modules: If you're using a shared cluster, be aware of the software environment modules loaded (e.g., for compilers, MPI). These might affect how you use Gmsh, especially if you plan to integrate it with other software.
    Access and Permissions: Make sure you have the necessary permissions for installing software within your Conda environment and that your environment has enough space for the installation.
    Using Gmsh: With Gmsh installed, you can start using it for your mesh generation or finite element analysis projects directly within this Conda environment.

This method simplifies the installation process and manages dependencies automatically, making it a preferred approach in many cases, especially when direct internet access is available on the cluster.




## concept

---


It looks like you tried to check the version of NumPy using numpy --version, which is not the correct way to check the version of a Python package from the command line. The error message bash: numpy: command not found... occurs because numpy is not a command-line utility but a Python library.

To check the version of NumPy installed in your Conda environment (or any Python environment), you should activate your environment and then use Python to query the NumPy version. Here's how you can do it:

    First, make sure your Conda environment is activated. It looks like you're already in your environment (minConEnv), but if you need to activate it again, use:

    bash

conda activate minConEnv

Then, to check the NumPy version, run the following command:

bash
```
    python -c "import numpy; print(numpy.__version__)"
```
This command tells Python to import the NumPy library and print its version attribute, which will display the version of NumPy currently installed in your active Conda environment.

If you find that NumPy is not installed in your environment, you can easily install it using Conda with the following command:

bash

conda install numpy

This will install the latest version of NumPy available in your Conda channels. If you need a specific version, you can specify it like this:

bash

conda install numpy=1.19.2

Adjust the version number according to your requirements.




---

## conda lsu 

- install conda in lsu hpc



![conda env variables](images/lsuConda.png)

- virtual environment

![conda env variables](images/conda1.png)


- using **conda search**

![usefull comments](images/condaList.png)



- where to get software?



![usefull comments](images/channels.png)


- install the packages 



![usefull comments](images/install.png)




----


## pythons
- python and install package on different versions 

- Given your situation, it seems you have multiple Python versions within your perienv environment, which could potentially lead to confusion about which Python interpreter is being used to run your scripts and which one has numpy installed. Here's how to address your concerns:
Identifying the Python Interpreter

1. Check the **Default Python Version**: When you activate your environment and simply run python, it uses the default Python interpreter for that environment. To check which version it is, you can run:

```
    python --version

```


2. Check the **Python Interpreter Path** : Running which python (as you did) after activating your environment shows the path to the default Python interpreter that will be used. This is the interpreter for which you should generally install packages and run scripts.

 3. **Determining Where numpy is Installed**

    -Verify numpy Installation for a Specific Interpreter: You can explicitly check if numpy is installed for a particular Python version by running:

    

```
~/.conda/envs/perienv/bin/python -m pip show numpy

```
- Replace python in the command above with python3, python3.6, etc., to check for numpy under different Python versions within your environment. If numpy is installed, this command will output details about the installation; if not, it will produce no output for that interpreter.


### Changing the Default Python Version in the Environment

- If you need to change which Python version is the default in your environment (for example, if you want python to point to Python 3.6 instead of another version):

   -  Recreating the Environment: The most straightforward way is to recreate the environment with the desired Python version, for example:

```    
conda create --name perienv_new python=3.6
```


---

## tests

- check  **numpy** version

```

 python -c "import numpy; print(numpy.__version__)"

```


- Determining **Where** numpy is Installed

    -Verify numpy Installation for a Specific Interpreter: You can explicitly check if numpy is installed for a particular Python version by running:

```
~/.conda/envs/perienv/bin/python -m pip show numpy

```


- Check the Default Python Version: 

```
    python --version
```


---

<div id="back-to-top" style="position: fixed; bottom: 20px; right: 20px; display: none;">
    

<a href="#top">&#x2191; Back to Top</a>


</div>

<script>
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("back-to-top").style.display = "block";
        } else {
            document.getElementById("back-to-top").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    document.getElementById("back-to-top").onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
</script>
