<!-- omit in toc -->
# Git tutorial
![Git logo](https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png)

<!-- omit in toc -->
## Table of contents
- [`git commit`](#git-commit)
  - [Flags](#flags)
- [`git add`](#git-add)
  - [Parameters](#parameters)
  - [Flags](#flags-1)
- [`git init`](#git-init)
  - [Parameters](#parameters-1)
- [`git config`](#git-config)
  - [Git config file options](#git-config-file-options)
  - [`git config list`](#git-config-list)
    - [Flags](#flags-2)
  - [`git config unset`](#git-config-unset)
    - [Parameters](#parameters-2)
    - [Flags](#flags-3)
  - [`git config set`](#git-config-set)
    - [Parameters](#parameters-3)
    - [Popular scopes](#popular-scopes)
- [`git status`](#git-status)
- [`git show`](#git-show)
  - [Parameters](#parameters-4)
- [`git mv`](#git-mv)
  - [Parameters](#parameters-5)
- [`git rm`](#git-rm)
  - [Parameters](#parameters-6)
  - [Flags](#flags-4)
- [`git remote`](#git-remote)
  - [`git remote add`](#git-remote-add)
  - [Parameters](#parameters-7)
- [`git fetch`](#git-fetch)
  - [Parameters](#parameters-8)
  - [Flags](#flags-5)
- [`git pull`](#git-pull)
- [`git push`](#git-push)
  - [Parameters](#parameters-9)
  - [Flags](#flags-6)
---

## `git commit`
Creates a commit. Good commits are atomic, good commit messages are descriptive yet short.
### Flags
- `-m`: set commit **m**essage
- `-a`: add **a**ll tracked files before commit
- `--author`: set commit **author**
- `--date`: set commit **date**
- `--amend`: **append** changes from index to the latest commit, overwriting it

## `git add`
Adds files to index.
### Parameters
- Files/directories to add (Optional)
### Flags
- `-A`: add **all** project files
- `-f`: **f**orce git to add ignored files
- `-p`: select specific changes instead of adding the file whole
- `--chmod (+x | -x)`: set e**x**ecutable bit

## `git init`
Creates an empty repository.
### Parameters
- Path to the directory.

## `git config`
### Git config file options
Git looks for configuration entries from the top of this table down.
| Option   | Store location |
| -------- | ----------- |
| --local  | the current repository |
| --global | current user's settings |
| --system | OS-specific file |

### `git config list`
Lists configuration key-values.
#### Flags
- [File option](#git-config-file-options): only list entries from this scope. Lists all scopes by default.

### `git config unset`
Removes a configuration value.
#### Parameters
- `scope.key`
#### Flags
- [File option](#git-config-file-options): file to remove the entry from. Defaults to --local.

### `git config set`
**The default subcommand**. Sets a configuration value.
#### Parameters
- `scope.key`
- value.
#### Popular scopes
| Scope | Description |
| ----- | ----------- |
| alias | Each key in this scope becomes a git command. A value prefixed with <kbd>!</kbd> is executed as a shell script. |
| user  | `name` and `email` of the default commit author. |
| core  | `editor`: the default text editor executed by git. |

## `git status`
Shows:
* the current branch;
* is up to date;
* staged and unstaged changes.

## `git show`
Tells information about a commit:
- author, authored date;
- committer, commit date;
- commit message;
- commit diff (the changes).
### Parameters
- commit hash or a ref.

## `git mv`
Moves a file in the working directory and adds this change to index.
### Parameters
- source path;
- destination path.

## `git rm`
Removes a file from the working directory and adds this change to index.
### Parameters
- directory or file path.
### Flags
- `-r`: removes a directory **r**ecursively.

## `git remote`
### `git remote add`
Stores remote repository's url under a name for future use in [fetch](#git-fetch), [pull](#git-pull) and [push](#git-push).
### Parameters
- name;
- url.

## `git fetch`
Fetches the commits of a branch from a remote repository into the local repository.
### Parameters
- name of a remote;
- branch.
### Flags
- `--set-upstream <remote> <branch>`: associate remote's name with the branch for future calls of [pull](#git-pull) and [fetch](#git-fetch).

## `git pull`
Identical to [`git fetch`](#git-fetch), but also checkouts to the latest commit upon fetched.

## `git push`
Sends commits from the local repository into the specified remote repository.
### Parameters
- name of a remote;
- branch.
### Flags
- `-u <remote> <branch>`: associate remote's name with the branch for future calls of [push](#git-push) and [status](#git-status).