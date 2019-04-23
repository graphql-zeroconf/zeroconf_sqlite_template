/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('genres', {
		'GenreId': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		'Name': {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'genres',
		timestamps: false
	});
};
