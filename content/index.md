---
title: "Git Started"
layout: default
---


# OVERVIEW

Git is a version control software — meaning that it can track all versions of your code as you build your codebase. It is also absolutely essential when it comes to collaborating with colleagues on your code. This document has three sections:  
(1) Git commands and their usage,  
(2) Using GitHub issues and branches as a TODO list for your project, and  
(3) The procedure for using Git commands and features.

It can definitely feel challenging or irritating in the beginning to go through many steps every time you want to work on your code, but once you are used to it, it can really add to the way you develop software and collaborate. It is the only tool that is used by all professional software developers. You can also use Git and GitHub to host your code after you are done publishing.  

**Notes:**  
Every copypastable code line (right click and then paste) is highlighted like this:  
`example code line`  
Any URLs or links that can be clicked on are highlighted in blue like [this](https://example.com).  
If you wish to learn about Git and GitHub through a nice online tutorial, please go [here](https://www.youtube.com/watch?v=RGOj5yH7evk&t=360s).  

The commands listed below are not exhaustive.

---

## 1. GIT COMMANDS AND THEIR USAGE

1. `git clone <url>`: this command lets you create a copy of an online repository on GitHub onto your computer.  

2. `git switch branch_name`: A branch in Git is like a separate copy of your project where you can make changes without affecting the main version.  
This command is used to go to the branch you wish to work on. The name of the branch is written in blue text in your Git terminal.  
In the image below, it is “main”. You can replace “branch_name” with your branch name.  

![](media/Picture1.png)

3. `git pull`: this command lets you get the current version of all your files available online on the repository onto your computer.  It will also modify your files based on their versions online.  Note, this is different from `git fetch`, which gets you all the files remotely in your PC but does not automatically modify your files.  

4. `git status`: this tells you how many files have been changed since their last version and what are the names of those files.  Note, a command called `git log` gives you your entire commit message history from the beginning to the end.  

5. `git add <name of file>`: this command enables you to add the most recent version of a specific file.  You can write the first three or four letters of your file name and press `Tab` to make Git autocomplete the file name.  

6. `git commit -m "my commit message"`: this is the command that helps you attach a message to your changes.  Replace the message within the double quotes to something that tells other people what changes you made.  For example: `"Add function to improve efficiency"`  

7. `git push`: this command will make your changes available online.  

8. `git branch -d branch_name`: delete a Git branch locally from your machine.

---

## 2. USING GITHUB ISSUES AND BRANCHES AS A TODO LIST

### 2.1 STARTING AND WORKING ON A TODO USING GITHUB

1. GitHub has a feature called “issues”. Whenever you wish to change significant portions of your code or work on a specific “TODO” on your code,  the first step is to create an issue on GitHub. You will find them in the main tab on the screen as shown below.  

  ![](media/Picture2.png)

2. Once you click on **Issues**, you can click on **New issue** as shown in the top right of the image below.  

  ![](media/Picture3.png)

3. Give a title and description for the issue. Optionally, you can assign them to yourself or someone else if you wish.  

  ![](media/Picture4.png)

4. When you are done creating the issue, scroll down on the page and find the **Development** section somewhere on the right.  Click on **Create a branch** as highlighted in blue.  

  ![](media/Picture5.png)

5. When you perform step 4, the following opens and you can click on **Create branch** on the bottom left.  This is the branch that you will be working with for your TODO.  

  ![](media/Picture6.png)

6. Note that each issue corresponds to a number (like #21). This is useful for your commit messages.  More on this later in the steps section.


---

### 2.2 CONCLUDING AN ISSUE / TODO

If you decide you are finished with the TODO or the issue, you have to:

- Open the issues tab and mark the specific issue as closed (the “close issue” button appears on the bottom of the issue description box).
- Merge your branch with the main branch and delete your branch.

#### Merging a branch through a pull request:

1. When you are done working on an issue and you’ve made the final `git push` for your changes,   you can open the main page of your GitHub repository. You will see something like the image below. You can click on **Compare & pull request**. 
![](media/Picture7.png)
  

2. Step 1 will open a window like the following. Notice that GitHub is telling you which branch is being merged into which one.  The section above `Add a title` shows that changes from your issue branch are being merged into the main branch. Based on your workflow, it is recommended to always pay attention to the direction in which you are merging your branches (i.e., *which branch you are merging into* and *which branch the changes are coming from*). You can add more details if you wish and then click on **Create pull request**.  

  ![](media/Picture8.png)

3.  When step 2 is completed, the following window will open if there are no conflicts (meaning nothing you changed is overwriting something Git can't reconcile),  you will see a green message like the image above. If you see this message, go to step 5.


  ![](media/Picture9.png)


4. In case of merge conflict, try to understand which changes are the cause and follow this [article](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) Merge conflicts are quite common and help you learn more about Git, so don't panic when you see one 😄

![](media/Picture9_b.png)

5. Click on **Merge pull request** and then **Confirm merge** when prompted to you as in step 3. GitHub will then show you a section that looks like the image below. You can now delete your branch on GitHub.  Note that you still need to delete the branch on your PC. The instructions on how to do this are at the end of section 3 part B.

  ![](media/Picture10.png)
  

---

## 3. STEPS TO FOLLOW

### A: When you don’t have the repository linked to your computer yet

*(Start with these if you do not know how to proceed with Git or GitHub yet.)*

1. Create a repository if you haven’t already. Use [these steps](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).  
   If you already have one, proceed to the next step.
2. Install Git for Windows from [here](https://git-scm.com/downloads/win). This step only has to be done once.
3. Open the GitHub page of your repository.
4. Press the button that is green and says **Code**.

![](media/Picture11.png)

5. Make sure you are looking at the HTTPS link. Keep this tab open, we will need to use it.
6. In your PC, decide a place where you wish to make a copy of the repository.  
   Make sure you remember this location and it’s easily accessible.
7. Right click and click on **Open Git Bash here**.
8. Write `git clone url`. Replace `url` by the HTTPS link you copied from step 4.  
   You will need to right click to paste the link. Press **Enter** when done.
9. If everything works well, you will now have a folder in your PC with the exact name as the one on GitHub.
10. Next, in the command line, write:  
    `cd name_of_your_folder`  
    (`cd` is short for “change directory”). Replace the text after `cd` with the actual name of your folder.

You are done with the steps in section A! You can proceed to section B any time you wish to make changes to your code.

---

### B: When you have already cloned the repository (the GitHub repository is on your PC linked with Git)

The usual order of doing things is as follows:

1. Decide what you want to work on in your code and create an issue and its corresponding branch on GitHub. See section 2 if you are unsure about these steps.

2. Open Git Bash using the right click of your mouse inside the folder where you are making changes. This is done in your file explorer (how you usually access folders inside your Windows PC).

3. Write `git pull`: before making any changes to your files, ensure you are working with the most updated version of the files and that the branch you created using GitHub issues is now locally on your PC.

4. Write `git switch name_of_your_branch`: use this command to go to the branch you created an issue for.

5. Make changes to your file(s) and save them using `Ctrl + S`. In version control, it’s recommended not to change lots of unrelated things at once inside a single file. This helps you write clear commit messages.

6. Now in the Git terminal, write `git status`: this will inform you about all the files that have changed.

7. Use `git diff`: this command finds out exactly what was changed in each file.  
   For instance, if you write `git diff my_file.m`, it will show where code was added (in green) or deleted (in red). This is absolutely *essential* when working with AI tools, which can modify code unexpectedly without informing you.

![](media/Picture12.png)
9. Use `git add file_name`: from the files that are changed (you will see those files in step 6),  
   choose which to add by writing something like `git add my_file.m`. I recommend adding one file at a time using `git add`. **Please also take a look at the footnote for this point in the footnotes section**

10. Use `git commit -m "message"`: attach a message that summarizes your changes.  
   It is recommended to commit one logical change at a time — e.g., “Add gradient descent function”.

11. Use `git push`: this will make your changes available online. You don’t need to push every time you commit something, but it is recommend pushing everything online at least once a day.

---

### Continuing or concluding your work

#### If you are **not done** with an issue and wish to continue making changes:  
You can make multiple pushes to your issue. Every time you write code (after a recent `git push`), follow steps 2–10 until you’re done.

#### If you are **done** with an issue/TODO:  
1. You can now go to GitHub and merge your branch with the main branch. Please remember to delete the remote branch when GitHub prompts you to do that.  Refer to section 2 if you’re not sure how to perform these steps.

2. To delete the local branch on your PC:  
Switch to another branch (for example `git switch main`) and then write:  
`git branch -d branch_name`  
This deletes your branch locally.

---

### Foot notes

**About `git add`:**  
It is also okay to combine multiple files when adding and committing them.  
For instance, if you change code in two files for a similar reason, you can combine them:  
`git add file1.m file2.m`  
and then commit them like:  
`git commit -m "Add functionality x in file1 and file2"`  

