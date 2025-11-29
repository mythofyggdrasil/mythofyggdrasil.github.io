# mythofyggdrasil.github.io

Site estático (GitHub Pages) com a wiki e guia do servidor privado Myth of Yggdrasil.

Este repositório deve ter o nome exato `mythofyggdrasil.github.io` para publicar em https://mythofyggdrasil.github.io

Arquivos:
- index.html — SPA protótipo em React rodando via Babel no navegador (solução rápida).

Como publicar (passo-a-passo local)
1. No seu computador, dentro da pasta com os arquivos locais (index.html, README.md, .gitignore):
   git init
   git add index.html README.md .gitignore
   git commit -m "Initial commit: Myth of Yggdrasil wiki"

2. Adicionar remote e enviar para o GitHub (substitua pelo seu usuário):
   git branch -M main
   git remote add origin https://github.com/mythofyggdrasil/mythofyggdrasil.github.io.git
   git push -u origin main

3. O site será publicado automaticamente em https://mythofyggdrasil.github.io (pode levar alguns minutos).
   - Se necessário, vá em Settings → Pages e confirme que a branch `main` e root (/) está selecionada.

Notas:
- Esta é uma solução rápida. Para produção eu recomendo empacotar com Vite/Build e remover os scripts de Babel/CDN do runtime.
- Se quiser, posso ajudar a converter para Vite/React+Tailwind e adicionar CI/CD para builds.
License: MIT
