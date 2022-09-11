//! HEADER
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Запросы связанные с регистрацией, входом и выходом из учетной записи
 */

//! REGISTER
/**
 * @swagger
 * /signin:
 *  post:
 *   summary: Регистрация
 *   tags: [Auth]
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
 *               $ref: '#/components/schemas/SigninLoginRes'
 *       400:
 *         description: Bad request error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Неверные данные"
 *       500:
 *         description: Internal error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Ошибка сервера"
 */

//! LOGIN
/**
 * @swagger
 * /login:
 *  post:
 *   summary: Логин
 *   tags: [Auth]
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
 *               $ref: '#/components/schemas/SigninLoginRes'
 *       400:
 *         description: Bad request error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Неверные данные"
 *       500:
 *         description: Internal error
 *         content:
 *             application/json: 
 *               schema: 
 *                 type: string
 *                 example: "Ошибка сервера"
 */

//! LOGOUT
/**
 * @swagger
 * /logout:
 *  post:
 *   summary: Логаут
 *   tags: [Auth]
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

