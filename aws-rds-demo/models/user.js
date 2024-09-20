const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('User', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    })
}