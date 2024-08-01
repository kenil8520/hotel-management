const {DataTypes} = require("sequelize")
const sequelize = require("../utils/connectToDB")

const Room = sequelize.define("Room", {
    room_number:{
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    price:{
        type:DataTypes.INTEGER(),
        allowNull: false
    },
    is_available:{
        type: DataTypes.BOOLEAN(),
        allowNull: false,
        defaultValue: 0   // 0 for available and 1 for not available
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
    hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Hotel',
            key: 'id'
        }
    },
},
{
    freezeTableName: true
}
)
// Room.associate = (models) => {
//     Room.belongsTo(sequelize.define('Hotel'));
//     Room.hasMany(sequelize.define('Booking'));
// }
module.exports = Room

