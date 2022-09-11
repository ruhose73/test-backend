//! SIGNIN (REQ)
/**
 * @swagger
 * components:
 *   schemas:
 *     SigninReq:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - nickname
 *       properties:
 *          email:
 *              type: string
 *              description: User email
 *          password:
 *              type: string
 *              description: User password
 *          nickname:
 *              type: string
 *              description: User nickname
 *       example:
 *         email: mail@mail.ru
 *         password: qwerty1234
 *         nickname: qwerty
 */

//! SIGNIN AND LOGIN (RES)
/**
 * @swagger
 * components:
 *   schemas:
 *     SigninLoginRes:
 *       type: object
 *       required:
 *         - token
 *         - expire
 *       properties:
 *          token:
 *              type: string
 *              description: User bearer token
 *          expire:
 *              type: string
 *              description: time to token expire in milliseconds
 *       example:
 *         token: "token"
 *         expire: "1800"
 */
