#!/bin/bash
set -e

(cd flexrating-server && npm i --unsafe-perm=true)


shopt -s dotglob
mv flexrating-server/* installed-flexrating-server-dev/
