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

//! MINI TAG (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     MiniTag:
 *       type: object
 *       properties:
 *          name:
 *              type: string
 *              description: Название тега
 *              example: Название тега
 *          sortOrder:
 *              type: integer
 *              description: Сортировка
 *              example: 0
 */


//! TAG WITH CREATOR (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     TagWithCreator:
 *       type: object
 *       properties:
 *          creator:
 *              $ref: '#/components/schemas/Creator'
 *          name:
 *              type: string
 *              description: Название тега
 *              example: Название тега 1
 *          sortOrder:
 *              type: integer
 *              description: Сортировка
 *              example: 1

 */


//! CREATOR (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     Creator:
 *       type: object
 *       properties:
 *          nickname:
 *              type: string
 *              description: Псевдоним пользователя
 *              example: Qwerty
 *          uid:
 *              type: string
 *              description: Id пользователя
 *              example: 4cf7e8f8-b6cc-40c2-8fba-e63e62d53995
 */

//!  TAGS QUERY (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *      TagsQuery:
 *       type: object
 *       properties:
 *          data:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/TagWithCreator'
 *              minItems: 2
 *              maxItems: 3
 *          meta:
 *              $ref: '#/components/schemas/Meta'
 */

//! META (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     Meta:
 *       type: object
 *       properties:
 *          offset:
 *              type: integer
 *              description: Сдвиг по записям
 *              example: Qwerty
 *          length:
 *              type: integer
 *              description: Количество записей
 *              example: 4cf7e8f8-b6cc-40c2-8fba-e63e62d53995
 *          quantity:
 *              type: integer
 *              description: Общее количество элементов в выборке
 *              example: 4cf7e8f8-b6cc-40c2-8fba-e63e62d53995
 */
