# 9Router - Umbrel App

## Про застосунок

9Router - це безкоштовний AI Router і Token Saver. Ніколи не переривайте кодування. Заощаджуйте 20-40% токенів з RTK + автоматичним перемиканням на БЕЗКОШТОВНІ і дешеві AI моделі.

Підключайте всі AI інструменти для коду (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) до 40+ AI провайдерів і 100+ моделей.

## Ключові можливості

- 🚀 **RTK Token Saver** - Заощаджуйте 20-40% токенів на кожному запиті
- 🎯 **Smart 3-Tier Fallback** - Автоматичне перемикання: Підписка → Дешеві → Безкоштовні
- 📊 **Real-Time Quota Tracking** - Відстеження квоти в реальному часі
- 🔄 **Format Translation** - Переклад форматів (OpenAI ↔ Claude ↔ Gemini)
- 👥 **Multi-Account Support** - Підтримка кількох акаунтів
- 🔄 **Auto Token Refresh** - Автоматичне оновлення токенів
- 🌐 **40+ AI Providers** - OpenRouter, GLM, Kimi, MiniMax, OpenAI, Anthropic, Gemini, DeepSeek, Groq, xAI, Mistral, Perplexity та інші

## Підтримувані AI провайдери

### 🔐 OAuth провайдери
- Claude Code
- Antigravity
- Codex
- GitHub Copilot
- Cursor

### 🆓 Безкоштовні провайдери
- **Kiro AI** - Claude 4.5 + GLM-5 + MiniMax (Необмежено БЕЗКОШТОВНО)
- **OpenCode Free** - Без авторизації, автоматичне отримання моделей (Необмежено БЕЗКОШТОВНО)
- **Vertex AI** - Gemini 3 Pro + GLM-5 + DeepSeek ($300 безкоштовних кредитів)

### 🔑 API Key провайдери (40+)
OpenRouter, GLM, Kimi, MiniMax, OpenAI, Anthropic, Gemini, DeepSeek, Groq, xAI, Mistral, Perplexity, Together AI, Fireworks, Cerebras, Cohere, NVIDIA, SiliconFlow та багато інших.

## Використання

### 1. Доступ до Dashboard
Після встановлення відкрийте:
```
http://umbrel.local:20128/dashboard
```

**Логін за замовчуванням:**
- Username: `admin`
- Password: `umbrel9router`

⚠️ **ВАЖЛИВО:** Змініть пароль після першого входу!

### 2. Підключення провайдера

1. Відкрийте Dashboard → Providers
2. Виберіть безкоштовний провайдер (рекомендується):
   - **Kiro AI** (безкоштовний Claude необмежено)
   - **OpenCode Free** (без авторизації)
3. Натисніть "Connect"

### 3. Інтеграція з AI інструментами

#### Claude Code / Codex / OpenClaw / Cursor / Cline
```
Settings:
  Endpoint: http://umbrel.local:20128/v1
  API Key: [скопіюйте з dashboard]
  Model: kr/claude-sonnet-4.5
```

### 4. Створення комбо

Створіть комбінацію моделей з автоматичним fallback:

**Приклад "free-forever" (0$ на місяць):**
```
1. kr/claude-sonnet-4.5      (Claude 4.5 безкоштовно необмежено)
2. kr/glm-5                  (GLM-5 безкоштовно через Kiro)
3. oc/<auto>                 (OpenCode Free, без авторизації)
```

**Приклад "maximize-claude" (для власників підписки):**
```
1. cc/claude-opus-4-7        (використовуйте підписку повністю)
2. glm/glm-5.1               (дешевий backup коли квота закінчилась)
3. kr/claude-sonnet-4.5      (безкоштовний аварійний fallback)
```

## API Endpoints

### Chat Completions
```bash
POST http://umbrel.local:20128/v1/chat/completions
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "model": "cc/claude-opus-4-6",
  "messages": [
    {"role": "user", "content": "Write a function to..."}
  ],
  "stream": true
}
```

### List Models
```bash
GET http://umbrel.local:20128/v1/models
Authorization: Bearer YOUR_API_KEY
```

## Volumes

Дані зберігаються в:
- `${APP_DATA_DIR}/data` - Конфігурація та база даних
- `${APP_DATA_DIR}/logs` - Логи запитів (якщо увімкнено)

## Environment Variables

- `PORT` - Порт (за замовчуванням: 20128)
- `INITIAL_PASSWORD` - Початковий пароль (за замовчуванням: umbrel9router)
- `ENABLE_REQUEST_LOGS` - Логування запитів (false за замовчуванням)
- `JWT_SECRET` - Секрет для JWT (автоматично з APP_SEED)

## Підтримка

- 🌐 Website: [9router.com](https://9router.com/)
- 📦 GitHub: [github.com/decolua/9router](https://github.com/decolua/9router)
- 📄 Документація: [README](https://github.com/decolua/9router#readme)
- 🐛 Issues: [github.com/decolua/9router/issues](https://github.com/decolua/9router/issues)

## Ліцензія

MIT License - детальніше в [LICENSE](https://github.com/decolua/9router/blob/master/LICENSE)

---

Built with ❤️ для розробників, які кодують 24/7
