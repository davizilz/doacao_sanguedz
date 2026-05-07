let doadores= [];
    
    
    document.getElementById("FormularioDoação").addEventListener("submit", function (e) {
        
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let idade = parseInt(document.getElementById("idade").value);
        let peso = parseFloat(document.getElementById("peso").value);
        let sangue = document.getElementById("sangue").value;
        let telefone = document.getElementById("telefone").value;
        let cidade = document.getElementById("cidade").value;
        let estado = document.getElementById("estado").value;
        
        if (nome.trim().split(" ").length < 2) {
            return alert("Digite nome e sobrenome");
        }
        
        if (nome.length < 3) return alert("Nome inválido");
        if (!email.includes("@")) return alert("Email inválido");
        if (isNaN(idade) || idade < 16) return alert("Obrigatório ter 16 anos ou mais");
        if (isNaN(peso) || peso < 49) return alert("Peso inválido, seu peso deve ser maior que 49 kilos");
        if (telefone.length < 8 || isNaN(telefone)) return alert("Telefone inválido");
        if (isNaN(idade) || idade < 0) return alert("Idade inválida");
        if (sangue === "") return alert("Selecione o seu tipo sanguíneo");
        
        if (cidade === "" || estado === "") {
            alert("Preencha todos os campos");
            return;
        }
        
        let doador = {
            nome:nome,
            email:email,
            idade:idade,
            peso:peso,
            sangue:sangue,
            telefone:telefone,
            cidade:cidade,
            estado:estado, 
        };

        doadores.push(doador);
        console.log(doadores);
    });