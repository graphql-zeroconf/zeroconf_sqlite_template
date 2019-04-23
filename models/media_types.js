/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('media_types', {
		'MediaTypeId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		'Name': {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'media_types',
		timestamps: false
	});
};
