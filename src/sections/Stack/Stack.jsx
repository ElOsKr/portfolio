import React from 'react'
import { MainContainer, StackContainer } from './StackStyle'
import SingleStack from '../../components/SingleStack/SingleStack';
import { 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiSass,
  SiMui,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'

function Stack() {

  const stack = [
    {
        title: "Stack FrontEnd",
        items:[
            {
                id: "html",
                name: "HTML5",
                icon: <SiHtml5 />
            },
            {
              id: "css",
              name: "CSS3",
              icon: <SiCss3 />
            },
            {
              id: "js",
              name: "JavaScript",
              icon: <SiJavascript />
            },
            {
              id: "react",
              name: "React",
              icon: <SiReact />
            },
            {
              id: "redux",
              name: "Redux",
              icon: <SiRedux />
            },
            {
              id: "sass",
              name: "Sass",
              icon: <SiSass />
            },
            {
              id: "mui",
              name: "Mui",
              icon: <SiMui />
            }
        ]
    },
    {
        title: "Stack BackEnd",
        items:[
            {
              id: "php",
              name: "PHP",
              icon: <SiPhp />
            },
            {
              id: "mysql",
              name: "MySql",
              icon: <SiMysql />
            },
            {
              id: "java",
              name: "Java",
              icon: <FaJava />
            }
        ]
    },
    {
        title: "Dev-Ops",
        items:[
            {
              id: "git",
              name: "Git",
              icon: <SiGit />
            },
            {
              id: "github",
              name: "GitHub",
              icon: <SiGithub />
            }
        ]
    }
]


  return (
    <MainContainer>
        <h1>Stack</h1>
        <StackContainer>
          {stack.map((stack) => 
              <SingleStack props={stack} key={stack.title}/>
          )}          
        </StackContainer>
    </MainContainer>
  )
}

export default Stack