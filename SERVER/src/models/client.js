
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Client',{
    id: {type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4},
    name: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {min: 2, max: 15}},
    lastName: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {min: 2, max: 15}},
    created: {type: DataTypes.BOOLEAN, defaultValue: true}
  },{
    timestamps: false
  })
};