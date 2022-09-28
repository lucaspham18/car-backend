module.exports = (sequelize, Sequelize) => {
    const CorePositions = sequelize.define("core_positions");
    CorePositions.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        system_code: {
          type: Sequelize.STRING
        },
        dept_id: {
            type: Sequelize.INTEGER
        },
        job_position: {
            type: Sequelize.INTEGER
        },
        glone: {
            type: Sequelize.INTEGER
        },
        level: {
            type: Sequelize.INTEGER
        },
        coefficients_salary: {
            type: Sequelize.INTEGER
        },
        effective_date: {
            type: Sequelize.DATE
        },
        expired_date: {
            type: Sequelize.DATE
        },
        is_active: {
            type: Sequelize.INTEGER
        },
        created_time: {
            type: Sequelize.DATE
        },
        created_by: {
            type: Sequelize.STRING
        },
        updated_time: {
            type: Sequelize.DATE
        },
        updated_by: {
            type: Sequelize.STRING
        },
    }, {sequelize, freezeTableName: true});

    return CorePositions;
};
