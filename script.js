
function predict() {
  const sku = document.getElementById('sku').value;
  const price = parseInt(document.getElementById('price').value);
  if (!sku || isNaN(price)) {
    document.getElementById('result').innerText = 'SKU와 국내가를 입력해주세요.';
    return;
  }

  // 테스트용 예측값 (고정값 사용)
  const ebayAvg = 135000;
  const fee = ebayAvg * 0.12;
  const shipping = 18000;
  const netProfit = ebayAvg - fee - shipping - price;

  let status = '✔ 추천';
  if (netProfit < 10000) status = '⚠ 테스트';
  if (netProfit < 0) status = '❌ 제외';

  document.getElementById('result').innerHTML =
    `<p>예상 해외가: ₩${ebayAvg}</p>
     <p>수수료: ₩${Math.round(fee)}</p>
     <p>배송비: ₩${shipping}</p>
     <p><strong>예상 순이익: ₩${netProfit}</strong></p>
     <p>판단: ${status}</p>`;
}
