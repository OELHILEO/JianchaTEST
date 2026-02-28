const request = require('supertest');
const app = require('../src/app');
const db = require('../src/database/db');

let token;

beforeAll(async () => {
  await db.query('DELETE FROM users WHERE email = ?', ['bookingtest@test.com']);
  await request(app)
    .post('/api/auth/register')
    .send({ name: 'Booking User', email: 'bookingtest@test.com', password: '123456' });

  const res = await request(app)
    .post('/api/auth/login')
    .send({ email: 'bookingtest@test.com', password: '123456' });
  token = res.body.token;
});

afterAll(async () => {
  await db.query('DELETE FROM bookings WHERE user_id = (SELECT id FROM users WHERE email = ?)', ['bookingtest@test.com']);
  await db.query('DELETE FROM users WHERE email = ?', ['bookingtest@test.com']);
  await db.query('UPDATE cars SET is_available = TRUE WHERE id = 2');
  await db.end();
});

describe('GET /api/bookings', () => {
  it('should return 401 without token', async () => {
    const res = await request(app).get('/api/bookings');
    expect(res.statusCode).toBe(401);
  });

  it('should return bookings for authenticated user', async () => {
    const res = await request(app)
      .get('/api/bookings')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /api/bookings', () => {
  it('should create booking successfully', async () => {
    const res = await request(app)
      .post('/api/bookings')
      .set('Authorization', `Bearer ${token}`)
      .send({ car_id: 2, pickup_date: '2026-03-01', return_date: '2026-03-03' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('total_price');
  });

  it('should fail without token', async () => {
    const res = await request(app)
      .post('/api/bookings')
      .send({ car_id: 2, pickup_date: '2026-03-01', return_date: '2026-03-03' });
    expect(res.statusCode).toBe(401);
  });

  it('should fail with missing fields', async () => {
    const res = await request(app)
      .post('/api/bookings')
      .set('Authorization', `Bearer ${token}`)
      .send({ car_id: 2 });
    expect(res.statusCode).toBe(400);
  });
});
