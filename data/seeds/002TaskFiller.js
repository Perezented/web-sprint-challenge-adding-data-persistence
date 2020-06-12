exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("tasks")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("tasks").insert([
                { description: "not get distracted", projectID: 1 },
                { description: "Work on sprint", projectID: 1 },
                { description: "continue to work on sprint", projectID: 2 },
            ]);
        });
};
