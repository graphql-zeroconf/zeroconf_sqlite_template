/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('albums', {
		'AlbumId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		'Title': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'ArtistId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'artists',
				key: 'ArtistId'
			}
		}
	}, {
		tableName: 'albums',
		timestamps: false
	});
};
