# Тестовое задание Backend Node

## Установка и запуск

* [Установка и запуск без докера](https://github.com/ruhose73/test-backend/blob/main/docs/CLEAR.MD)
* [Установка и запуск с докером](https://github.com/ruhose73/test-backend/blob/main/docs/DOCKER.MD)

## Сервера

* Сервер API: ```http://localhost:5000```
* Сервер документации: ```http://localhost:5000/docs```

### Что было сделано

* Выполнены все обязательные требования
* Документация SWAGGER
* Сделана конфигурация для запуска в Docker контейнере
* Во время разработки не использовась ORM
* По возможности использовались DTO
* Написаны прослойки для обработки ошибок и отправки статус кодов
* Написана прослойка для проведения механизма авторизации

### Комментарии

#### Сортировка и пагинация

Механизм сортировки и пагинации сделан на стороне базы данных

```sql
SELECT tags.id, tags.creator, tags.name, tags.sortorder, users.nickname, users.uid ` +
                `FROM tags LEFT OUTER JOIN users on tags.creator = users.uid` +
                ` ORDER BY (${inputParams.sortByOrder == true ? 
                'sortorder' : inputParams.sortByName == true ? 'name' : 'id'}) 
                LIMIT $1 OFFSET $2
```

В случае отсутствия какого либо параметра задаются значения по умолчанию

```js
        const getTags = await TagService.allTags({ 
            sortByOrder: req.query.sortByOrder == '' ? true : false, 
            offset: req.query.offset ? req.query.offset : 0,
            sortByName: req.query.sortByName == '' ? true : false , 
            length: req.query.length ? req.query.length : 10 
        });
```

#### Миграция базы данных

Дамп базы данных сделан в двух форматах:

* `custom` - формат PostgreSQL (через `pg_restore`)
* `plain` - формат SQL (если хочется ручками)

Дампы хранятся в папке `migration-pg` в проекте

#### SWAGGER

Задокументированы все запросы данного API  
Документация доступна после запуска проекта по адресу `http://localhost:5000/docs/`
