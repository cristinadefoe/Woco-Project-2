module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        photo: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        initiation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        paid: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        appearance: {
            type: DataTypes.INTEGER,
            allowNull: true
            // validate: {
            //     len: [1, 255]
            // }
        },
        // conversation: {
        //     type: DataTypes.INTEGER
        //     // allowNull: false,
        //     // validate: {
        //     //     len: [1, 255]
        //     // }
        // },
        // manners: {
        //     type: DataTypes.INTEGER
        //     // allowNull: false,
        //     // validate: {
        //     //     len: [1, 255]
        //     // }
        // },
        // attraction: {
        //     type: DataTypes.INTEGER
        //     // allowNull: false,
        //     // validate: {
        //     //     len: [1, 255]
        //     // }
        // },
        // smoochable: {
        //     type: DataTypes.INTEGER
        //     // allowNull: false,
        //     // validate: {
        //     //     len: [1, 255]
        //     // }
        // },
        // interaction: {
        //     type: DataTypes.INTEGER
        //     // allowNull: false,
        //     // validate: {
        //     //     len: [1, 255]
        //     // }
        // },
        // impression: {
        //     type: DataTypes.INTEGER
        //     // allowNull: false,
        //     // validate: {
        //     //     len: [1, 255]
        //     // }
        // },
    });
    console.log("returning post")
    return Post;
};