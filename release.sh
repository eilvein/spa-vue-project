
#!/usr/bin/env sh

set -e

# Release branch
master="master"

npm run version 

git push --follow-tags origin $master

echo "Git push origin $master"
echo "Release finished."