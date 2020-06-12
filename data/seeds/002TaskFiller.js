exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("tasks")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("tasks").insert([
                { taskDescription: "not get distracted", projectID: 1 },
                { taskDescription: "Work on sprint", projectID: 1 },
                { taskDescription: "continue to work on sprint", projectID: 2 },
            ]);
        });
};
