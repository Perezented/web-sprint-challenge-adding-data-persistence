exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("projects")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("projects").insert([
                {
                    name: "finish sprint",
                    description: "no desc right now",
                },
                {
                    name: "maybe do stretch",
                    description: "still no desc right now",
                },
                {
                    name: "brush teeth",
                    description: "look at name value",
                },
            ]);
        });
};
