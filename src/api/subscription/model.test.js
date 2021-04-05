import { Subscription } from '.'

let subscription

beforeEach(async () => {
  subscription = await Subscription.create({ name: 'test', mobile: 'test', age: 'test', weight: 'test', line0: 'test', line1: 'test', line2: 'test', fitness_goal: 'test', diet_preference: 'test', meal_preference: 'test', meals: 'test', meal_duration: 'test', start_date: 'test', gender: 'test', pincode: 'test', physical_activity: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = subscription.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(subscription.id)
    expect(view.name).toBe(subscription.name)
    expect(view.mobile).toBe(subscription.mobile)
    expect(view.age).toBe(subscription.age)
    expect(view.weight).toBe(subscription.weight)
    expect(view.line0).toBe(subscription.line0)
    expect(view.line1).toBe(subscription.line1)
    expect(view.line2).toBe(subscription.line2)
    expect(view.fitness_goal).toBe(subscription.fitness_goal)
    expect(view.diet_preference).toBe(subscription.diet_preference)
    expect(view.meal_preference).toBe(subscription.meal_preference)
    expect(view.meals).toBe(subscription.meals)
    expect(view.meal_duration).toBe(subscription.meal_duration)
    expect(view.start_date).toBe(subscription.start_date)
    expect(view.gender).toBe(subscription.gender)
    expect(view.pincode).toBe(subscription.pincode)
    expect(view.physical_activity).toBe(subscription.physical_activity)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = subscription.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(subscription.id)
    expect(view.name).toBe(subscription.name)
    expect(view.mobile).toBe(subscription.mobile)
    expect(view.age).toBe(subscription.age)
    expect(view.weight).toBe(subscription.weight)
    expect(view.line0).toBe(subscription.line0)
    expect(view.line1).toBe(subscription.line1)
    expect(view.line2).toBe(subscription.line2)
    expect(view.fitness_goal).toBe(subscription.fitness_goal)
    expect(view.diet_preference).toBe(subscription.diet_preference)
    expect(view.meal_preference).toBe(subscription.meal_preference)
    expect(view.meals).toBe(subscription.meals)
    expect(view.meal_duration).toBe(subscription.meal_duration)
    expect(view.start_date).toBe(subscription.start_date)
    expect(view.gender).toBe(subscription.gender)
    expect(view.pincode).toBe(subscription.pincode)
    expect(view.physical_activity).toBe(subscription.physical_activity)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})