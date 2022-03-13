//el é o elemento a ser selecionado
//data são os dados que serão renderizados pelo vue (eu acho!)
//methods é onde eu vou colocar a função.

let app6 = new Vue({
  el: "#app-qrcode",
  data: {
    title: "Gerador de QRCode",
    insert: "",
  },
  methods: {
    //generator é o nome da função, essa função será responsável por pegar as informações
    //do input pra poder gerar o QR.
    generator() {
      let inputUser = encodeURIComponent(
        document.querySelector("#input").value
      );
      let myApi = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=";
      let myQrCode = myApi + inputUser;
      return (document.querySelector("#qr-image").src = myQrCode);
    },
  },
});
