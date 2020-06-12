exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("resources")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("resources").insert([
                {
                    name: "computer",
                    resourceDescription: "magic box machine",
                },
                {
                    name: "mouse",
                    resourceDescription:
                        "not a live animal but a plastic clicker machine",
                },
                {
                    name: "room",
                    resourceDescription: "dark place where coder likes to code",
                },
            ]);
        });
};
