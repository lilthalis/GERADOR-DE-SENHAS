function gerarSenha() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
  let senha = '';
  const tamanho = 12;

  for (let i = 0; i < tamanho; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[index];
  }

  document.getElementById('senha').value = senha;
  document.getElementById('senha').type = "password";
  document.getElementById('msg-copiado').innerText = '';
}

function copiarSenha() {
  const senhaInput = document.getElementById('senha');
  senhaInput.select();
  document.execCommand('copy');
  document.getElementById('msg-copiado').innerText = 'Senha copiada!';
}

function toggleSenha() {
  const senhaInput = document.getElementById('senha');
  const mostrarBtn = document.getElementById('mostrar');

  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    mostrarBtn.innerText = "🙈";
  } else {
    senhaInput.type = "password";
    mostrarBtn.innerText = "👁";
  }
}
