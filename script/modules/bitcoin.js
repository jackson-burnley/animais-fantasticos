export default function bitcoin() {
  async function buscarBitcoin() {
    const bitcoin = await fetch("https://www.blockchain.com/ticker");
    const bitcoinAwait = await bitcoin.json();
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (1000 / bitcoinAwait.BRL.sell).toFixed(4);
  }
  buscarBitcoin();
}
