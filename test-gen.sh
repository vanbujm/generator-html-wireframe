#!/usr/bin/env bash

echo compiling sass...
npm run sass

echo transpiling code...
npm run babel

if cd generated-example
then
  echo cleaning example folder...
  rm -rdf ./*
else
echo createing example folder...
 mkdir generated-example
 cd generated-example
fi

echo generating wireframe...
yo html-wireframe

cd ..
