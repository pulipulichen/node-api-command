#!/bin/bash

pgrep node && kill $(pgrep node)

cd "$(dirname "$0")"

npm run start