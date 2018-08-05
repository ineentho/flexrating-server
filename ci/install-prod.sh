#!/bin/bash
set -e

(cd flexrating-server && npm i --production --unsafe-perm=true)


shopt -s dotglob
mv flexrating-server/* installed-flexrating-server-prod/
