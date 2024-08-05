async function roast() {
    const username = document.getElementById('username').value;
    const apiKey = 'const mySecret = process.env['Geni']';

    try {
        const response = await fetch('http://localhost:3000/roast', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        });
        const data = await response.json();
        document.getElementById('result').textContent = data.roast;
    } catch (error) {
        console.error(error);
        document.getElementById('result').textContent = 'Terjadi kesalahan. Silakan coba lagi.';
    }
}
