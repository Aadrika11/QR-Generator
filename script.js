document.addEventListener('DOMContentLoaded', function () {
  const generateBtn = document.getElementById('generateBtn');
  const qrContainer = document.getElementById('qrcode');

  generateBtn.addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    qrContainer.innerHTML = ''; // clear old QR

    if (text.trim() !== '') {
      new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200
      });
    } else {
      alert('Please enter some text to generate a QR code!');
    }
  });
});