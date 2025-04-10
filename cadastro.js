document.getElementById("formCadastro").addEventListener("submit", async function (event) {
    event.preventDefault(); // evita o envio padrão

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    const data = {
        name,
        email,
        birthdate,
        password
    };

    try {
        const response = await fetch("https://sua-api.com/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            alert("Cadastro realizado com sucesso!");
            console.log(result);
            
            // redirecionar ou limpar form se quiser
        } else {
            alert("Erro ao cadastrar. Verifique os dados.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro ao conectar com o servidor.");
    }
});