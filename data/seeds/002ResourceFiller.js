exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("resources")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("resources").insert([
                {
                    name: "computer",
                    description: "magic box machine",
                },
                {
                    name: "mouse",
                    description:
                        "not a live animal but a plastic clicker machine",
                },
                {
                    name: "room",
                    description: "dark place where coder likes to code",
                },
            ]);
        });
};
