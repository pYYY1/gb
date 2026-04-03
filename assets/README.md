# Estrutura de fotos

Use uma pasta por amigo para manter os caminhos simples no GitHub Pages:

- `assets/diogo/`
- `assets/ana-laura/`
- `assets/luiza/`
- `assets/joao/`
- `assets/andrei/`
- `assets/para-todos/`

Exemplos de arquivos:

- `assets/diogo/foto-1.jpg`
- `assets/diogo/foto-2.jpg`
- `assets/ana-laura/memoria-1.png`

Depois, atualize o array `photos` em `script.js` com os caminhos relativos corretos.

Para padronizar nomes automaticamente nas pastas restantes, rode na raiz do projeto:

`powershell -ExecutionPolicy Bypass -File .\\scripts\\organizar-fotos.ps1`
