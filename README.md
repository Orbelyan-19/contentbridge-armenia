# Content Bridge Armenia

🌐 **Платформа для заказа видео-контента у креаторов в Армении**

Современная веб-платформа, соединяющая бренды с проверенными контент-креаторами для создания аутентичных видео-обзоров, распаковок и презентаций продуктов.

## 🚀 Быстрый старт

### Локальная разработка
```bash
# Клонировать репозиторий
git clone https://github.com/yourusername/contentbridge-armenia.git
cd contentbridge-armenia

# Установить зависимости (опционально)
npm install

# Запустить локальный сервер
npm start
# или
npm run dev
```

### Автоматический деплой
```bash
# Использовать скрипт деплоя
./deploy.sh

# Или вручную
npm run deploy
```

## 📁 Структура проекта

```
contentbridge-armenia/
├── index.html              # Главная страница
├── admin.html              # Админ панель
├── login.html              # Страница входа
├── register.html           # Регистрация
├── client-dashboard.html   # Личный кабинет клиента
├── create-order.html       # Создание заказа
├── order-success.html      # Подтверждение заказа
├── creator-register.html   # Регистрация креатора
├── creator-profile.html    # Профиль креатора
├── creators-catalog.html   # Каталог креаторов
├── about.html              # О нас
├── thanks.html             # Страница благодарности
├── .github/workflows/      # GitHub Actions
├── package.json            # Конфигурация проекта
├── deploy.sh              # Скрипт деплоя
└── README.md              # Документация
```

## 🌟 Основные функции

### Для клиентов
- 📝 Создание заказов на видео-контент
- 👥 Выбор креаторов из каталога
- 💳 Управление заказами и оплатой
- 📊 Личный кабинет с статистикой

### Для креаторов
- 👤 Регистрация и создание профиля
- 📁 Загрузка портфолио
- 💰 Установка цен и специализации
- 📈 Управление заказами

### Для администраторов
- 🔧 Полная админ панель
- 📊 Аналитика и отчеты
- 👥 Управление пользователями
- 💰 Финансовый контроль

## 🛠 Технологии

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Стилизация**: CSS Grid, Flexbox, CSS Variables
- **Формы**: Formspree для обработки
- **Деплой**: GitHub Pages + GitHub Actions
- **Валидация**: Клиентская валидация форм

## 🚀 Деплой

### GitHub Pages (Автоматический)
1. Настройте GitHub Pages в настройках репозитория
2. Выберите ветку `gh-pages` как источник
3. При каждом push в `main` ветку сайт автоматически обновляется

### Ручной деплой
```bash
# Добавить изменения
git add .
git commit -m "Update website"

# Отправить на GitHub
git push origin main

# Или использовать скрипт
./deploy.sh
```

## 📱 Адаптивность

Сайт полностью адаптивен и оптимизирован для:
- 📱 Мобильные устройства
- 💻 Планшеты
- 🖥️ Десктопы

## 🔧 Настройка

### Переменные окружения
Создайте файл `.env` для настройки:
```env
FORMSPREE_ENDPOINT=your_formspree_endpoint
TELEGRAM_WEBHOOK=your_telegram_webhook_url
```

### Настройка GitHub Pages
1. Перейдите в Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Save

## 📊 Мониторинг

- ✅ Автоматические проверки при деплое
- 📧 Уведомления о статусе деплоя
- 🔍 Валидация HTML/CSS
- 📱 Тестирование адаптивности

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 📞 Контакты

- 🌐 Сайт: [https://yourusername.github.io/contentbridge-armenia](https://yourusername.github.io/contentbridge-armenia)
- 📧 Email: info@contentbridge.am
- 📱 Telegram: @contentbridge_armenia

---

**Content Bridge Armenia** - Соединяем бренды с креаторами! 🚀
