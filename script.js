
        function unlock() {
            const code = document.getElementById('passcode').value;
            if(code === "1777") {
                document.getElementById('lock-screen').style.display = 'none';
                document.getElementById('content').style.display = 'block';
                document.body.style.backgroundColor = "#f8bbd0";
            } else {
                alert("Código incorrecto. Piensa en el tiempo y el espacio...");
            }
        }
    function reproducir(nombre, archivo) {
        // 1. Buscamos el reproductor por su ID
        const audio = document.getElementById('miAudio');
        const titulo = document.getElementById('titulo-sonando');

        // 2. Verificamos si se enviaron ambos datos
        // Si 'archivo' no existe, usamos el primer dato como archivo
        let fuenteAudio = archivo ? archivo : nombre;
        let nombreDisplay = archivo ? nombre : "Canción seleccionada";

        // 3. Asignamos la fuente y el texto
        audio.src = fuenteAudio;
        titulo.innerText = "Sonando: " + nombreDisplay;

        // 4. Reproducimos y manejamos posibles errores
        audio.play().catch(error => {
            console.error("Error al reproducir:", error);
            alert("Haz clic en la página primero para permitir el sonido.");
        });
    }


function unlock() {
    const code = document.getElementById('passcode').value;
    if(code === "1777") {
        // ... (tu código de desbloqueo de antes) ...

        // ENVÍO DE NOTIFICACIÓN SILENCIOSA
        fetch("https://formspree.io/f/TU_ID_AQUÍ", {
            method: "POST",
            body: JSON.stringify({ mensaje: "¡Fanny acaba de entrar a la página!" }),
            headers: { 'Content-Type': 'application/json' }
        });

        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }
}