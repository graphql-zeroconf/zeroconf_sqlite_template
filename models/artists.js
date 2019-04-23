/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('artists', {
		'ArtistId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		'Name': {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'artists',
		timestamps: false
	});
};
