/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('playlist_track', {
		'PlaylistId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'playlists',
				key: 'PlaylistId'
			}
		},
		'TrackId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tracks',
				key: 'TrackId'
			}
		}
	}, {
		tableName: 'playlist_track',
		timestamps: false
	});
};
