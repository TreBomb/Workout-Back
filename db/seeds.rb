puts("Seeding database!")

puts("Seeding users...")
user1 = User.create(name: "Test1", email:"test1@test.com", password: "test123", password_confirmation: "test123", goal: "cut")

puts("Seeding exercises...")

puts("Done!")