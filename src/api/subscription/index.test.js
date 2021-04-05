import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Subscription } from '.'

const app = () => express(apiRoot, routes)

let subscription

beforeEach(async () => {
  subscription = await Subscription.create({})
})

test('POST /subscriptions 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, name: 'test', mobile: 'test', age: 'test', weight: 'test', line0: 'test', line1: 'test', line2: 'test', fitness_goal: 'test', diet_preference: 'test', meal_preference: 'test', meals: 'test', meal_duration: 'test', start_date: 'test', gender: 'test', pincode: 'test', physical_activity: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.mobile).toEqual('test')
  expect(body.age).toEqual('test')
  expect(body.weight).toEqual('test')
  expect(body.line0).toEqual('test')
  expect(body.line1).toEqual('test')
  expect(body.line2).toEqual('test')
  expect(body.fitness_goal).toEqual('test')
  expect(body.diet_preference).toEqual('test')
  expect(body.meal_preference).toEqual('test')
  expect(body.meals).toEqual('test')
  expect(body.meal_duration).toEqual('test')
  expect(body.start_date).toEqual('test')
  expect(body.gender).toEqual('test')
  expect(body.pincode).toEqual('test')
  expect(body.physical_activity).toEqual('test')
})

test('POST /subscriptions 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /subscriptions 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /subscriptions 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /subscriptions/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${subscription.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(subscription.id)
})

test('GET /subscriptions/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${subscription.id}`)
  expect(status).toBe(401)
})

test('GET /subscriptions/:id 404 (master)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})

test('PUT /subscriptions/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${subscription.id}`)
    .send({ access_token: masterKey, name: 'test', mobile: 'test', age: 'test', weight: 'test', line0: 'test', line1: 'test', line2: 'test', fitness_goal: 'test', diet_preference: 'test', meal_preference: 'test', meals: 'test', meal_duration: 'test', start_date: 'test', gender: 'test', pincode: 'test', physical_activity: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(subscription.id)
  expect(body.name).toEqual('test')
  expect(body.mobile).toEqual('test')
  expect(body.age).toEqual('test')
  expect(body.weight).toEqual('test')
  expect(body.line0).toEqual('test')
  expect(body.line1).toEqual('test')
  expect(body.line2).toEqual('test')
  expect(body.fitness_goal).toEqual('test')
  expect(body.diet_preference).toEqual('test')
  expect(body.meal_preference).toEqual('test')
  expect(body.meals).toEqual('test')
  expect(body.meal_duration).toEqual('test')
  expect(body.start_date).toEqual('test')
  expect(body.gender).toEqual('test')
  expect(body.pincode).toEqual('test')
  expect(body.physical_activity).toEqual('test')
})

test('PUT /subscriptions/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${subscription.id}`)
  expect(status).toBe(401)
})

test('PUT /subscriptions/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, name: 'test', mobile: 'test', age: 'test', weight: 'test', line0: 'test', line1: 'test', line2: 'test', fitness_goal: 'test', diet_preference: 'test', meal_preference: 'test', meals: 'test', meal_duration: 'test', start_date: 'test', gender: 'test', pincode: 'test', physical_activity: 'test' })
  expect(status).toBe(404)
})

test('DELETE /subscriptions/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${subscription.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /subscriptions/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${subscription.id}`)
  expect(status).toBe(401)
})

test('DELETE /subscriptions/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
