import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, TableContainer, Table, Paper, TableHead, TableBody, TableRow, TableCell, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom";

const Listar = () => {
    const [alunos, setAlunos] = useState([]);
    let contador = 1;

    useEffect(() => {
        axios.get("http://localhost:3001/aluno/listar")
            .then((response) => {
                setAlunos(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    function deleteAlunoById(id) {
        if (window.confirm("Deseja Excluir ? " + id)) {
            axios.delete(`http://localhost:3001/aluno/delete/${id}`)
                .then((response) => {
                    const resultado = alunos.filter(alun => alun._id !== id);
                    setAlunos(resultado);
                })
                .catch(error => console.log(error));
        }
    }

    // Coletar todos os IRAs do banco de dados 
    const iraTotal = alunos.reduce((total, aluno) => total + aluno.ira, 0);
    // Calcular a média dos IRAs
    const mediaIRA = iraTotal / alunos.length;

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Aluno
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 4, mb: 4 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {alunos.map((aluno) => (
                            <StyledTableRow key={aluno._id}>
                                <StyledTableCell>{contador++}</StyledTableCell>
                                {/* Coleta a média dos IRAs, compara com o IRA do aluno, e retorna seu nome em vermelho 
                                caso alu.ira < media = verdadeiro, a cor é vermelha, caso falso, continua preto */}
                                <StyledTableCell style={{ color: aluno.ira < mediaIRA ? "red" : "inherit" }}>{aluno.nome}</StyledTableCell>
                                <StyledTableCell>{aluno.curso}</StyledTableCell>
                                <StyledTableCell>{aluno.ira}</StyledTableCell>
                                <StyledTableCell>
                                    <Box>
                                        <IconButton aria-label="edit" color="primary" component={Link} to={`/editarAluno/${aluno._id}`}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" color="error" onClick={() => deleteAlunoById(aluno._id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        {/* Exibir a média dos IRAS em baixo das entradas dos alunos */}
                        <StyledTableRow>
                            <StyledTableCell />
                            <StyledTableCell />
                            <StyledTableCell />
                            <StyledTableCell>
                                Média de IRAs:
                            </StyledTableCell>
                            <StyledTableCell>
                                {mediaIRA.toFixed(2)}
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default Listar;
