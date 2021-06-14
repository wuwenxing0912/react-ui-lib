#!/bin/env bash

yarn doc
git checkout x-ui-home
mv -f doc/* ./
git add .
git commit -m "update"
git push
git checkout -