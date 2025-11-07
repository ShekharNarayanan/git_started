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