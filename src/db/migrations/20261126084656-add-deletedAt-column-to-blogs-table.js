module.exports = {
  async up (queryInterface, ) {
    await queryInterface.sequelize.query(`
      ALTER TABLE BLOGS ADD COLUMN deleted_at TIMESTAMP DEFAULT NULL;
      `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE BLOGS DROP COLUMN deleted_at;
      `);
  }
};
