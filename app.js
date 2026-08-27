console.log("Olá! O robô de CI acordou.");
console.log("Iniciando as verificações básicas...");

const fs = require('fs');

if (fs.existsSync('./app.js')) {
    console.log("Verificação 1: O arquivo app.js existe. OK!");
} else {
    console.error("Erro: Arquivo não encontrado.");
    process.exit(1);
}

console.log("Todas as verificações passaram. Sucesso!");
