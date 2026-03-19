// footer.js
const footerHTML = `
    <footer style="margin-top: 60px; padding: 20px; border-top: 1px solid #ccc; color: #666; font-family: sans-serif;">
        <p>&copy; 2026 MAZZ. Todos os direitos reservados</p>
        <p>Desenvolvido por: <a href="https://razgo.com.br/" target="_blank" style="color: #007bff; text-decoration: none;">RAZGO</a></p>
        <div style="margin-top: 10px;">
            <a href="index.html" style="margin: 0 10px; color: #666;">Início</a> | 
            <a href="contato.html" style="margin: 0 10px; color: #666;">Contato</a>
        </div>
    </footer>
`;

document.addEventListener("DOMContentLoaded", function() {
    if (!document.querySelector('footer')) {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});