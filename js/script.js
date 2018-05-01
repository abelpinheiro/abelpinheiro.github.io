import Rythm from 'rythm.js'
confirm("Hey Hey Hey start dash!");

import Rythm from 'rythm.js'
const rythm = new Rythm();
rythm.setMusic("C:\Users\Abel\Downloads\Maybe the next waltz.mp3");
rythm.start();

rythm.addRythm('color2', 'color', 0, 10, {
              from: [0,0,255],
              to:[255,0,255]
            })