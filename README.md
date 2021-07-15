# Title
\[description about this project here\]

## Getting Started

```shell
docker-compose up
```

## eBooks and PDFs

If you want this document in eBook or PDF format, follow the guide below.

1: clone repository

```shell
git clone https://github.com/path/to/repo

cd repo
# generate a pdf file
docker-compose exec --env QTWEBENGINE_CHROMIUM_FLAGS="--no-sandbox" book npx honkit pdf ./ ./example.pdf

# generate an ePub file
docker-compose exec --env QTWEBENGINE_CHROMIUM_FLAGS="--no-sandbox" book npx honkit epub ./ ./mybook.epub

# generate a Mobi file
docker-compose exec --env QTWEBENGINE_CHROMIUM_FLAGS="--no-sandbox" book npx honkit mobi ./ ./mybook.mobi

```

## How To Contribute

The \[name of this document project\] is licensed under a Creative Commons Attribution-ShareAlike 4.0 license. 
Everyone is free to add, edit and correct the contents.

You can find any discussions about the contents of this project  on the GitHub issue tracker.
