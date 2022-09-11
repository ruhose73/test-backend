//! HEADER
/**
 * @swagger
 * tags:
 *   name: Tags
 *   description: Запросы связанные с тегами
 */

//! POST TAG
/**
 * @swagger
 * /tag:
 *  post:
 *   summary: Создать тег
 *   tags: [Tags]
 *   security:
 *   - bearerAuth: []
 *   parameters:
 *   - in: header
 *     name: Token
 *     description: Bearer Token
 *     schema: 
 *       type: string
 *       format: JWT
 *       example: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RleCBUZWFtIiwic3ViIjoiYXV0aCIsImV4cCI6MTUwNTQ2Nzc1Njg2OSwiaWF0IjoxNTA1NDY3MTUyMDY5LCJ1c2VyIjoxfQ.0ynjTRZT9Uk77TnGy_g9Mxi1decLBjKxQK6e2dVzDJo"
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/MiniTag'
 *   responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tag'
 *       400:
 *         description: Bad request error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Неверные данные"
 *       403:
 *         description: Unauthorized error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Токен не валиден"
 *       500:
 *         description: Internal error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Ошибка сервера"
 */


//! GET TAG BY ID
/**
 * @swagger
 * /tag/{id}:
 *  get:
 *   summary: Получить тег по id
 *   tags: [Tags]
 *   security:
 *   - bearerAuth: []
 *   parameters:
 *   - in: header
 *     name: Token
 *     description: Bearer Token
 *     schema: 
 *       type: string
 *       format: JWT
 *       example: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RleCBUZWFtIiwic3ViIjoiYXV0aCIsImV4cCI6MTUwNTQ2Nzc1Njg2OSwiaWF0IjoxNTA1NDY3MTUyMDY5LCJ1c2VyIjoxfQ.0ynjTRZT9Uk77TnGy_g9Mxi1decLBjKxQK6e2dVzDJo"
 *   - in: path
 *     name: id
 *     required: true
 *     type: integer
 *     description: Id тэга.
 *   responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TagWithCreator'
 *       400:
 *         description: Bad request error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Неверные данные"
 *       403:
 *         description: Unauthorized error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Токен не валиден"
 *       500:
 *         description: Internal error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Ошибка сервера"
 */

//! GET TAG BY ID
/**
 * @swagger
 * /tag/{id}:
 *  put:
 *   summary: Обновление тега
 *   tags: [Tags]
 *   security:
 *   - bearerAuth: []
 *   parameters:
 *   - in: header
 *     name: Token
 *     description: Bearer Token
 *     schema: 
 *       type: string
 *       format: JWT
 *       example: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RleCBUZWFtIiwic3ViIjoiYXV0aCIsImV4cCI6MTUwNTQ2Nzc1Njg2OSwiaWF0IjoxNTA1NDY3MTUyMDY5LCJ1c2VyIjoxfQ.0ynjTRZT9Uk77TnGy_g9Mxi1decLBjKxQK6e2dVzDJo"
 *   - in: path
 *     name: id
 *     required: true
 *     type: integer
 *     description: Id тэга.
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/MiniTag'
 *   responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TagWithCreator'
 *       400:
 *         description: Bad request error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Неверные данные"
 *       403:
 *         description: Unauthorized error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Токен не валиден"
 *       500:
 *         description: Internal error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Ошибка сервера"
 */

//! DELETE USER TAG
/**
 * @swagger
 * /tag/{id}:
 *  delete:
 *   summary: Удалить тег по id
 *   tags: [Tags]
 *   security:
 *   - bearerAuth: []
 *   parameters:
 *   - in: header
 *     name: Token
 *     description: Bearer Token
 *     schema: 
 *       type: string
 *       format: JWT
 *       example: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RleCBUZWFtIiwic3ViIjoiYXV0aCIsImV4cCI6MTUwNTQ2Nzc1Njg2OSwiaWF0IjoxNTA1NDY3MTUyMDY5LCJ1c2VyIjoxfQ.0ynjTRZT9Uk77TnGy_g9Mxi1decLBjKxQK6e2dVzDJo"
 *   - in: path
 *     name: id
 *     required: true
 *     type: integer
 *     description: Id тэга.
 *   responses:
 *       204:
 *         description: No content
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "No content"
 *       400:
 *         description: Bad request error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Неверные данные"
 *       403:
 *         description: Unauthorized error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Токен не валиден"
 *       500:
 *         description: Internal error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Ошибка сервера"
 */


//! GET USER TAGS (QUERY)
/**
 * @swagger
 * /tag?sortByOrder&sortByName&offset=10&length=10:
 *  get:
 *   summary: Удалить тег по id
 *   tags: [Tags]
 *   security:
 *   - bearerAuth: []
 *   parameters:
 *   - in: header
 *     name: Token
 *     description: Bearer Token
 *     schema: 
 *       type: string
 *       format: JWT
 *       example: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RleCBUZWFtIiwic3ViIjoiYXV0aCIsImV4cCI6MTUwNTQ2Nzc1Njg2OSwiaWF0IjoxNTA1NDY3MTUyMDY5LCJ1c2VyIjoxfQ.0ynjTRZT9Uk77TnGy_g9Mxi1decLBjKxQK6e2dVzDJo"
 *   - in: query
 *     name: sortByOrder
 *     description: Сортировка по order
 *   - in: query
 *     name: sortByName
 *     description: Сортировка по Name
 *   - in: query
 *     name: offset
 *     type: integer
 *     description: Сдвиг по записям
 *     example: 10
 *   - in: query
 *     name: length
 *     type: integer
 *     description: Количество записей
 *     example: 10
 *   responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TagsQuery'
 *       400:
 *         description: Bad request error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Неверные данные"
 *       403:
 *         description: Unauthorized error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Токен не валиден"
 *       500:
 *         description: Internal error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Ошибка сервера"
 */


