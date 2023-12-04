
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('Product', {
    id: {type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4},
    name: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {min: 2, max: 15}},
    price: {type: DataTypes.DECIMAL(10, 2)},
    categories: {type: DataTypes.ENUM('fruta', 'verdura')},
    created: {type: DataTypes.BOOLEAN, defaultValue: true}
  },{
    timestamps : false
  });
};