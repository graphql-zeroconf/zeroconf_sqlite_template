/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoice_items', {
		'InvoiceLineId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		'InvoiceId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'invoices',
				key: 'InvoiceId'
			}
		},
		'TrackId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tracks',
				key: 'TrackId'
			}
		},
		'UnitPrice': {
			type: DataTypes.DOUBLE,
			allowNull: false
		},
		'Quantity': {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'invoice_items',
		timestamps: false
	});
};
