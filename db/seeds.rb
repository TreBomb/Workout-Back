puts("Seeding database!")

puts("Seeding users...")
user1 = User.create(name: "Test1", email:"test1@test.com", password: "test123", password_confirmation: "test123", goal: "cut")

puts("Seeding exercises...")
def api_key
    ENV["EXERCISE_API_KEY"]
end

def seed_api(url)
    api_data = { key: api_key }

    response = Excon.get(
      url,
      headers: {
        'X-RapidAPI-Host' => 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key' => api_data[:key]
      }
    )
    return nil if response.status != 200
    arrays = JSON.parse(response.body)
    arrays.each do |a|
        Exercise.create(name: a["name"], video: a["gifUrl"], muscle_group: a["bodyPart"], target: a["target"], equipment: a["equipment"])
    end
end

def log_exercises
    seed_api(
      "https://exercisedb.p.rapidapi.com/exercises"
    )
end

log_exercises() 

puts("Done!")