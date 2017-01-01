var Sequelize= require('sequelize')

module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    comment: DataTypes.STRING
  }, {
    // classMethods: {
    //   associate: function(models) {
    //     Comment.belongsTo(models.User, {
    //       onDelete: "CASCADE",
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   }
    // }
  });

  return Employee;
};




// // var Sequelize= require('sequelize')


// module.exports = function(sequelize, DataTypes) {
//   var Employee = sequelize.define("Employee", {
//     name: DataTypes.STRING

//   }, {
//     // classMethods: {
//     //   associate: function(models) {
//     //     Task.belongsTo(models.User, {
//     //       onDelete: "CASCADE",
//     //       foreignKey: {
//     //         allowNull: false
//     //       }
//     //     });
//     //   }
//     // }
//   });

//   return Employee;
// };