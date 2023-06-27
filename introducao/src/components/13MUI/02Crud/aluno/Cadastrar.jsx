import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Cadastrar = () => {

    const [nome, setNome] = useState("") //textfield
    const [curso, setCurso] = useState("") //textfield
    const [ira, setIra] = useState("GRAD") //select
    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const aluno = { nome, curso, ira }
        axios.post("http://localhost:3001/aluno/register", aluno)
            .then((response) => {
                alert(`Aluno ID ${response.data._id} adicionado com sucesso!`)
                navigate("/listarAluno")
            })
            .catch(error => console.log(error))
        console.log(nome)
        console.log(curso)
        console.log(ira)
    }


    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Aluno
            </Typography>
            <Box
                sx={{ width: "80%" }}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"

                    id="nome"
                    name="nome"
                    onChange={(event) => setNome(event.target.value)}

                />

                {/* Aqui foi trocada a parte antiga com entrada manual e inserido 
                a entrada copiada da seleção de titulação no cadastrar dos professores */}
                <FormControl sx={{ marginTop: 2, width: "100%" }} required>
                    <InputLabel id="select-curso-label">Curso</InputLabel>
                    <Select
                        labelId="select-curso-label"
                        label="Curso"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                        // as labels foram trocadas para deixar o documento mais coerente
                    >
                        {/* Os itens foram trocados de graduado, mestre e doutor para os cursos  */}
                        <MenuItem value="DD">Design Digital</MenuItem>
                        <MenuItem value="EC">Engenharia de computação</MenuItem>
                        <MenuItem value="SI">Sistemas de informação</MenuItem>
                        <MenuItem value="ES">Engenharia de software</MenuItem>
                        <MenuItem value="CC">Ciências da computação</MenuItem>
                        <MenuItem value="RC">Redes de computadores</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    required
                    fullWidth
                    margin="normal"
                    label="IRA"
                    type="number"
                    id="ira"
                    name="ira"
                    onChange={(event) => setIra(event.target.value)}

                />


                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Cadastrar