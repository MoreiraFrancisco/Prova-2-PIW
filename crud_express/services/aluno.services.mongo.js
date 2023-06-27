const AlunoModel = require("../models/alunos.models.mongo")

class AlunoService {
    static list(request, response) {
        AlunoModel.find()
          .sort({ ira: -1 })  // Ordena em ordem decrescente com base no campo IRA
          .then((alunos) => {
            response.status(200).json(alunos);
          })
          .catch((error) => {
            response.status(500).json({ error: error.message });
          });
      }

    static register(request,response) {
        AlunoModel.create(request.body)
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
    }

    static retrieve(request,response) {
        AlunoModel.findById(request.params.id)
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
    }

    static update(request,response) {
        AlunoModel.findByIdAndUpdate(
                    request.params.id,
                    request.body,
                    {new:true})
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
    }

    static delete(request,response) {
        AlunoModel.findByIdAndRemove(request.params.id)
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
    }
}
module.exports = AlunoService