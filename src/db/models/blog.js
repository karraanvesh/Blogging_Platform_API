const sequelize = require("./sequelize.js");
const { Model , DataTypes } =  require("sequelize");

class Blog extends Model {

}

Blog.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true,
    },
    title : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    tags: {
        type: DataTypes.JSON,
        defaultValue: null,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
    deletedAt: {
        type: DataTypes.DATE,
        defaultValue: null,
    }
} , {
    tableName   : "blogs",
    sequelize   : sequelize,
    underscored : true, // createdAt --> created_at ( automatically handles the snake case)
    timestamps  : true,
});

module.exports = Blog;