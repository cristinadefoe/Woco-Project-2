module.exports = function (sequelize, DataTypes) {
    var Mentor = sequelize.define("Mentor", {

        // Creates a "Mentor" model that matches up with DB
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        scores: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },

        photo: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

    });

    return Mentor;
};

