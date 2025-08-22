#!/bin/bash

# Content Bridge Armenia - Auto Deploy Script
# Этот скрипт автоматически обновляет проект на GitHub

set -e  # Остановить выполнение при ошибке

echo "🚀 Начинаем автоматический деплой Content Bridge Armenia..."

# Проверяем статус Git
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ Рабочая директория чистая"
else
    echo "📝 Обнаружены изменения в файлах"
    echo "Добавляем все изменения в Git..."
    git add .
    
    # Запрашиваем сообщение коммита
    echo "💬 Введите сообщение коммита (или нажмите Enter для автоматического):"
    read commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="Auto-deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    
    echo "💾 Создаем коммит: $commit_message"
    git commit -m "$commit_message"
fi

# Проверяем, есть ли удаленные изменения
echo "🔄 Проверяем удаленные изменения..."
git fetch origin

if [ "$(git rev-list HEAD...origin/main --count)" != "0" ]; then
    echo "⚠️  Обнаружены удаленные изменения. Сначала pull..."
    git pull origin main
fi

# Отправляем изменения на GitHub
echo "📤 Отправляем изменения на GitHub..."
git push origin main

echo "✅ Деплой завершен успешно!"
echo "🌐 Сайт будет доступен по адресу: https://yourusername.github.io/contentbridge-armenia"
echo "⏱️  Обновление займет 1-2 минуты"

# Опционально: отправляем уведомление в Telegram (если настроен webhook)
if [ ! -z "$TELEGRAM_WEBHOOK" ]; then
    echo "📱 Отправляем уведомление в Telegram..."
    curl -s -X POST "$TELEGRAM_WEBHOOK" \
        -H "Content-Type: application/json" \
        -d "{\"text\":\"🚀 Content Bridge Armenia обновлен!\\n🌐 https://yourusername.github.io/contentbridge-armenia\"}"
fi

echo "🎉 Все готово!"
