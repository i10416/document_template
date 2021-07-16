# Title

\[description about this project here\](e.g. Template for better publish experience with honkit and github pages)

## Edit Documents

### Edit existing documents

1: small changes
Visit https://github.com/path/to/repo and edit.

2: complex changes

1. fork and clone the repository
2. edit locally
3. push and create PR

### Add new documents

Create `*.md` file under `<lang>/chapter-<n>/` directory.


## eBooks and PDFs

If you want this document in eBook or PDF format, follow the guide below.

1: clone repository
2: change directory
3: run command

```shell
git clone https://github.com/path/to/repo

cd repo
# generate a pdf file
docker-compose exec --env CHROMIUM_FLAGS="--no-sandbox" --env QTWEBENGINE_CHROMIUM_FLAGS="--no-sandbox" book npx honkit pdf ./ ./example.pdf

# generate an ePub file
docker-compose exec --env CHROMIUM_FLAGS="--no-sandbox" --env QTWEBENGINE_CHROMIUM_FLAGS="--no-sandbox" book npx honkit epub ./ ./example.epub

# generate a Mobi file
docker-compose exec --env CHROMIUM_FLAGS="--no-sandbox" --env QTWEBENGINE_CHROMIUM_FLAGS="--no-sandbox" book npx honkit mobi ./ ./example.mobi

```

## How To Contribute

The \[name of this document project\] is licensed under a Creative Commons Attribution-ShareAlike 4.0 license. 
Everyone is free to add, edit and correct the contents.

You can find any discussions about the contents of this project  on the GitHub issue tracker.

## Getting Started

```shell
docker-compose up
```
And then, go http://localhost:4000



