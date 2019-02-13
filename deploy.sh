#!/bin/bash

set -e            # fail fast
set -o pipefail   # do not ignore exit codes when piping output

release: node_modules/.bin/sequelize db:migrate
