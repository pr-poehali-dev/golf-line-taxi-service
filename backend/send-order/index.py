"""
Отправка заявки на такси в Telegram чат @perevozki24RF
"""
import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")

    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    from_addr = body.get("from", "").strip()
    to_addr = body.get("to", "").strip()
    date = body.get("date", "").strip()
    comment = body.get("comment", "").strip()

    lines = [
        "🚖 *Новая заявка — Gold Line*",
        "",
        f"👤 *Имя:* {name}",
        f"📞 *Телефон:* {phone}",
        f"📍 *Откуда:* {from_addr}",
        f"🏁 *Куда:* {to_addr}",
    ]
    if date:
        lines.append(f"📅 *Дата/время:* {date}")
    if comment:
        lines.append(f"💬 *Комментарий:* {comment}")

    text = "\n".join(lines)

    bot_token = os.environ["TELEGRAM_BOT_TOKEN"]
    chat_id = os.environ["TELEGRAM_CHAT_ID"]

    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = json.dumps({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "Markdown",
    }).encode("utf-8")

    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req) as resp:
        resp.read()

    return {
        "statusCode": 200,
        "headers": {**cors_headers, "Content-Type": "application/json"},
        "body": json.dumps({"ok": True}),
    }
