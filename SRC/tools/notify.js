export function notify(text) {
    let alertBox = document.getElementById('alert');
    alertBox.style.display = 'block';
    document.getElementById('text').textContent = text;
    setTimeout(() => alertBox.style.display = 'none', 3000);
}