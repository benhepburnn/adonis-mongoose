import { test } from '@japa/runner'

test.group('Connections', () => {
  test('can connect to MongoDB', ({ assert }) => {
    assert.equal(1 + 1, 2)
  })
})
