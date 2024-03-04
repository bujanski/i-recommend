const fs = require('fs');

function generateFakeRecommendations(count) {
    const recommendations = [];

    for (let i = 0; i < count; i++) {
        const ranking = Math.floor(Math.random() * 25) + 1;
        const userId = Math.floor(Math.random() * 1000) + 1;

        let recommendation = {
            ranking,
            UserId: userId
        };

        // Decide whether to add MovieId, BookId, or VideogameId
        const randomType = Math.floor(Math.random() * 3);
        switch (randomType) {
            case 0:
                recommendation.MovieId = Math.floor(Math.random() * 890) + 1;
                break;
            case 1:
                recommendation.BookId = Math.floor(Math.random() * 200) + 1;
                break;
            case 2:
                recommendation.VideogameId = Math.floor(Math.random() * 1000) + 1;
                break;
        }

        recommendations.push(recommendation);
    }

    // Convert recommendations to JSON and write to a file
    const jsonData = JSON.stringify(recommendations, null, 2);
    fs.writeFileSync('fake_recommendations.json', jsonData);

    console.log(`${count} fake recommendations generated and saved to fake_recommendations.json`);
}

// Example: Generate 10 fake recommendations
generateFakeRecommendations(1000);
