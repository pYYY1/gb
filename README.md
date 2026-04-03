# gb

Site de despedida estático para GitHub Pages.

Estrutura de fotos:
- `assets/diogo/`
- `assets/ana-laura/`
- `assets/luiza/`
- `assets/joao/`
- `assets/andrei/`
- `assets/para-todos/`

Edite `script.js` para trocar senhas, mensagens e caminhos das fotos quando quiser.

## Padronizar nomes automaticamente

Quando adicionar fotos em `assets/ana-laura/`, `assets/luiza/`, `assets/joao/`, `assets/andrei/` e `assets/para-todos/`, rode:

`powershell -ExecutionPolicy Bypass -File .\scripts\organizar-fotos.ps1`

O script renomeia para `foto-1`, `foto-2`, ... (mantendo a extensao).
