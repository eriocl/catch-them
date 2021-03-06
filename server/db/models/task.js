const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Report, Category }) {
      // define association here
      this.belongsToMany(User, { through: 'UserTasks', foreignKey: 'task_id' });
      this.belongsToMany(Category, { through: 'CategoryTasks', foreignKey: 'task_id' });
      this.hasMany(Report, { foreignKey: 'task_id' });
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Task',
    },
  );
  return Task;
};
