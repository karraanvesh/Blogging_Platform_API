
module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE BLOGS MODIFY COLUMN TAGS JSON;
      `);
  },

  async down (queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE BLOGS MODIFY COLUMN TAGS VARCHAR(255);
      `);
  }
};
