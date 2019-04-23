/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('employees', {
		'EmployeeId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		'LastName': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'FirstName': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'Title': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'ReportsTo': {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'employees',
				key: 'EmployeeId'
			}
		},
		'BirthDate': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'HireDate': {
			type: DataTypes.DATE,
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
			allowNull: true
		}
	}, {
		tableName: 'employees',
		timestamps: false
	});
};
