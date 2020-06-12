exports.up = function (knex) {
    return knex.schema
        .createTable("projects", (tbl) => {
            tbl.increments("projectID");
            tbl.string("name").notNullable().index();
            tbl.string("description", 255);
            tbl.boolean("completed").notNullable().defaultTo(0);
        })
        .createTable("resources", (tbl) => {
            tbl.increments("resourceID");
            tbl.string("name").unique().index().notNullable();
            tbl.string("description", 255);
        })
        .createTable("tasks", (tbl) => {
            tbl.increments("taskID");
            tbl.string("description", 255).notNullable().index();
            tbl.string("notes", 255);
            tbl.boolean("completed").notNullable().defaultTo(0);
            tbl.integer("ProjectID")
                .unsigned()
                .references("projects.projectID")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })
        .createTable("projectResources", (tbl) => {
            tbl.increments();
            tbl.integer("ResourceID")
                .unsigned()
                .references("resources.resourceID")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.integer("ProjectID")
                .unsigned()
                .references("projects.projectID")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("projectResources");
    return knex.schema.dropTableIfExists("tasks");
    return knex.schema.dropTableIfExists("resources");
    return knex.schema.dropTableIfExists("projects");
};
