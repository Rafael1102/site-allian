window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.bottom = '0'; // Mostra o footer
    } else {
        footer.style.bottom = '-100px'; // Esconde o footer
    }
});
.description {
    font-size: clamp(1rem, 2.5vw, 1.5rem); /* Ajusta o tamanho da fonte de acordo com a largura da tela */
    margin: clamp(2rem, 4vw, 4rem) 0; /* Ajusta a margem superior e inferior */
    line-height: 1.5;
  }
const express = require('express');
const twilio = require('twilio');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do Twilio
const accountSid = 'ACc5b8542429919483f1287a86ce96473c';
const authToken = '864e3f2be1fb201a5fb5f9884d5bb5e5';
const client = twilio(accountSid, authToken);

// Middleware para lidar com dados POST
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos do diretório "public"
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para enviar mensagem via Twilio
app.post('/send-message', (req, res) => {
    const { loja, responsavel, anydeskId, problema } = req.body;

    const message = `*Chamado:*\n*Loja:* ${loja}\n*Responsável:* ${responsavel}\n*ID Anydesk:* ${anydeskId}\n*Problema:* ${problema}`;

    client.messages.create({
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5591982817656',
        body: message
    })
    .then((message) => res.send({ success: true, sid: message.sid }))
    .catch((error) => res.send({ success: false, error }));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
