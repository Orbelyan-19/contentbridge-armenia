// Content Bridge Armenia - Translations
// Система переводов для трех языков

const translations = {
    ru: {
        // Навигация
        'nav-home': 'Главная',
        'nav-about': 'О нас',
        'nav-creators': 'Креаторы',
        'nav-contact': 'Контакты',
        'nav-login': 'Войти',
        'nav-register': 'Регистрация',
        'nav-dashboard': 'Личный кабинет',
        'nav-admin': 'Админ панель',
        'nav-logout': 'Выйти',

        // Главная страница
        'hero-title': 'Content Bridge Armenia',
        'hero-subtitle': 'Платформа для заказа видео-контента у креаторов',
        'hero-description': 'Заказывайте аутентичные видео-обзоры, распаковки и презентации продуктов у проверенных контент-креаторов. Безопасно, быстро, эффективно.',
        'hero-cta-primary': 'Заказать видео',
        'hero-cta-secondary': 'Посмотреть креаторов',
        'hero-become-creator': '👤 Стать креатором',
        'hero-login': '🔐 Войти',

        // Секции
        'section-services': 'Наши услуги',
        'section-creators': 'Популярные креаторы',
        'section-process': 'Как это работает',
        'section-stats': 'Наша статистика',
        'section-testimonials': 'Отзывы клиентов',
        'section-contact': 'Связаться с нами',

        // Услуги
        'service-video-reviews': 'Видео-обзоры',
        'service-unboxing': 'Распаковки',
        'service-presentations': 'Презентации',
        'service-live-streams': 'Прямые эфиры',
        'service-shorts': 'Короткие видео',
        'service-ads': 'Рекламные ролики',

        // Процесс работы
        'process-step1': 'Выберите креатора',
        'process-step2': 'Опишите проект',
        'process-step3': 'Получите результат',
        'process-step1-desc': 'Просмотрите портфолио и выберите подходящего креатора',
        'process-step2-desc': 'Детально опишите ваши требования и бюджет',
        'process-step3-desc': 'Получите готовый контент в оговоренные сроки',

        // Статистика
        'stats-creators': 'Креаторов',
        'stats-projects': 'Проектов',
        'stats-clients': 'Клиентов',
        'stats-satisfaction': 'Довольных клиентов',

        // Цены
        'price-from': 'от',
        'price-per-video': 'за видео',
        'price-per-minute': 'за минуту',
        'price-currency-usd': 'USD',
        'price-currency-amd': 'AMD',

        // Формы
        'form-name': 'Имя',
        'form-email': 'Email',
        'form-phone': 'Телефон',
        'form-message': 'Сообщение',
        'form-submit': 'Отправить',
        'form-loading': 'Отправка...',
        'form-success': 'Сообщение отправлено!',
        'form-error': 'Ошибка отправки',

        // Кнопки
        'btn-primary': 'Основная кнопка',
        'btn-secondary': 'Вторичная кнопка',
        'btn-outline': 'Контурная кнопка',
        'btn-loading': 'Загрузка...',

        // Сообщения
        'message-success': 'Успешно!',
        'message-error': 'Ошибка!',
        'message-warning': 'Внимание!',
        'message-info': 'Информация',

        // Валидация
        'validation-required': 'Это поле обязательно',
        'validation-email': 'Введите корректный email',
        'validation-phone': 'Введите корректный номер телефона',
        'validation-min-length': 'Минимальная длина: {min} символов',
        'validation-max-length': 'Максимальная длина: {max} символов',

        // Время
        'time-now': 'Сейчас',
        'time-today': 'Сегодня',
        'time-yesterday': 'Вчера',
        'time-days-ago': '{days} дней назад',
        'time-hours-ago': '{hours} часов назад',
        'time-minutes-ago': '{minutes} минут назад',

        // Статусы
        'status-active': 'Активный',
        'status-pending': 'В ожидании',
        'status-completed': 'Завершен',
        'status-cancelled': 'Отменен',
        'status-draft': 'Черновик',

        // Роли
        'role-creator': 'Креатор',
        'role-client': 'Клиент',
        'role-admin': 'Администратор',

        // Действия
        'action-edit': 'Редактировать',
        'action-delete': 'Удалить',
        'action-save': 'Сохранить',
        'action-cancel': 'Отменить',
        'action-confirm': 'Подтвердить',
        'action-back': 'Назад',
        'action-next': 'Далее',
        'action-submit': 'Отправить',
        'action-upload': 'Загрузить',
        'action-download': 'Скачать',
        'action-view': 'Просмотреть',
        'action-create': 'Создать',

        // Меню
        'menu-dashboard': 'Панель управления',
        'menu-orders': 'Заказы',
        'menu-creators': 'Креаторы',
        'menu-clients': 'Клиенты',
        'menu-analytics': 'Аналитика',
        'menu-finances': 'Финансы',
        'menu-settings': 'Настройки',
        'menu-profile': 'Профиль',
        'menu-favorites': 'Избранное',

        // Заказы
        'order-create': 'Создать заказ',
        'order-edit': 'Редактировать заказ',
        'order-view': 'Просмотр заказа',
        'order-status': 'Статус заказа',
        'order-budget': 'Бюджет',
        'order-deadline': 'Срок выполнения',
        'order-description': 'Описание проекта',
        'order-requirements': 'Требования',
        'order-files': 'Файлы',
        'order-messages': 'Сообщения',

        // Профиль креатора
        'creator-specialization': 'Специализация',
        'creator-experience': 'Опыт работы',
        'creator-bio': 'О себе',
        'creator-portfolio': 'Портфолио',
        'creator-pricing': 'Цены',
        'creator-equipment': 'Оборудование',
        'creator-languages': 'Языки',
        'creator-location': 'Местоположение',
        'creator-rating': 'Рейтинг',
        'creator-reviews': 'Отзывы',

        // Админ панель
        'admin-dashboard': 'Админ панель',
        'admin-users': 'Пользователи',
        'admin-orders': 'Заказы',
        'admin-reports': 'Отчеты',
        'admin-settings': 'Настройки системы',
        'admin-analytics': 'Аналитика',
        'admin-finances': 'Финансы',

        // Уведомления
        'notification-new-order': 'Новый заказ',
        'notification-order-updated': 'Заказ обновлен',
        'notification-message-received': 'Новое сообщение',
        'notification-payment-received': 'Получена оплата',
        'notification-system': 'Системное уведомление',

        // Ошибки
        'error-404': 'Страница не найдена',
        'error-500': 'Внутренняя ошибка сервера',
        'error-network': 'Ошибка сети',
        'error-auth': 'Ошибка авторизации',
        'error-permission': 'Недостаточно прав',

        // Подтверждения
        'confirm-delete': 'Вы уверены, что хотите удалить?',
        'confirm-cancel': 'Вы уверены, что хотите отменить?',
        'confirm-logout': 'Вы уверены, что хотите выйти?',

        // Футер
        'footer-about': 'О нас',
        'footer-services': 'Услуги',
        'footer-creators': 'Креаторы',
        'footer-contact': 'Контакты',
        'footer-privacy': 'Политика конфиденциальности',
        'footer-terms': 'Условия использования',
        'footer-copyright': '© 2024 Content Bridge Armenia. Все права защищены.'
    },

    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-creators': 'Creators',
        'nav-contact': 'Contact',
        'nav-login': 'Login',
        'nav-register': 'Register',
        'nav-dashboard': 'Dashboard',
        'nav-admin': 'Admin Panel',
        'nav-logout': 'Logout',

        // Home page
        'hero-title': 'Content Bridge Armenia',
        'hero-subtitle': 'Platform for ordering video content from creators',
        'hero-description': 'Order authentic video reviews, unboxings and product presentations from verified content creators. Safe, fast, effective.',
        'hero-cta-primary': 'Order Video',
        'hero-cta-secondary': 'View Creators',
        'hero-become-creator': '👤 Become a Creator',
        'hero-login': '🔐 Login',

        // Sections
        'section-services': 'Our Services',
        'section-creators': 'Popular Creators',
        'section-process': 'How It Works',
        'section-stats': 'Our Statistics',
        'section-testimonials': 'Client Reviews',
        'section-contact': 'Contact Us',

        // Services
        'service-video-reviews': 'Video Reviews',
        'service-unboxing': 'Unboxing',
        'service-presentations': 'Presentations',
        'service-live-streams': 'Live Streams',
        'service-shorts': 'Short Videos',
        'service-ads': 'Ad Videos',

        // Process
        'process-step1': 'Choose Creator',
        'process-step2': 'Describe Project',
        'process-step3': 'Get Result',
        'process-step1-desc': 'Browse portfolios and choose the right creator',
        'process-step2-desc': 'Describe your requirements and budget in detail',
        'process-step3-desc': 'Get finished content within agreed deadlines',

        // Statistics
        'stats-creators': 'Creators',
        'stats-projects': 'Projects',
        'stats-clients': 'Clients',
        'stats-satisfaction': 'Satisfied Clients',

        // Prices
        'price-from': 'from',
        'price-per-video': 'per video',
        'price-per-minute': 'per minute',
        'price-currency-usd': 'USD',
        'price-currency-amd': 'AMD',

        // Forms
        'form-name': 'Name',
        'form-email': 'Email',
        'form-phone': 'Phone',
        'form-message': 'Message',
        'form-submit': 'Submit',
        'form-loading': 'Sending...',
        'form-success': 'Message sent!',
        'form-error': 'Sending error',

        // Buttons
        'btn-primary': 'Primary Button',
        'btn-secondary': 'Secondary Button',
        'btn-outline': 'Outline Button',
        'btn-loading': 'Loading...',

        // Messages
        'message-success': 'Success!',
        'message-error': 'Error!',
        'message-warning': 'Warning!',
        'message-info': 'Information',

        // Validation
        'validation-required': 'This field is required',
        'validation-email': 'Enter a valid email',
        'validation-phone': 'Enter a valid phone number',
        'validation-min-length': 'Minimum length: {min} characters',
        'validation-max-length': 'Maximum length: {max} characters',

        // Time
        'time-now': 'Now',
        'time-today': 'Today',
        'time-yesterday': 'Yesterday',
        'time-days-ago': '{days} days ago',
        'time-hours-ago': '{hours} hours ago',
        'time-minutes-ago': '{minutes} minutes ago',

        // Statuses
        'status-active': 'Active',
        'status-pending': 'Pending',
        'status-completed': 'Completed',
        'status-cancelled': 'Cancelled',
        'status-draft': 'Draft',

        // Roles
        'role-creator': 'Creator',
        'role-client': 'Client',
        'role-admin': 'Administrator',

        // Actions
        'action-edit': 'Edit',
        'action-delete': 'Delete',
        'action-save': 'Save',
        'action-cancel': 'Cancel',
        'action-confirm': 'Confirm',
        'action-back': 'Back',
        'action-next': 'Next',
        'action-submit': 'Submit',
        'action-upload': 'Upload',
        'action-download': 'Download',
        'action-view': 'View',
        'action-create': 'Create',

        // Menu
        'menu-dashboard': 'Dashboard',
        'menu-orders': 'Orders',
        'menu-creators': 'Creators',
        'menu-clients': 'Clients',
        'menu-analytics': 'Analytics',
        'menu-finances': 'Finances',
        'menu-settings': 'Settings',
        'menu-profile': 'Profile',
        'menu-favorites': 'Favorites',

        // Orders
        'order-create': 'Create Order',
        'order-edit': 'Edit Order',
        'order-view': 'View Order',
        'order-status': 'Order Status',
        'order-budget': 'Budget',
        'order-deadline': 'Deadline',
        'order-description': 'Project Description',
        'order-requirements': 'Requirements',
        'order-files': 'Files',
        'order-messages': 'Messages',

        // Creator Profile
        'creator-specialization': 'Specialization',
        'creator-experience': 'Experience',
        'creator-bio': 'About',
        'creator-portfolio': 'Portfolio',
        'creator-pricing': 'Pricing',
        'creator-equipment': 'Equipment',
        'creator-languages': 'Languages',
        'creator-location': 'Location',
        'creator-rating': 'Rating',
        'creator-reviews': 'Reviews',

        // Admin Panel
        'admin-dashboard': 'Admin Panel',
        'admin-users': 'Users',
        'admin-orders': 'Orders',
        'admin-reports': 'Reports',
        'admin-settings': 'System Settings',
        'admin-analytics': 'Analytics',
        'admin-finances': 'Finances',

        // Notifications
        'notification-new-order': 'New Order',
        'notification-order-updated': 'Order Updated',
        'notification-message-received': 'New Message',
        'notification-payment-received': 'Payment Received',
        'notification-system': 'System Notification',

        // Errors
        'error-404': 'Page Not Found',
        'error-500': 'Internal Server Error',
        'error-network': 'Network Error',
        'error-auth': 'Authentication Error',
        'error-permission': 'Insufficient Permissions',

        // Confirmations
        'confirm-delete': 'Are you sure you want to delete?',
        'confirm-cancel': 'Are you sure you want to cancel?',
        'confirm-logout': 'Are you sure you want to logout?',

        // Footer
        'footer-about': 'About',
        'footer-services': 'Services',
        'footer-creators': 'Creators',
        'footer-contact': 'Contact',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-copyright': '© 2024 Content Bridge Armenia. All rights reserved.'
    },

    hy: {
        // Նավիգացիա
        'nav-home': 'Գլխավոր',
        'nav-about': 'Մեր մասին',
        'nav-creators': 'Կրեատորներ',
        'nav-contact': 'Կապ',
        'nav-login': 'Մուտք',
        'nav-register': 'Գրանցում',
        'nav-dashboard': 'Անձնական գրասենյակ',
        'nav-admin': 'Ադմին պանել',
        'nav-logout': 'Ելք',

        // Գլխավոր էջ
        'hero-title': 'Content Bridge Armenia',
        'hero-subtitle': 'Վիդեո բովանդակության պատվերի պլատֆորմ կրեատորներից',
        'hero-description': 'Պատվիրեք իսկական վիդեո ակնարկներ, բացումներ և ապրանքների ներկայացումներ ստուգված բովանդակության կրեատորներից: Անվտանգ, արագ, արդյունավետ:',
        'hero-cta-primary': 'Պատվիրել վիդեո',
        'hero-cta-secondary': 'Տեսնել կրեատորներին',
        'hero-become-creator': '👤 Դառնալ կրեատոր',
        'hero-login': '🔐 Մուտք',

        // Բաժիններ
        'section-services': 'Մեր ծառայությունները',
        'section-creators': 'Հայտնի կրեատորներ',
        'section-process': 'Ինչպես է աշխատում',
        'section-stats': 'Մեր վիճակագրությունը',
        'section-testimonials': 'Հաճախորդների կարծիքները',
        'section-contact': 'Կապ մեզ հետ',

        // Ծառայություններ
        'service-video-reviews': 'Վիդեո ակնարկներ',
        'service-unboxing': 'Բացումներ',
        'service-presentations': 'Ներկայացումներ',
        'service-live-streams': 'Կենդանի հեռարձակումներ',
        'service-shorts': 'Կարճ վիդեոներ',
        'service-ads': 'Գովազդային տեսանյութեր',

        // Գործընթաց
        'process-step1': 'Ընտրել կրեատոր',
        'process-step2': 'Նկարագրել նախագիծը',
        'process-step3': 'Ստանալ արդյունք',
        'process-step1-desc': 'Զննել պորտֆոլիոները և ընտրել հարմար կրեատոր',
        'process-step2-desc': 'Մանրամասն նկարագրել ձեր պահանջները և բյուջեն',
        'process-step3-desc': 'Ստանալ պատրաստի բովանդակություն համաձայնեցված ժամկետներում',

        // Վիճակագրություն
        'stats-creators': 'Կրեատորներ',
        'stats-projects': 'Նախագծեր',
        'stats-clients': 'Հաճախորդներ',
        'stats-satisfaction': 'Բավ satisfied հաճախորդներ',

        // Գներ
        'price-from': 'սկսած',
        'price-per-video': 'վիդեոյի համար',
        'price-per-minute': 'րոպեի համար',
        'price-currency-usd': 'USD',
        'price-currency-amd': 'AMD',

        // Ձևեր
        'form-name': 'Անուն',
        'form-email': 'Էլ. փոստ',
        'form-phone': 'Հեռախոս',
        'form-message': 'Հաղորդագրություն',
        'form-submit': 'Ուղարկել',
        'form-loading': 'Ուղարկվում է...',
        'form-success': 'Հաղորդագրություն ուղարկված է!',
        'form-error': 'Ուղարկման սխալ',

        // Կոճակներ
        'btn-primary': 'Հիմնական կոճակ',
        'btn-secondary': 'Երկրորդական կոճակ',
        'btn-outline': 'Կոնտուրային կոճակ',
        'btn-loading': 'Բեռնվում է...',

        // Հաղորդագրություններ
        'message-success': 'Հաջողություն!',
        'message-error': 'Սխալ!',
        'message-warning': 'Նախազգուշացում!',
        'message-info': 'Տեղեկություն',

        // Վալիդացիա
        'validation-required': 'Այս դաշտը պարտադիր է',
        'validation-email': 'Մուտքագրեք վավեր էլ. փոստ',
        'validation-phone': 'Մուտքագրեք վավեր հեռախոսահամար',
        'validation-min-length': 'Նվազագույն երկարություն: {min} նիշ',
        'validation-max-length': 'Առավելագույն երկարություն: {max} նիշ',

        // Ժամանակ
        'time-now': 'Հիմա',
        'time-today': 'Այսօր',
        'time-yesterday': 'Երեկ',
        'time-days-ago': '{days} օր առաջ',
        'time-hours-ago': '{hours} ժամ առաջ',
        'time-minutes-ago': '{minutes} րոպե առաջ',

        // Կարգավիճակներ
        'status-active': 'Ակտիվ',
        'status-pending': 'Սպասում է',
        'status-completed': 'Ավարտված',
        'status-cancelled': 'Չեղարկված',
        'status-draft': 'Սևագիր',

        // Դերեր
        'role-creator': 'Կրեատոր',
        'role-client': 'Հաճախորդ',
        'role-admin': 'Ադմինիստրատոր',

        // Գործողություններ
        'action-edit': 'Խմբագրել',
        'action-delete': 'Ջնջել',
        'action-save': 'Պահպանել',
        'action-cancel': 'Չեղարկել',
        'action-confirm': 'Հաստատել',
        'action-back': 'Հետ',
        'action-next': 'Հաջորդ',
        'action-submit': 'Ուղարկել',
        'action-upload': 'Վերբեռնել',
        'action-download': 'Ներբեռնել',
        'action-view': 'Դիտել',
        'action-create': 'Ստեղծել',

        // Մենյու
        'menu-dashboard': 'Կառավարման վահանակ',
        'menu-orders': 'Պատվերներ',
        'menu-creators': 'Կրեատորներ',
        'menu-clients': 'Հաճախորդներ',
        'menu-analytics': 'Վերլուծություն',
        'menu-finances': 'Ֆինանսներ',
        'menu-settings': 'Կարգավորումներ',
        'menu-profile': 'Պրոֆիլ',
        'menu-favorites': 'Նախընտրածներ',

        // Պատվերներ
        'order-create': 'Ստեղծել պատվեր',
        'order-edit': 'Խմբագրել պատվեր',
        'order-view': 'Դիտել պատվեր',
        'order-status': 'Պատվերի կարգավիճակ',
        'order-budget': 'Բյուջե',
        'order-deadline': 'Կատարման ժամկետ',
        'order-description': 'Նախագծի նկարագրություն',
        'order-requirements': 'Պահանջներ',
        'order-files': 'Ֆայլեր',
        'order-messages': 'Հաղորդագրություններ',

        // Կրեատորի պրոֆիլ
        'creator-specialization': 'Մասնագիտացում',
        'creator-experience': 'Աշխատանքային փորձ',
        'creator-bio': 'Իմ մասին',
        'creator-portfolio': 'Պորտֆոլիո',
        'creator-pricing': 'Գներ',
        'creator-equipment': 'Սարքավորումներ',
        'creator-languages': 'Լեզուներ',
        'creator-location': 'Տեղակայություն',
        'creator-rating': 'Գնահատական',
        'creator-reviews': 'Կարծիքներ',

        // Ադմին պանել
        'admin-dashboard': 'Ադմին պանել',
        'admin-users': 'Օգտատերեր',
        'admin-orders': 'Պատվերներ',
        'admin-reports': 'Հաշվետվություններ',
        'admin-settings': 'Համակարգի կարգավորումներ',
        'admin-analytics': 'Վերլուծություն',
        'admin-finances': 'Ֆինանսներ',

        // Ծանուցումներ
        'notification-new-order': 'Նոր պատվեր',
        'notification-order-updated': 'Պատվեր թարմացված է',
        'notification-message-received': 'Նոր հաղորդագրություն',
        'notification-payment-received': 'Վճար ստացված է',
        'notification-system': 'Համակարգային ծանուցում',

        // Սխալներ
        'error-404': 'Էջը չի գտնվել',
        'error-500': 'Ներքին սերվերի սխալ',
        'error-network': 'Ցանցի սխալ',
        'error-auth': 'Իսկության ստուգման սխալ',
        'error-permission': 'Անբավարար իրավունքներ',

        // Հաստատումներ
        'confirm-delete': 'Դուք վստա՞հ եք, որ ցանկանում եք ջնջել:',
        'confirm-cancel': 'Դուք վստա՞հ եք, որ ցանկանում եք չեղարկել:',
        'confirm-logout': 'Դուք վստա՞հ եք, որ ցանկանում եք դուրս գալ:',

        // Ֆուտեր
        'footer-about': 'Մեր մասին',
        'footer-services': 'Ծառայություններ',
        'footer-creators': 'Կրեատորներ',
        'footer-contact': 'Կապ',
        'footer-privacy': 'Գաղտնիության քաղաքականություն',
        'footer-terms': 'Ծառայության պայմաններ',
        'footer-copyright': '© 2024 Content Bridge Armenia: Բոլոր իրավունքները պաշտպանված են:'
    }
};

