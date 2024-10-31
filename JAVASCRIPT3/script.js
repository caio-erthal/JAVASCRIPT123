const avatar = document.querySelector("#avatar");

const gingar = (seletor) => {
    const avatar = document.querySelector(seletor);
    avatar.src = "img/ryu-ginga.gif";
};

const parar = (seletor) => {
    const avatar = document.querySelector(seletor);
    avatar.src = "img/ryu.png";
};

const raduqui = (seletor) => {
    const avatar = document.querySelector(seletor);
    avatar.src = "img/ryu-magia.png";
    
    const bolaDeFogo = document.createElement("img");
    bolaDeFogo.src = "img/bola-fogo.gif";
    bolaDeFogo.id = "bolaDeFogo";
    document.querySelector("#jogo").appendChild(bolaDeFogo);

    const somRaduqui = document.createElement("audio");
    somRaduqui.src = "img/hadouken.mp3";
    somRaduqui.autoplay = true;
    document.body.appendChild(somRaduqui);

    setTimeout(() => {
        bolaDeFogo.remove();
        somRaduqui.remove();
    }, 1000); // Remove após 1 segundo
};

const voadora = (seletor) => {
    const avatar = document.querySelector(seletor);
    avatar.src = "img/ryu-voadora.gif";

    setTimeout(() => {
        parar(seletor); // Retorna à posição original após 1 segundo
    }, 1000);
};

avatar.addEventListener("mouseover", () => gingar("#avatar"));
avatar.addEventListener("mouseout", () => parar("#avatar"));
avatar.addEventListener("keypress", (event) => {
    if (event.key === "v") voadora("#avatar"); // Executa voadora ao pressionar "v"
});
avatar.addEventListener("dblclick", () => raduqui("#avatar"));
