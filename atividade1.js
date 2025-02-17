let funcionarios = []; // Matriz bidimensional para armazenar os funcionários

// Função para cadastrar um novo funcionário
function cadastrar() {
    let id = document.getElementById("id").value;
    let colaborador = document.getElementById("colaborador").value;
    let dataNascimento = document.getElementById("dataNascimento").value;
    let cargo = document.getElementById("cargo").value;

    if (id && colaborador && dataNascimento && cargo) {
        funcionarios.push({ ID: id, Nome: colaborador, "Data de Nascimento": dataNascimento, Cargo: cargo });
        alert("Funcionário cadastrado com sucesso!");
        limparCampos();
        atualizarLista();
    } else {
        alert("Preencha todos os campos!");
    }
}

// Função para consultar um funcionário pelo ID
function consultar() {
    let id = document.getElementById("id").value;
    let encontrado = funcionarios.find(funcionario => funcionario.ID === id);

    if (encontrado) {
        alert(`ID: ${encontrado.ID}\nColaborador: ${encontrado.Nome}\nData de Nascimento: ${encontrado["Data de Nascimento"]}\nCargo: ${encontrado.Cargo}`);
    } else {
        alert("Funcionário não encontrado!");
    }
}

// Função para excluir um funcionário pelo ID
function excluir() {
    let id = document.getElementById("id").value;
    let index = funcionarios.findIndex(funcionario => funcionario.ID === id);

    if (index !== -1) {
        funcionarios.splice(index, 1);
        alert("Funcionário excluído com sucesso!");
        limparCampos();
        atualizarLista();
    } else {
        alert("Funcionário não encontrado!");
    }
}

// Função para alterar os dados de um funcionário
function alterar() {
    let id = document.getElementById("id").value;
    let index = funcionarios.findIndex(funcionario => funcionario.ID === id);

    if (index !== -1) {
        let colaborador = document.getElementById("colaborador").value;
        let dataNascimento = document.getElementById("dataNascimento").value;
        let cargo = document.getElementById("cargo").value;

        funcionarios[index] = { ID: id, Nome: colaborador, "Data de Nascimento": dataNascimento, Cargo: cargo };
        alert("Dados do funcionário alterados com sucesso!");
        limparCampos();
        atualizarLista();
    } else {
        alert("Funcionário não encontrado!");
    }
}

// Atualiza a lista exibida na tela
function atualizarLista() {
    let lista = document.getElementById("listaFuncionarios");
    lista.innerHTML = "";

    funcionarios.forEach(funcionario => {
        let item = document.createElement("li");
        item.textContent = `ID: ${funcionario.ID} | Nome: ${funcionario.Nome} | Data de Nascimento: ${funcionario["Data de Nascimento"]} | Cargo: ${funcionario.Cargo}`;
        lista.appendChild(item);
    });
}

// Função para exibir a matriz de funcionários no console em formato de tabela
function consultarMatriz() {
    console.table(funcionarios);
}

// Função para limpar os campos após uma ação
function limparCampos() {
    document.getElementById("id").value = "";
    document.getElementById("colaborador").value = "";
    document.getElementById("dataNascimento").value = "";
    document.getElementById("cargo").value = "";
}
