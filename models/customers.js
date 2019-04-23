/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customers', {
		'CustomerId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		'FirstName': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'LastName': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'Company': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'Address': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'City': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'State': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'Country': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'PostalCode': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'Phone': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'Fax': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'Email': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'SupportRepId': {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'employees',
				key: 'EmployeeId'
			}
		}
	}, {
		tableName: 'customers',
		timestamps: false
	});
};
