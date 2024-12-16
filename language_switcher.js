// Функция для переключения языка
function switchLanguage(lang) {
    // Находим все элементы с атрибутами data-lang
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-ru], [data-lang-et]');

    // Обновляем текст элементов в зависимости от выбранного языка
    elements.forEach(element => {
        const text = element.getAttribute(`data-lang-${lang}`);
        if (text) {
            element.innerHTML = text;
        }
    });
}

// Устанавливаем обработчики событий
document.addEventListener('DOMContentLoaded', () => {
    // Устанавливаем язык по умолчанию
    switchLanguage('ru');

    // Обрабатываем переключение языка через выпадающий список
    const languageSwitcher = document.querySelector('#language-switch');
    languageSwitcher.addEventListener('change', (event) => {
        switchLanguage(event.target.value);
    });
});
