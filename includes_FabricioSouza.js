const cartoesValidos = ["cartao_pki_101", "cartao_pki_102", "cartao_pki_103"];
const pinsValidos = ["1234", "4321", "9999"];

const matriculasValidas = ["2026001", "2026002", "2026003"];
const senhasValidas = ["senhaSegura1", "admin123", "usuarioAcesso"];

const usuarioPossuiCartao = "cartao_pki_101";
const usuarioDigitouPin = "1234";

const usuarioDigitouMatricula = "2026999";
const usuarioDigitouSenha = "errada123";

const temCartaoValido = cartoesValidos.includes(usuarioPossuiCartao);
const temPinValido = pinsValidos.includes(usuarioDigitouPin);
const loginPorCartaoSucesso = temCartaoValido && temPinValido;

const temMatriculaValida = matriculasValidas.includes(usuarioDigitouMatricula);
const temSenhaValida = senhasValidas.includes(usuarioDigitouSenha);
const loginPorMatriculaSucesso = temMatriculaValida && temSenhaValida;

const acessoFinalLiberado = loginPorCartaoSucesso || loginPorMatriculaSucesso;

if (acessoFinalLiberado) {
    console.log("Acesso Concedido ao Sistema.");
} else {
    console.log("Acesso Negado.");
}
