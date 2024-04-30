# reshaper-pre-commit-hook
Resharper format pre-commit hook. It uses resharper to format all the files you're committing, and automatically restages them.

# Requirements
- unzip: `sudo apt-get install unzip`

- For Linux & macOS you have to install `gsed`: https://formulae.brew.sh/formula/gnu-sed

# Installation
Get the latest version using bash, by running this command in the root of your repository:
```bash
curl -s https://raw.githubusercontent.com/decentraland/reshaper-pre-commit-hook/master/install-git-hook.sh | bash
```
Note that this runs a shell script on your computer. You might want to review the script before running it.

# License
MIT