// Armenian names for creators
const armenianNames = [
    'Արամ', 'Արմեն', 'Արտակ', 'Արտաշ', 'Արտյոմ', 'Արտուր', 'Արսեն', 'Արսենի',
    'Գագիկ', 'Գարեգին', 'Գևորգ', 'Գրիգոր', 'Դավիթ', 'Դանիել', 'Երվանդ', 'Զավեն',
    'Զորիկ', 'Էդուարդ', 'Էմիլ', 'Էրիկ', 'Թաթուլ', 'Թորգոմ', 'Իշխան', 'Լևոն',
    'Խաչիկ', 'Կարեն', 'Հայկ', 'Համլետ', 'Հենրիկ', 'Հովհաննես', 'Հրաչյա', 'Մանվել',
    'Մարտին', 'Մհեր', 'Միքայել', 'Նարեկ', 'Նարիկ', 'Ներսես', 'Նորայր', 'Նորիկ',
    'Պապ', 'Պարույր', 'Պետրոս', 'Ռաֆայել', 'Ռոբերտ', 'Ռուբեն', 'Սամվել', 'Սարգիս',
    'Սեյրան', 'Սերգեյ', 'Սերժ', 'Սիմոն', 'Ստեփան', 'Սուրեն', 'Վագեն', 'Վահագն',
    'Վահան', 'Վահե', 'Վարդան', 'Վարուժան', 'Վիգեն', 'Վրեժ', 'Տիգրան', 'Փայլակ',
    'Քրիստափոր', 'Օնիկ', 'Օսկար', 'Ռուդոլֆ', 'Ռաֆիկ', 'Ռուզան', 'Ռուզաննա',
    'Անահիտ', 'Անի', 'Անուշ', 'Արաքսի', 'Արմինե', 'Արմինա', 'Արշալույս', 'Արշավիր',
    'Աստղիկ', 'Ավետ', 'Բելլա', 'Գայանե', 'Գոհար', 'Դիանա', 'Ելենա', 'Եվա',
    'Զարուհի', 'Զարուհի', 'Էլեն', 'Էմմա', 'Էվա', 'Թամար', 'Թամարա', 'Իզաբելլա',
    'Լալա', 'Լարա', 'Լիլիթ', 'Լուսինե', 'Խաչուհի', 'Կարինե', 'Կարինա', 'Հասմիկ',
    'Հեղինե', 'Հրաչուհի', 'Մագդա', 'Մագդալենա', 'Մանե', 'Մարի', 'Մարիա', 'Մարիամ',
    'Մարինե', 'Մարինա', 'Մարիետա', 'Մարիետա', 'Մարինա', 'Մարինե', 'Մարի', 'Մարիա',
    'Նարե', 'Նարինե', 'Նարինա', 'Նատալի', 'Նատալյա', 'Նելլի', 'Նինա', 'Նորա',
    'Նորայր', 'Նորիկ', 'Նունե', 'Նունիկ', 'Նուշիկ', 'Նուշիկ', 'Շուշան', 'Շուշանիկ',
    'Պատրիկ', 'Պատրիկ', 'Պատրիկ', 'Պատրիկ', 'Պատրիկ', 'Պատրիկ', 'Պատրիկ', 'Պատրիկ',
    'Ռուզան', 'Ռուզաննա', 'Սեդա', 'Սեդա', 'Սեդա', 'Սեդա', 'Սեդա', 'Սեդա',
    'Սիլվա', 'Սիրանուշ', 'Սիրուշ', 'Սոնա', 'Սոնա', 'Սոնա', 'Սոնա', 'Սոնա',
    'Սուսան', 'Սուսաննա', 'Սվետլանա', 'Տատյանա', 'Տատյանա', 'Տատյանա', 'Տատյանա', 'Տատյանա',
    'Փայլակ', 'Փայլակ', 'Փայլակ', 'Փայլակ', 'Փայլակ', 'Փայլակ', 'Փայլակ', 'Փայլակ',
    'Քրիստինե', 'Քրիստինա', 'Քրիստինա', 'Քրիստինա', 'Քրիստինա', 'Քրիստինա', 'Քրիստինա', 'Քրիստինա',
    'Օլգա', 'Օլգա', 'Օլգա', 'Օլգա', 'Օլգա', 'Օլգա', 'Օլգա', 'Օլգա'
];

// Price ranges in USD and AMD
const priceRanges = {
    usd: {
        min: 50,
        max: 2000,
        step: 50
    },
    amd: {
        min: 20000,
        max: 800000,
        step: 10000
    }
};

// Exchange rate (approximate)
const exchangeRate = 400; // 1 USD = 400 AMD

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, armenianNames, priceRanges, exchangeRate };
}
