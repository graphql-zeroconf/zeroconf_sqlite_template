/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('playlists', {
		'PlaylistId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		'Name': {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'playlists',
		timestamps: false
	});
};
