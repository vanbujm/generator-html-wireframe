#!/usr/bin/env bash

echo compiling sass...
if npm run sass
then
  echo transpiling code...
  if npm run babel
  then
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
  fi
fi
