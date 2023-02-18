function ProjectForm() {
    return (<div>
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do Projeto"></input>
            </div>
            <div>
                <input type="number" placeholder="Insira o Orçamento total" />
            </div>
            <div>
                <select name="category_id">
                    <option value=''>Selecione a cate</option>
                </select>

            </div>
            <div>
                <input type="submit" value='Cadastra Projeto'></input>
            </div>
        </form>


    </div>
    )

}
export default ProjectForm