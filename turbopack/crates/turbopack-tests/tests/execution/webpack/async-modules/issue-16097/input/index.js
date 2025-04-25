import i, { foo } from './wont-run-tla'

it('should have value imported from wont-run-tla', async () => {
  expect(i).toBe(42)
  expect(foo).toBe(undefined)
})
