/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoices', {
		'InvoiceId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		'CustomerId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'customers',
				key: 'CustomerId'
			}
		},
		'InvoiceDate': {
			type: DataTypes.DATE,
			allowNull: false
		},
		'BillingAddress': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'BillingCity': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'BillingState': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'BillingCountry': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'BillingPostalCode': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'Total': {
			type: DataTypes.DOUBLE,
			allowNull: false
		}
	}, {
		tableName: 'invoices',
		timestamps: false
	});
};
