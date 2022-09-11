//! USER (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     GetUser:
 *       type: object
 *       properties:
 *          email:
 *              type: string
 *              description: Адрес пользователя
 *              example: mail@mail.com
 *          nickname:
 *              type: string
 *              description: Псевдоним пользователя
 *              example: qwerty1
 *          tags:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Tag'
 */


//! PUT USER (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     PutUserRes:
 *       type: object
 *       properties:
 *          email:
 *              type: string
 *              description: Адрес пользователя
 *              example: mail@mail.com
 *          nickname:
 *              type: string
 *              description: Псевдоним пользователя
 *              example: qwerty1
 */


//! TAG (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     Tag:
 *       type: object
 *       properties:
 *          id:
 *              type: integer
 *              description: Id тэга
 *              example: 1
 *          name:
 *              type: string
 *              description: Название тега
 *              example: Название тега
 *          sortOrder:
 *              type: integer
 *              description: Сортировка
 *              example: 0
 */

//! PUT TAGS TO USER (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     PutTagToUser:
 *       type: object
 *       properties:
 *          tags:
 *              type: array
 *              items:
 *                  type: integer
 *              example: [1, 2, 3]
 */


//! TAGS ONLY ARRAY
/**
 * @swagger
 * components:
 *   schemas:
 *     TagsOnlyArray:
 *       type: object
 *       properties:
 *          tags:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Tag'
 *              minItems: 2
 *              maxItems: 3
 *              example:
 *                  - id: 1
 *                    name: first tag name
 *                    sortOrder: 0
 *                  - id: 2
 *                    name: second tag name
 *                    sortOrder: 0
 *                  - id: 3
 *                    name: third tag name
 *                    sortOrder: 1
 */
