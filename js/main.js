document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animatedText');
    const words = ['É Inovação', 'Exclusividade', 'Única','É Garantido','Transformador'];
    let wordIndex = 0;
    let isDeleting = false;
    let charIndex = 0;
    let delta = 200;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            charIndex--;
            textElement.textContent = currentWord.substring(0, charIndex);
            delta = 100;
        } else {
            charIndex++;
            textElement.textContent = currentWord.substring(0, charIndex);
            delta = 200;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            delta = 2000; // Wait time before starting to delete
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delta = 500; // Wait time before starting to type next word
        }

        setTimeout(type, delta);
    }

    type();
});










let currentIndex = 1;
const totalTexts = 3;

function showText(index) {
    // Ocultar todas as descrições e tarefas
    const descriptions = document.querySelectorAll('.carousel-text');
    descriptions.forEach(text => text.classList.remove('active'));

    // Mostrar a descrição e a tarefa correspondente ao índice fornecido
    document.getElementById(`description-Ti`).classList.remove('active');
    document.getElementById(`description-Dev`).classList.remove('active');
    document.getElementById(`description-Design`).classList.remove('active');
    document.getElementById(`task-Ti`).classList.remove('active');
    document.getElementById(`task-Dev`).classList.remove('active');
    document.getElementById(`task-Design`).classList.remove('active');

    if (index === 1) {
        document.getElementById(`description-Ti`).classList.add('active');
        document.getElementById(`task-Ti`).classList.add('active');
    } else if (index === 2) {
        document.getElementById(`description-Dev`).classList.add('active');
        document.getElementById(`task-Dev`).classList.add('active');
    } else if (index === 3) {
        document.getElementById(`description-Design`).classList.add('active');
        document.getElementById(`task-Design`).classList.add('active');
    }

    // Atualizar botões ativos
    const buttons = document.querySelectorAll('.carousel-buttons .btn');
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(`btn${index === 1 ? 'Ti' : index === 2 ? 'Dev' : 'Design'}`).classList.add('active');

    // Atualizar o índice atual
    currentIndex = index;
}

// Função para mudar automaticamente os textos
function autoChangeText() {
    currentIndex = (currentIndex % totalTexts) + 1; // Incrementa o índice e volta ao início se ultrapassar o total
    showText(currentIndex);
}

// Mudar o texto a cada 4 segundos
setInterval(autoChangeText, 6000);

// Mostrar o texto inicial
showText(currentIndex);




// $.ajax({
//     url: 'https://api.example.com/data',
//     method: 'GET',
//     success: function(data) {
//       console.log(data);
//     },
//     error: function(xhr, status, error) {
//       console.error('Erro:', error);
//     }
//   });



// function enviarEmail() {
//     var nome = document.getElementById('floatingEmail').value;
//     var email = document.getElementById('floatingPassword').value;
//     var mensagem = document.getElementById('floatingTextarea').value;

//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'mailto.php', true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             var response = JSON.parse(xhr.responseText);
//             if (response.success) {
//                 alert('E-mail enviado com sucesso!');
//             } else {
//                 alert('Erro ao enviar e-mail.');
//             }
//         } else {
//             alert('Erro ao enviar e-mail.');
//         }
//     };
//     xhr.send('nome=' + encodeURIComponent(nome) + '&email=' + encodeURIComponent(email) + '&mensagem=' + encodeURIComponent(mensagem));
// }