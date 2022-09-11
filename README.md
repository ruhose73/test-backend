# Тестовое задание Backend Node

## Установка

### Миграция базы данных (PgAdmin)

Откройте pgAdmin

Создайте базу данных c именем `test_backend`
<p align="left">
    <img src="https://github.com/ruhose73/test-backend/blob/main/docs/images/1.png" />
</p>

Затем нажмите restore/восстановить на вкладке созданной базы данных
<p align="left">
    <img src="https://github.com/ruhose73/test-backend/blob/main/docs/images/2.png" />
</p>

Выберите файл `migration-custom.backup` в папке `migration-custom` данного проекта  
и нажмите restore/восстановить
<p align="left">
    <img src=".https://github.com/ruhose73/test-backend/blob/main/docs/images/4.png" />
</p>

### Миграция базы данных (терминал)

Создайте базу данных c именем `test_backend`

```sql
CREATE DATABASE test_backend WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
```

Восстановите базу данных с помощью утилиты `pg-restore`

```
pg_restore \
-v
-h <host> \
-U <user_name>
-d <database_name> archive.dump
```

где:

* `<host>` — IP-адрес или DNS-имя мастер-хоста принимающего кластера;
* `<user_name>` — имя пользователя базы данных;
* `<database_name>` — имя базы данных.
* `archive.dump` — Путь до файла `migration-custom.backup`;

### Установка и запуск сервера

* Скачайте репозиторий
* В папке репозитория выполните команду в терминале `npm install`
* Затем выполните команду `npm run server`
