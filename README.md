# Wpdews Umbrel App Store

Коллекция приложений для Umbrel OS, включающая инструменты для стриминга, видеонаблюдения и AI-роутинга.

## 📦 Приложения

### 🎵 [Icecast](wpdews-icecast/)
**Версия:** 1.0.4  
**Порт:** 8000  
**Категория:** Автоматизация

Icecast 2 - сервер потокового мультимедиа, поддерживающий различные форматы. Используйте его для создания собственной интернет-радиостанции или трансляции аудиоконтента пользователям.

**Особенности:**
- Поддержка множества аудиоформатов
- Веб-интерфейс для управления
- Настройка качества потока
- Статистика слушателей

**Доступ:**
- Логин: `admin`
- Пароль: `admin123`

---

### 📹 [MotionEye](wpdews-motioneye/)
**Версия:** 1.0.6  
**Порт:** 8769  
**Категория:** Автоматизация

MotionEye - онлайн-интерфейс для программы motion, системы видеонаблюдения с детекцией движения. Разработан для поддержки безопасных городов с тысячами камер, абонентских сервисов и домашнего использования.

**Особенности:**
- Детекция движения
- Запись видео по событиям
- Веб-интерфейс для мониторинга
- Поддержка множественных камер
- Уведомления о событиях

**Доступ:**
- Логин: `admin`
- Пароль: (пустой)

---

### 🤖 [9Router](wpdews-9router/)
**Версия:** 0.4.52  
**Порт:** 20128  
**Категория:** Автоматизация

9Router - БЕСПЛАТНЫЙ AI Router & Token Saver. Экономьте 20-40% токенов с RTK + автоматический переход на БЕСПЛАТНЫЕ и дешевые AI модели.

**Особенности:**
- **RTK Token Saver** - экономия 20-40% токенов на запрос
- **Умный 3-уровневый Fallback** - Подписка → Дешевые → Бесплатные
- **Отслеживание квот в реальном времени**
- **Трансляция форматов** (OpenAI ↔ Claude ↔ Gemini)
- **Поддержка множественных аккаунтов**
- **Автообновление токенов**
- **40+ AI провайдеров** (OpenRouter, GLM, Kimi, MiniMax, OpenAI, Anthropic, Gemini, DeepSeek, Groq, xAI, Mistral, Perplexity, Together AI, Fireworks, Cerebras, Cohere, NVIDIA, SiliconFlow и другие)

**Совместимость:**
Подключите все AI инструменты кодирования (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) к 40+ AI провайдерам и 100+ моделям.

**Доступ:**
- Логин: `admin`
- Пароль: `umbrel9router`
- Путь: `/dashboard`

---

## 🚀 Установка

1. Добавьте этот app store в ваш Umbrel:
   ```
   https://github.com/wpdew/wpdews-umbrell
   ```

2. Найдите нужное приложение в разделе "Wpdews App Store"

3. Нажмите "Install" и дождитесь завершения установки

## 📋 Структура репозитория

```
wpdews-umbrell/
├── README.md                    # Этот файл
├── umbrel-app-store.yml        # Конфигурация app store
├── wpdews-icecast/             # Icecast приложение
│   ├── umbrel-app.yml
│   ├── docker-compose.yml
│   └── icon.png
├── wpdews-motioneye/           # MotionEye приложение
│   ├── umbrel-app.yml
│   ├── docker-compose.yml
│   └── manifest.yml
└── wpdews-9router/             # 9Router приложение
    ├── umbrel-app.yml
    ├── docker-compose.yml
    ├── README.md
    └── icon.png
```

## 👨‍💻 Разработчики

- **WpDews** - Icecast, MotionEye
- **Deco Lua** - 9Router

## 🌐 Ссылки

- **Сайт:** [wpdew.com](https://wpdew.com/)
- **9Router:** [9router.com](https://9router.com/)
- **Репозиторий:** [GitHub](https://github.com/wpdew/wpdews-umbrell)

## 📝 Лицензия

Каждое приложение имеет свою лицензию. Смотрите соответствующие репозитории для подробностей.
