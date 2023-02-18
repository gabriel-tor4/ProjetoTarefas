import styles from "./NewProject.module.css"
import ProjectForm from "../projects/ProjectForm.js"
function NewProject(){
    return(<div className ={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu Projeto para depois adicionar os serviços</p>
        <p>Formulário</p>
        <ProjectForm/>
       
    </div>)
}
export default NewProject