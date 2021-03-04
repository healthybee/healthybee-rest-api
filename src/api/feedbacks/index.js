import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { token } from "../../services/passport";
import { create, index, show } from "./controller";
import { schema } from "./model";

export Feedbacks, { schema } from "./model";

const router = new Router();
const { email, number, message } = schema.tree;

/**
 * @api {post} /feedbacks Create feedbacks
 * @apiName CreateFeedbacks
 * @apiGroup Feedbacks
 * @apiParam name Feedbacks's name.
 * @apiParam email Feedbacks's email.
 * @apiParam message Feedbacks's message.
 * @apiSuccess {Object} feedbacks Feedbacks's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Feedbacks not found.
 */
router.post("/", body({ email, number, message }), create);

/**
 * @api {get} /feedbacks Retrieve feedbacks
 * @apiName RetrieveFeedbacks
 * @apiGroup Feedbacks
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} feedbacks List of feedbacks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get("/", token({ required: true, roles: ["admin"] }), query(), index);

/**
 * @api {get} /feedbacks/:id Retrieve feedbacks
 * @apiName RetrieveFeedbacks
 * @apiGroup Feedbacks
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} feedbacks Feedbacks's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Feedbacks not found.
 * @apiError 401 admin access only.
 */
router.get("/:id", token({ required: true, roles: ["admin"] }), show);

export default router;
