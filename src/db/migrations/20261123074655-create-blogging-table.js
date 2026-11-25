module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS BLOGS (
      ID INT AUTO_INCREMENT PRIMARY KEY , 
      TITLE VARCHAR(255) NOT NULL,
      CONTENT VARCHAR(255) NOT NULL,
      CATEGORY VARCHAR(255),
      TAGS VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );`);
  },

  async down (queryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS BLOGS;
      `);
  }
};