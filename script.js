const generateForm = document.querySelector(".generate_form");
const imageGallery = document.querySelector(".image_gallery");

// IMPORTANTE: Atualizar esta funcionalidade a cada 3 meses para garantir compatibilidade com a API e manter a performance
const api_key = "";
let isImageGenerating = false;

const updateImageCard = (imgDataArray) => {
  imgDataArray.forEach((imgObject, index) => {
    const imgCard = imageGallery.querySelectorAll(".img_card")[index];
    const imgElement = imgCard.querySelector("img");
    const downloadBtn = imgCard.querySelector(".download_btn");

    // Define a fonte (src) da imagem com os dados retornados pela IA (imagem gerada dinamicamente)
    const aiGeneratedImg = `data:image/png;base64,${imgObject.b64_json}`;
    imgElement.src = aiGeneratedImg;

    // Ao carregar a imagem, remove o estado de "carregando" e aplica os atributos necessários para permitir o download
    imgElement.onload = () => {
      imgCard.classList.remove("loading");
      downloadBtn.setAttribute("href", aiGeneratedImg);
      downloadBtn.setAttribute("download", `${new Date().getTime()}.jpg`);
    };
  });
};

const generateAiImages = async (userPrompt, userImgQuantity) => {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${api_key}`,
        },
        body: JSON.stringify({
          model: "gpt-image-1",
          prompt: userPrompt,
          n: parseInt(userImgQuantity),
          size: "1024x1024",
          response_format: "b64_json",
        }),
      }
    );

    if (!response.ok)
      throw Error("Falha ao gerar imagens! Por favor, tente novamente.");

    const { data } = await response.json(); // Extrai e manipula os dados relevantes retornados pela resposta da API (ex: URL da imagem gerada)

    updateImageCard([...data]);
  } catch (error) {
    alert(error.message);
  } finally {
    isImageGenerating = false;
  }
};

const handleFormSubmission = (e) => {
  e.preventDefault();
  if (isImageGenerating) return;
  isImageGenerating = true;

  // Recupera os valores inseridos pelo usuário no formulário, incluindo a descrição textual e a quantidade de imagens desejadas

  const userPrompt = e.srcElement[0].value;
  const userImgQuantity = e.srcElement[1].value;

  // Gera dinamicamente o HTML das "cards" de imagem, aplicando uma classe de carregamento para indicar progresso visual

  const imgCardMarkup = Array.from(
    { length: userImgQuantity },
    () => `
        <div class="img_card loading">
            <img src="images/loader.svg" alt="image">
            <a href="#" class="download_btn">
                <img src="images/download.svg" alt="download icon">
            </a>
        </div>
    `
  ).join("");

  imageGallery.innerHTML = imgCardMarkup;
  generateAiImages(userPrompt, userImgQuantity);
};

generateForm.addEventListener("submit", handleFormSubmission);
