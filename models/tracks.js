/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tracks', {
		'TrackId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		'Name': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'AlbumId': {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'albums',
				key: 'AlbumId'
			}
		},
		'MediaTypeId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'media_types',
				key: 'MediaTypeId'
			}
		},
		'GenreId': {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'genres',
				key: 'GenreId'
			}
		},
		'Composer': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'Milliseconds': {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		'Bytes': {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		'UnitPrice': {
			type: DataTypes.DOUBLE,
			allowNull: false
		}
	}, {
		tableName: 'tracks',
		timestamps: false
	});
};
