<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white"/>
</p>

<h1 align="center">🖼️ Gerador de Imagens com IA</h1>

<p align="center">
  Um gerador de imagens via API da <b>OpenAI</b>, desenvolvido em <b>HTML, CSS e JavaScript</b>.<br/>
  Focado em <b>arquitetura de código organizada</b>, <b>integração de API</b> e <b>responsividade</b>.<br/>
  🚀 Permite que o usuário insira prompts de texto e gere imagens dinamicamente.
</p>

---

## ✨ Funcionalidades

- 🔑 Integração com a **API da OpenAI** para geração de imagens  
- ⚡ Consumo de API com tratamento de erros e feedback ao usuário  
- 🎨 Interface responsiva e amigável  
- 🧩 Estrutura modular do código, facilitando manutenção  
- 🛠 Fácil de clonar e rodar localmente com sua própria chave de API  

---

## ⚠️ Observação importante

A **chave de API usada na live demo pode expirar** ⏳.  
Para rodar localmente com sua própria chave:
1. Crie uma conta no [OpenAI]. 
2. Gere uma chave de API.  
3. Substitua a chave no código ou use um arquivo `.env`.  

Agora você terá seu próprio gerador de imagens IA funcionando! 🔥

---

## 🛠 Tech Stack

- **HTML5** → estrutura do projeto  
- **CSS3** → estilização e responsividade  
- **JavaScript (Vanilla)** → integração com API e lógica do app  
- **OpenAI API** → geração de imagens  

---

## 📦 Funcionalidades
- ✅ **Geração dinâmica de “cards” de imagem** no DOM, com **classe de carregamento** para indicar progresso visual  
- ✅ **Consumo da API da OpenAI** com `fetch/async-await`, **tratamento de erros** e mensagens amigáveis  
- ✅ **Atualização em tempo real** do grid ao concluir a geração  
- ✅ **Layout responsivo** (grid adaptativo) para diferentes tamanhos de tela  
- ✅ **Separação de responsabilidades** (arquitetura simples por módulos/arquivos) para facilitar manutenção  
- ✅ **Configuração de chave de API** via variável (arquivo de config ou `.env` no build)  
- ✅ **Validação de input** (ex.: bloqueia prompt vazio e exibe feedback)
