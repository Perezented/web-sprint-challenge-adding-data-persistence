exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("projects")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("projects").insert([
                {
                    name: "finish sprint",
                    projectDescription: "no desc right now",
                },
                {
                    name: "maybe do stretch",
                    projectDescription: "still no desc right now",
                },
                {
                    name: "brush teeth",
                    projectDescription: "look at name value",
                },
            ]);
        });
};
