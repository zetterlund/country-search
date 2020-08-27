# Script to move production-built React files into webroot

# (Delete pre-existing production code)
rm ../webroot/index.html
rm -r ../webroot/static

# (Move newly-created production code into webroot)
mv ./build/index.html ../webroot
mv ./build/static ../webroot

# (Clean up newly-created react 'build' folder)
rm -r ./build
