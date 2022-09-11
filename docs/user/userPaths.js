//! HEADER
/**
 * @swagger
 * tags:
 *   name: User
 *   description: Запросы связанные с пользователем
 */

//! GET USER
/**
 * @swagger
 * /user:
 *  get:
 *   summary: Получить пользователя
 *   tags: [User]
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
 *   responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetUser'
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

//! PUT USER
/**
 * @swagger
 * /user:
 *  put:
 *   summary: Создать пользователя
 *   tags: [User]
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
 *       $ref: '#/components/schemas/SigninReq'
 *   responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PutUserRes'
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

//! DELETE USER
/**
 * @swagger
 * /user:
 *  delete:
 *   summary: Удалить пользователя
 *   tags: [User]
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



//! ADD USER TAG
/**
 * @swagger
 * /user/tag:
 *  post:
 *   summary: Добавить теги к пользователю
 *   tags: [User]
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
 *       $ref: '#/components/schemas/PutTagToUser'
 *   responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TagsOnlyArray'
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
 * /user/tag/{id}:
 *  delete:
 *   summary: Удалить тег
 *   tags: [User]
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
 *               $ref: '#/components/schemas/TagsOnlyArray'
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


//! MY TAGS
/**
 * @swagger
 * /user/tag/my:
 *  get:
 *   summary: Получить свои теги
 *   tags: [User]
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
 *   responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TagsOnlyArray'
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