exports.up = function (knex) {
    return knex.schema
        .createTable("projects", (tbl) => {
            tbl.increments("projectsID");
            tbl.string("name").notNullable().index();
            tbl.string(("description", 255));
            tbl.boolean("completed").notNullable().defaultTo(0);
        })
        .createTable("Resource", (tbl) => {
            tbl.increments();
            tbl.unique("name").index().notNullable();
            tbl.string("description", 255);
        })
        .createTable("Task", (tbl) => {
            tbl.increments("taskID");
            tbl.string("description", 255).notNullable().index();
            tbl.sting("notes", 255);
            tbl.boolean("completed").notNullable().defaultTo(0);
            tbl.integer("ProjectID")
                .unsigned()
                .references("projects.projectsID");
        });
};

exports.down = function (knex) {};
