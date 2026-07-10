// ==========================
// ANO AUTOMÁTICO NO FOOTER
// ==========================

const footer = document.querySelector("footer");

footer.innerHTML =
`© ${new Date().getFullYear()} Todos os direitos reservados.®</strong>`;


// ==========================
// EFEITO RIPPLE NOS BOTÕES
// ==========================

const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => {

    botao.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});