const {DataTypes} = require("sequelize")
const sequelize = require("../utils/connectToDB")

const Payment = sequelize.define("Payment", {
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0  // 0 not confirm 1 confirm payment
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
    booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Booking',
            key: 'id'
        }
    },
},
{
    freezeTableName: true
}
)
// Payment.associate = (models) => {
    // Payment.belongsTo(sequelize.define('Booking'));
// }
module.exports = Payment

