import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Feedbacks } from '.'

const app = () => express(apiRoot, routes)

let userSession, adminSession, feedbacks

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  feedbacks = await Feedbacks.create({})
})

test('POST /feedbacks 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', email: 'test', message: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.message).toEqual('test')
})

test('GET /feedbacks 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /feedbacks 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /feedbacks 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /feedbacks/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${feedbacks.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(feedbacks.id)
})

test('GET /feedbacks/:id 401 (user)', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${feedbacks.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /feedbacks/:id 401', async () => {
  const { status } = await request(app())
    .get(`${apiRoot}/${feedbacks.id}`)
  expect(status).toBe(401)
})

test('GET /feedbacks/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
