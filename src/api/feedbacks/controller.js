import { success, notFound } from "../../services/response/";
import { Feedbacks } from ".";
import { sendMail } from "../../services/sendgrid";

export const create = ({ bodymen: { body } }, res, next) =>
  Feedbacks.create(body)
    .then((feedbacks) => feedbacks.view(true))
    .then(success(res, 201))
    .catch(next);

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Feedbacks.find(query, select, cursor)
    .then((feedbacks) => feedbacks.map((feedbacks) => feedbacks.view()))
    .then(success(res))
    .catch(next);

export const show = ({ params }, res, next) =>
  Feedbacks.findById(params.id)
    .then(notFound(res))
    .then((feedbacks) => (feedbacks ? feedbacks.view() : null))
    .then(
      sendMail(
        "healthybee.fit.developer@gmail.com",
        "prasanna.1616@gmail.com",
        "test",
        "test"
      )
    )
    .then(success(res))
    .catch(next);
