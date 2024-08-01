const {DataTypes} = require("sequelize")
const sequelize = require("../utils/connectToDB")

const User = sequelize.define("User", {
    first_name:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    last_name:{
        type:DataTypes.STRING(30),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    address: {
        type : DataTypes.STRING(200),
        allowNull: true
    },
    role:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2       // 0 = admin, 1 = hotel owner and 2 = customer
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'updated_at'
    },
    deleted_at:{
        type: DataTypes.DATE,
        allowNull: true
    }
},
{
    freezeTableName: true
}
)
// User.associate = (models) => {
//     User.hasMany(sequelize.define('Hotel'));
//     User.hasMany(sequelize.define('Booking'));
// }
module.exports = User

