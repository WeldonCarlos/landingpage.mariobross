const botaoTrailer = document.querySelector(".botao__trailer"); 

const modal = document.querySelector(".modal")

const fecharModal = document.querySelector(".fechar__modal")

const video = document.getElementById("video")
const linkVideo = video.src;

alterarModal = () =>{
    modal.classList.toggle("aberto")
} 

botaoTrailer.addEventListener("click",() =>{
  alterarModal();
  video.setAttribute("src", linkVideo)

});

fecharModal.addEventListener("click",()=>{
    alterarModal();
    video.setAttribute("src","")
})