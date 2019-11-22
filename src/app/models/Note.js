import Sequelize, { Model } from 'sequelize';


class Note extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        content: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  };

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'Author' });
  };

};

export default Note;