# Script to move production-built React files into project root

rm ../index.html
rm -r ../static

mv ./build/index.html ../
mv ./build/static ../

rm -r ./build
