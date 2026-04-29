const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'jiancha',
  password: process.env.DB_PASSWORD || 'jianchapassword',
  database: process.env.DB_NAME || 'jiancha_car_rental',
  waitForConnections: true,
  connectionLimit: 10
});

// Run migrations on startup
const runMigrations = async () => {
  try {
    const connection = await pool.getConnection();
    
    // Check if columns exist and add them if not
    const [columns] = await connection.query('SHOW COLUMNS FROM cars');
    const columnNames = columns.map(col => col.Field);
    
    if (!columnNames.includes('discount_percent')) {
      await connection.query('ALTER TABLE cars ADD COLUMN discount_percent INT DEFAULT 0');
    }
    
    if (!columnNames.includes('is_promotion')) {
      await connection.query('ALTER TABLE cars ADD COLUMN is_promotion BOOLEAN DEFAULT FALSE');
    }
    
    // Check and add columns to bookings table
    const [bookingColumns] = await connection.query('SHOW COLUMNS FROM bookings');
    const bookingColumnNames = bookingColumns.map(col => col.Field);
    
    if (!bookingColumnNames.includes('pickup_location')) {
      await connection.query('ALTER TABLE bookings ADD COLUMN pickup_location VARCHAR(100)');
    }
    if (!bookingColumnNames.includes('dropoff_location')) {
      await connection.query('ALTER TABLE bookings ADD COLUMN dropoff_location VARCHAR(100)');
    }
    if (!bookingColumnNames.includes('dropoff_fee')) {
      await connection.query('ALTER TABLE bookings ADD COLUMN dropoff_fee DECIMAL(10,2) DEFAULT 0.00');
    }

    // Modify bookings status enum
    await connection.query(`ALTER TABLE bookings MODIFY COLUMN status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending'`);
    
    // Create reviews table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id INT AUTO_INCREMENT PRIMARY KEY,
        booking_id INT NOT NULL UNIQUE,
        user_id INT NOT NULL,
        car_id INT NOT NULL,
        rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
        comment TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (booking_id) REFERENCES bookings(id),
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (car_id) REFERENCES cars(id)
      )
    `);
    
    connection.release();
    console.log('Database migrations completed');
  } catch (err) {
    console.error('Migration error:', err);
  }
};

runMigrations();

module.exports = pool;
