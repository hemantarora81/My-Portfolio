import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import Weather from '../../Assets/Weather.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Weather}
                isBlog={false}
                title="Weather Application"
                description="Weather Application that build will allow a user to see the weather condition of their city.In this web application user can see in both F and C.Also User can the see the Next 7 days weather with the chances of Rain ,Sunset,Sunrise."
                ghLink="https://eager-hamilton-724cee.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done.Also User can make customised Name To Do List with just /yourname in the URL."
                ghLink="https://todo-list-dgk0.onrender.com/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist