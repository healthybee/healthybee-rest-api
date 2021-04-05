import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { master } from "../../services/passport";
import { create, index, show, update, destroy } from "./controller";
import { schema } from "./model";
export Subscription, { schema } from "./model";

const router = new Router();
const {
  name,
  mobile,
  age,
  weight,
  line0,
  line1,
  line2,
  fitness_goal,
  diet_preference,
  meal_preference,
  meals,
  meal_duration,
  start_date,
  gender,
  pincode,
  physical_activity,
} = schema.tree;

/**
 * @api {post} /subscriptions Create subscription
 * @apiName CreateSubscription
 * @apiGroup Subscription
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Subscription's name.
 * @apiParam mobile Subscription's mobile.
 * @apiParam age Subscription's age.
 * @apiParam weight Subscription's weight.
 * @apiParam line0 Subscription's line0.
 * @apiParam line1 Subscription's line1.
 * @apiParam line2 Subscription's line2.
 * @apiParam fitness_goal Subscription's fitness_goal.
 * @apiParam diet_preference Subscription's diet_preference.
 * @apiParam meal_preference Subscription's meal_preference.
 * @apiParam meals Subscription's meals.
 * @apiParam meal_duration Subscription's meal_duration.
 * @apiParam start_date Subscription's start_date.
 * @apiParam gender Subscription's gender.
 * @apiParam pincode Subscription's pincode.
 * @apiParam physical_activity Subscription's physical_activity.
 * @apiSuccess {Object} subscription Subscription's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Subscription not found.
 * @apiError 401 master access only.
 */
router.post(
  "/",
  body({
    name,
    mobile,
    age,
    weight,
    line0,
    line1,
    line2,
    fitness_goal,
    diet_preference,
    meal_preference,
    meals,
    meal_duration,
    start_date,
    gender,
    pincode,
    physical_activity,
  }),
  create
);

/**
 * @api {get} /subscriptions Retrieve subscriptions
 * @apiName RetrieveSubscriptions
 * @apiGroup Subscription
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of subscriptions.
 * @apiSuccess {Object[]} rows List of subscriptions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get("/", master(), query(), index);

/**
 * @api {get} /subscriptions/:id Retrieve subscription
 * @apiName RetrieveSubscription
 * @apiGroup Subscription
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} subscription Subscription's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Subscription not found.
 * @apiError 401 master access only.
 */
router.get("/:id", master(), show);

/**
 * @api {put} /subscriptions/:id Update subscription
 * @apiName UpdateSubscription
 * @apiGroup Subscription
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Subscription's name.
 * @apiParam mobile Subscription's mobile.
 * @apiParam age Subscription's age.
 * @apiParam weight Subscription's weight.
 * @apiParam line0 Subscription's line0.
 * @apiParam line1 Subscription's line1.
 * @apiParam line2 Subscription's line2.
 * @apiParam fitness_goal Subscription's fitness_goal.
 * @apiParam diet_preference Subscription's diet_preference.
 * @apiParam meal_preference Subscription's meal_preference.
 * @apiParam meals Subscription's meals.
 * @apiParam meal_duration Subscription's meal_duration.
 * @apiParam start_date Subscription's start_date.
 * @apiParam gender Subscription's gender.
 * @apiParam pincode Subscription's pincode.
 * @apiParam physical_activity Subscription's physical_activity.
 * @apiSuccess {Object} subscription Subscription's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Subscription not found.
 * @apiError 401 master access only.
 */
router.put(
  "/:id",
  master(),
  body({
    name,
    mobile,
    age,
    weight,
    line0,
    line1,
    line2,
    fitness_goal,
    diet_preference,
    meal_preference,
    meals,
    meal_duration,
    start_date,
    gender,
    pincode,
    physical_activity,
  }),
  update
);

/**
 * @api {delete} /subscriptions/:id Delete subscription
 * @apiName DeleteSubscription
 * @apiGroup Subscription
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Subscription not found.
 * @apiError 401 master access only.
 */
router.delete("/:id", master(), destroy);

export default router;
