import { Feedbacks } from '.'

let feedbacks

beforeEach(async () => {
  feedbacks = await Feedbacks.create({ name: 'test', email: 'test', message: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = feedbacks.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(feedbacks.id)
    expect(view.name).toBe(feedbacks.name)
    expect(view.email).toBe(feedbacks.email)
    expect(view.message).toBe(feedbacks.message)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = feedbacks.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(feedbacks.id)
    expect(view.name).toBe(feedbacks.name)
    expect(view.email).toBe(feedbacks.email)
    expect(view.message).toBe(feedbacks.message)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
