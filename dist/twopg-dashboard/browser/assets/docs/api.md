# API
Взаимодействие с WolfBot через HTTP запросы.

---

## Использование
- Взаимодействие с ботом через Панель Управления
- XP-Карты
- Создание платёжный сессий
- OAuth2 Discord авторизация

## Коды Ошибок
Код  | Описание
-----|-------------
400  | Key is invalid, or an error occurred with the request
401  | Unauthorized; key not provided or authorized 
404  | Route could not be found
429  | Too many requests to the API
500  | Internal server error (rare)

## Ограничение трафика
WolfBot имеет ограничение трафика на API дабы избежать DDos атак.