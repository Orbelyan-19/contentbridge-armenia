// Content Bridge Armenia - Language Switcher
// Система переключения языков и локализации

class LanguageSwitcher {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || 'ru';
        this.translations = window.translations || {};
        this.armenianNames = window.armenianNames || [];
        this.priceRanges = window.priceRanges || {};
        this.exchangeRate = window.exchangeRate || 400;
        
        this.init();
    }

    init() {
        this.createLanguageSwitcher();
        this.translatePage();
        this.setupEventListeners();
        this.updateCurrencyDisplay();
    }

    // Получить сохраненный язык из localStorage
    getStoredLanguage() {
        return localStorage.getItem('preferredLanguage') || 'ru';
    }

    // Сохранить выбранный язык
    setStoredLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
        this.currentLanguage = lang;
    }

    // Создать переключатель языков
    createLanguageSwitcher() {
        const existingSwitcher = document.querySelector('.language-switcher');
        if (existingSwitcher) {
            existingSwitcher.remove();
        }

        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <div class="language-switcher-container">
                <button class="language-btn ${this.currentLanguage === 'ru' ? 'active' : ''}" data-lang="ru">
                    🇷🇺 RU
                </button>
                <button class="language-btn ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">
                    🇺🇸 EN
                </button>
                <button class="language-btn ${this.currentLanguage === 'hy' ? 'active' : ''}" data-lang="hy">
                    🇦🇲 HY
                </button>
            </div>
        `;

        // Добавить стили
        const style = document.createElement('style');
        style.textContent = `
            .language-switcher {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-radius: 12px;
                padding: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .language-switcher-container {
                display: flex;
                gap: 4px;
            }
            
            .language-btn {
                padding: 8px 12px;
                border: none;
                border-radius: 8px;
                background: transparent;
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                transition: all 0.3s ease;
                color: #666;
            }
            
            .language-btn:hover {
                background: rgba(139, 92, 246, 0.1);
                color: #8b5cf6;
            }
            
            .language-btn.active {
                background: #8b5cf6;
                color: white;
            }
            
            .currency-switcher {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                margin-left: 16px;
            }
            
            .currency-btn {
                padding: 4px 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                background: white;
                cursor: pointer;
                font-size: 12px;
                transition: all 0.3s ease;
            }
            
            .currency-btn.active {
                background: #8b5cf6;
                color: white;
                border-color: #8b5cf6;
            }
            
            .price-display {
                display: flex;
                gap: 8px;
                align-items: center;
                font-size: 14px;
            }
            
            .price-usd {
                color: #059669;
                font-weight: 600;
            }
            
            .price-amd {
                color: #dc2626;
                font-weight: 600;
            }
        `;
        document.head.appendChild(style);

        // Добавить в body
        document.body.appendChild(switcher);
    }

    // Настроить обработчики событий
    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('language-btn')) {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            }
        });

        // Обработчик для переключения валют
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('currency-btn')) {
                const currency = e.target.dataset.currency;
                this.switchCurrency(currency);
            }
        });
    }

    // Переключить язык
    switchLanguage(lang) {
        this.setStoredLanguage(lang);
        this.translatePage();
        this.updateLanguageButtons();
        this.updateCurrencyDisplay();
        
        // Обновить направление текста для армянского языка
        if (lang === 'hy') {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.style.fontFamily = 'Arial, sans-serif';
        } else {
            document.documentElement.removeAttribute('dir');
            document.body.style.fontFamily = '';
        }
    }

    // Обновить кнопки языков
    updateLanguageButtons() {
        const buttons = document.querySelectorAll('.language-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === this.currentLanguage) {
                btn.classList.add('active');
            }
        });
    }

    // Перевести страницу
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Обновить заголовок страницы
        this.updatePageTitle();
    }

    // Получить перевод
    getTranslation(key) {
        return this.translations[this.currentLanguage]?.[key] || key;
    }

    // Обновить заголовок страницы
    updatePageTitle() {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const currentTitle = titleElement.getAttribute('data-original-title') || titleElement.textContent;
            titleElement.setAttribute('data-original-title', currentTitle);
            
            const translatedTitle = this.getTranslation('hero-title') || 'Content Bridge Armenia';
            titleElement.textContent = translatedTitle;
        }
    }

    // Обновить отображение валют
    updateCurrencyDisplay() {
        const priceElements = document.querySelectorAll('[data-price]');
        priceElements.forEach(element => {
            const usdPrice = parseFloat(element.dataset.price);
            const amdPrice = Math.round(usdPrice * this.exchangeRate);
            
            element.innerHTML = `
                <span class="price-usd">$${usdPrice}</span>
                <span class="price-amd">${amdPrice.toLocaleString()} AMD</span>
            `;
        });
    }

    // Переключить валюту
    switchCurrency(currency) {
        const buttons = document.querySelectorAll('.currency-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.currency === currency) {
                btn.classList.add('active');
            }
        });

        // Обновить отображение цен
        this.updatePriceDisplay(currency);
    }

    // Обновить отображение цен
    updatePriceDisplay(currency) {
        const priceElements = document.querySelectorAll('[data-price]');
        priceElements.forEach(element => {
            const usdPrice = parseFloat(element.dataset.price);
            const amdPrice = Math.round(usdPrice * this.exchangeRate);
            
            if (currency === 'usd') {
                element.innerHTML = `<span class="price-usd">$${usdPrice}</span>`;
            } else if (currency === 'amd') {
                element.innerHTML = `<span class="price-amd">${amdPrice.toLocaleString()} AMD</span>`;
            } else {
                element.innerHTML = `
                    <span class="price-usd">$${usdPrice}</span>
                    <span class="price-amd">${amdPrice.toLocaleString()} AMD</span>
                `;
            }
        });
    }

    // Генерировать армянские имена
    generateArmenianName() {
        return this.armenianNames[Math.floor(Math.random() * this.armenianNames.length)];
    }

    // Форматировать цену
    formatPrice(amount, currency = 'usd') {
        if (currency === 'usd') {
            return `$${amount.toLocaleString()}`;
        } else if (currency === 'amd') {
            return `${amount.toLocaleString()} AMD`;
        }
        return amount.toLocaleString();
    }

    // Конвертировать валюту
    convertCurrency(amount, fromCurrency, toCurrency) {
        if (fromCurrency === 'usd' && toCurrency === 'amd') {
            return Math.round(amount * this.exchangeRate);
        } else if (fromCurrency === 'amd' && toCurrency === 'usd') {
            return Math.round(amount / this.exchangeRate);
        }
        return amount;
    }

    // Получить текущий язык
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Получить доступные языки
    getAvailableLanguages() {
        return Object.keys(this.translations);
    }

    // Проверить поддержку языка
    isLanguageSupported(lang) {
        return this.translations.hasOwnProperty(lang);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Загрузить переводы
    if (typeof translations !== 'undefined') {
        window.translations = translations;
    }
    
    // Загрузить армянские имена
    if (typeof armenianNames !== 'undefined') {
        window.armenianNames = armenianNames;
    }
    
    // Загрузить диапазоны цен
    if (typeof priceRanges !== 'undefined') {
        window.priceRanges = priceRanges;
    }
    
    // Загрузить курс обмена
    if (typeof exchangeRate !== 'undefined') {
        window.exchangeRate = exchangeRate;
    }
    
    // Создать экземпляр переключателя языков
    window.languageSwitcher = new LanguageSwitcher();
});

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageSwitcher;
}
