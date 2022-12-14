import "../App.css"
import { BsGithub, BsLinkedin } from "react-icons/bs"

export function About() {
  return (
    <>
    <div className="mt-4 p-3 rounded-2 font-link" style={{ backgroundColor: "white" }}>
      <h3 className="d-flex justify-content-center">Hello! My name is Joao and I am a Full Stack Developer based in Toronto, Canada. I did the Golden LEGO®Store as a Front End application using Vite/React and Typescript. The styling for this project was done using Bootstrap Components, their Card and Modal features are very helpfull. I hope you enjoyed the store and added items to your cart! My information is linked below so we can connect and collaborate :)
      </h3>
    </div>
    <br />
    <div className="hstack gap-3 d-flex justify-content-center">
      <div className="bg-white rounded-5">
      <a href="https://github.com/accessjoao" target="_blank"><BsGithub size={70}/></a>
      </div>
      <div className="bg-white rounded-2">
      <a href="https://www.linkedin.com/in/joao-felipe-silveira/" target="_blank"><BsLinkedin size={70}/></a>
      </div>
    </div>
    </>
  )
}
