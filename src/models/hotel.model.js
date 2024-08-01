const {DataTypes} = require("sequelize")
const sequelize = require("../utils/connectToDB")

const Hotel = sequelize.define("Hotel", {
    hotel_name:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    address:{
        type:DataTypes.STRING(200),
        allowNull: false
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
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
},
{
    freezeTableName: true
}
)
// User.associate = (models) => {
//     Hotel.belongsTo(sequelize.define('User'));
//     Hotel.hasMany(sequelize.define('Room'));
//     Hotel.hasMany(sequelize.define('Booking'));
// }
module.exports = Hotel

