document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        const nameValue = document.getElementById('name').value;
        const emailValue = document.getElementById('email')?.value;
        const messageValue = document.getElementById('message')?.value;

        const formData = {
            name: nameValue,
            email: emailValue,
            message: messageValue,
        }

        console.log('Dados coletados:', formData);

        const response = await fetch('https://www.exemplo.com/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(formData),
        })
    })
})