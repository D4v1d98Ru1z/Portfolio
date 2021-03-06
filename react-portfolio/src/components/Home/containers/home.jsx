import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Header from '../../Header/containers/header'
import Welcome from '../../Welcome/containers/hello'
import About from '../../About/Components/about'
import AboutFirstIcon from '../../../assets/resources/2.svg'
import AboutSecondIcon from '../../../assets/resources/3.svg'
import AboutThirdIcon from '../../../assets/resources/4.svg'

class Home extends Component {
    render(){
        return(
            <HomeLayout>
                <Header
                    navbar={this.props.navbar}
                />
                <Welcome
                    main={this.props.main}
                />
                <About
                    about={this.props.about}
                />
            </HomeLayout>
        )
    }
}

Home.defaultProps = {
    navbar: [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "Resume"
        },
        {
            id: 3,
            name: "Blog"
        },
        {
            id: 4,
            name: "Proyectos"
        },
        {
            id: 5,
            name: "Contacto"
        }
    ],
    main: 
    {
        greetings: "¡Hola a todos!",
        name: "soy David Ruiz",
        ocupation: "Fullstack Developer",
    },
    about:
    {
        title: "Un poco sobre mí",
        content: [
            {
                id: 1,
                text: "Como estudiante de ingeniería de sistemas mi enfoque se vió siempre dirigido hacia el desarrollo de software. Fué así que los últimos dos años me dediqué a investigar y aprender nuevas tecnologías enfocadas a la programación.",
                src: `${AboutFirstIcon}`
            },
            {
                id: 2,
                text: "Empecé a aprender la forma en la que se desarrollaban los aplicaciones tanto web como móviles y su funcionamiento. Es decir, la lógica en la que estas funcionan. \n\n He desempeñado mi rol desarrollando proyectos propios, también ayudando a la creación de MVP en eventos de hackathones. Actualmente trabajo como Freelancer ayudando a empresas, startups y cualquier cliente a materializar sus ideas.",
                src: `${AboutSecondIcon}`
            },
            {
                id: 3,
                text: "Cómo interes secundario, estoy trabajando en transformar todos mis conocimientos en como desarrollar Inteligencia Artificial. Me gusta innovar en tecnologías y siempre buscar algo que me permita desarrollar cosas que uno imagina imposibles.",
                src: `${AboutThirdIcon}`
            }
        ]
    },
    skills: 
    {
        title: "Mis Habilidades",
        topics: [
            {
                title: "Frontend",
                src: "",
                id: 1
            },
            {
                title: "Desarrollo móvil",
                src: "",
                id: 2
            },
            {
                title: "Backend",
                src: "",
                id: 3
            }
        ]
    },
    projects: 
    {
        title: "Mis Proyectos",
        project: [
            {
                title: "CornVideo",
                src: "",
                id: 1
            },
            {
                title: "QuickMenu",
                src: "",
                id: 2
            },
            {
                title: "Dentist",
                src: "",
                id: 3
            }
        ]
    },
    recommendations:
    {
        title: "Recomendaciones",
        comments: [
            {
                id: 1,
                name: "Maria Alejandra Manosalva Estrada",
                occupation: "Od. Especialista en endodoncia",
                text: "Con David trabajamos todo muy bien, hubo buena comunicación y fue atento con los cambios. Se desempeñó muy bien como desarrollador Freelance. Espero seguir trabajando juntos."
            }
        ]
    }
}

export default Home