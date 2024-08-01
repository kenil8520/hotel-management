const {DataTypes} = require("sequelize")
const sequelize = require("../utils/connectToDB")

const Booking = sequelize.define("Booking", {
    checkin_date:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    checkout_date:{
        type: DataTypes.DATE,
        allowNull: false,
    },

    checkin_time:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    checkout_time:{
        type: DataTypes.DATE,
        allowNull: false,
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
    hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Hotel',
            key: 'id'
        }
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Room',
            key: 'id'
        }
    },
},
{
    freezeTableName: true
}
)
// Booking.associate = (models) => {
    // Booking.belongsTo(sequelize.define('User'));
    // Booking.belongsTo(sequelize.define('Hotel'));
    // Booking.belongsTo(sequelize.define('Room'));
    // Booking.hasOne(sequelize.define('Payment'));
// }
module.exports = Booking

