const fs = require("fs");
const faker = require("faker");

function generateFakeUsers(count) {
    const users = [];

    for (let i = 0; i < count; i++) {
        const user = {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            createdAt: faker.date.past().toISOString(),
        };
        users.push(user);
    }

    return users;
}

function saveUsersToJsonFile(users, fileName) {
    fs.writeFileSync(fileName, JSON.stringify(users, null, 2));
    console.log(
        `Generated ${users.length} fake users and saved to ${fileName}`
    );
}

// Generate 1000 fake users
const fakeUsers = generateFakeUsers(1000);

// Save fake users to a JSON file
saveUsersToJsonFile(fakeUsers, "fakeUsers.json");
