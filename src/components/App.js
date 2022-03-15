import React from 'react'

import '../assets/css/App.css'
import fs from "fs/promises"
import bufferToDataUrl from "buffer-to-data-url"
import { Howler, Howl } from "howler"

/*
async function play(){
  const data = await fs.readFile("../music/audio.mp3");
  console.log(data);
}

play();*/

fs.readFile("C:\\Users\\AK\\Music\\audio.mp3")
.then(data => {
  console.log(data);
  const URL = bufferToDataUrl("music", data);
  return URL;
})
.then(url => {
  const sound = new Howl({
    src: [ url ],
    format: ["mp3"]
  })

  sound.play();
})
.catch(e => console.log(e))

function App() {
  return (
    <div>
      <h1>Hello, Electron!</h1>

      <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
    </div>
  )
}

export default App
