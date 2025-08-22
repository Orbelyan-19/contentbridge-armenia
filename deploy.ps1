# Content Bridge Armenia - Auto Deploy Script (PowerShell)
# Этот скрипт автоматически обновляет проект на GitHub

param(
    [string]$CommitMessage = ""
)

Write-Host "🚀 Начинаем автоматический деплой Content Bridge Armenia..." -ForegroundColor Green

# Проверяем статус Git
$gitStatus = git status --porcelain
if ([string]::IsNullOrEmpty($gitStatus)) {
    Write-Host "✅ Рабочая директория чистая" -ForegroundColor Green
} else {
    Write-Host "📝 Обнаружены изменения в файлах" -ForegroundColor Yellow
    Write-Host "Добавляем все изменения в Git..." -ForegroundColor Cyan
    git add .
    
    # Запрашиваем сообщение коммита
    if ([string]::IsNullOrEmpty($CommitMessage)) {
        $CommitMessage = Read-Host "💬 Введите сообщение коммита (или нажмите Enter для автоматического)"
    }
    
    if ([string]::IsNullOrEmpty($CommitMessage)) {
        $CommitMessage = "Auto-deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    }
    
    Write-Host "💾 Создаем коммит: $CommitMessage" -ForegroundColor Cyan
    git commit -m $CommitMessage
}

# Проверяем, есть ли удаленные изменения
Write-Host "🔄 Проверяем удаленные изменения..." -ForegroundColor Cyan
git fetch origin

$localCommit = git rev-parse HEAD
$remoteCommit = git rev-parse origin/main

if ($localCommit -ne $remoteCommit) {
    Write-Host "⚠️  Обнаружены удаленные изменения. Сначала pull..." -ForegroundColor Yellow
    git pull origin main
}

# Отправляем изменения на GitHub
Write-Host "📤 Отправляем изменения на GitHub..." -ForegroundColor Cyan
git push origin main

Write-Host "✅ Деплой завершен успешно!" -ForegroundColor Green
Write-Host "🌐 Сайт будет доступен по адресу: https://yourusername.github.io/contentbridge-armenia" -ForegroundColor Cyan
Write-Host "⏱️  Обновление займет 1-2 минуты" -ForegroundColor Yellow

# Опционально: отправляем уведомление в Telegram (если настроен webhook)
if ($env:TELEGRAM_WEBHOOK) {
    Write-Host "📱 Отправляем уведомление в Telegram..." -ForegroundColor Cyan
    $body = @{
        text = "🚀 Content Bridge Armenia обновлен!`n🌐 https://yourusername.github.io/contentbridge-armenia"
    } | ConvertTo-Json
    
    try {
        Invoke-RestMethod -Uri $env:TELEGRAM_WEBHOOK -Method Post -Body $body -ContentType "application/json"
    } catch {
        Write-Host "⚠️  Ошибка отправки уведомления в Telegram" -ForegroundColor Yellow
    }
}

Write-Host "🎉 Все готово!" -ForegroundColor Green
