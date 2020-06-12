exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("projectResources")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("projectResources").insert([
                { ResourceID: 1, ProjectID: 1 },
                { ResourceID: 2, ProjectID: 1 },
                { ResourceID: 3, ProjectID: 1 },
                { ResourceID: 4, ProjectID: 1 },
                { ResourceID: 1, ProjectID: 4 },
                { ResourceID: 5, ProjectID: 3 },
                { ResourceID: 1, ProjectID: 2 },
                { ResourceID: 2, ProjectID: 2 },
                { ResourceID: 3, ProjectID: 2 },
                { ResourceID: 4, ProjectID: 2 },
            ]);
        });
};
