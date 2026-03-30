const usuario = []

function registrar(email, senha){
    console.log(`Olá você se registrou com o email ${email}`)
    const usuario = {
        email: email,
        senha: senha
    }
    usuarios.push(usuario)
    }