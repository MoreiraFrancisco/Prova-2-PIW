const LoginModel = require("../models/login.models.mongo");

class LoginService {
  async autenticarUsuario(nome, senha) {
    try {
      // Verificar se o usuário existe no banco de dados
      const usuario = await LoginModel.findOne({ nome });

      if (!usuario) {
        throw new Error("Usuário não encontrado");
      }

      // Verificar se a senha está correta
      if (usuario.senha !== senha) {
        throw new Error("Senha incorreta");
      }

      // Autenticação bem-sucedida
      return {
        sucesso: true,
        mensagem: "Autenticação bem-sucedida",
      };
    } catch (error) {
      return {
        sucesso: false,
        mensagem: error.message,
      };
    }
  }
}

module.exports = LoginService;
