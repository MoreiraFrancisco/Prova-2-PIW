

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import MyMenu from "./MyMenuV1"

import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"

import ListarAluno from "./aluno/Listar"
import ListarAcima from "./aluno/ListarAcima"

import CadastrarAluno from "./aluno/Cadastrar"

import EditarAluno from "./aluno/Editar"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:5,display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Routes>
                    {/* Essa seria a rota para o login */}
                    {/* <Route path="login" element={<Login/>}/> */}
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor/>}/>
                    <Route path="listarProfessor" element={<ListarProfessor/>}/>
                    <Route path="editarProfessor/:id" element={<EditarProfessor/>}/>
                    <Route path="/listarAluno" element={<ListarAluno/>}/>
                    <Route path="/cadastrarAluno" element={<CadastrarAluno/>}/>
                    <Route path="editarAluno/:id" element={<EditarAluno/>}/>
                    {/* Adicionar a rota do link para os alunos acima da média da turma após clicar no botão */}
                    <Route path="/listarAlunoAcima" element={<ListarAcima/>}/>

                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage