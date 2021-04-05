import { success, notFound } from '../../services/response/'
import { Subscription } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Subscription.create(body)
    .then((subscription) => subscription.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Subscription.count(query)
    .then(count => Subscription.find(query, select, cursor)
      .then((subscriptions) => ({
        count,
        rows: subscriptions.map((subscription) => subscription.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Subscription.findById(params.id)
    .then(notFound(res))
    .then((subscription) => subscription ? subscription.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Subscription.findById(params.id)
    .then(notFound(res))
    .then((subscription) => subscription ? Object.assign(subscription, body).save() : null)
    .then((subscription) => subscription ? subscription.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Subscription.findById(params.id)
    .then(notFound(res))
    .then((subscription) => subscription ? subscription.remove() : null)
    .then(success(res, 204))
    .catch(next)
