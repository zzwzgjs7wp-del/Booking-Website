-- Sample data for AI Booking Solutions
-- Run after schema.sql and policies.sql
-- Use for development, demos, and testing

-- ============================================
-- BUSINESSES
-- ============================================
INSERT INTO businesses (id, name, slug, email, phone, timezone)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'Demo Service Co', 'demo-service', 'demo@aibookingsolutions.com', '555-0100', 'America/New_York'),
  ('00000000-0000-0000-0000-000000000002', 'Sample Business LLC', 'sample-business', 'hello@sample.com', '555-0200', 'America/Los_Angeles')
ON CONFLICT DO NOTHING;

-- ============================================
-- SERVICES
-- ============================================
INSERT INTO services (business_id, name, description, duration_minutes, price_cents, is_active)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'Consultation', 'Initial consultation', 30, 5000, true),
  ('00000000-0000-0000-0000-000000000001', 'Repair', 'Standard repair service', 60, 15000, true),
  ('00000000-0000-0000-0000-000000000001', 'Installation', 'Full installation', 240, 50000, true),
  ('00000000-0000-0000-0000-000000000001', 'Maintenance', 'Routine maintenance', 45, 10000, true),
  ('00000000-0000-0000-0000-000000000002', 'Basic Service', 'Basic service package', 60, 12000, true)
ON CONFLICT DO NOTHING;

-- ============================================
-- STAFF
-- ============================================
INSERT INTO staff (business_id, name, email, phone, is_active)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'John Smith', 'john@demo.com', '555-1001', true),
  ('00000000-0000-0000-0000-000000000001', 'Jane Doe', 'jane@demo.com', '555-1002', true),
  ('00000000-0000-0000-0000-000000000002', 'Bob Johnson', 'bob@sample.com', '555-2001', true)
ON CONFLICT DO NOTHING;

-- Staff weekly hours (Mon-Fri 9am-5pm)
INSERT INTO staff_weekly_hours (staff_id, day_of_week, start_time, end_time)
SELECT s.id, d.day_of_week, '09:00'::TIME, '17:00'::TIME
FROM staff s
CROSS JOIN (SELECT unnest(ARRAY[1,2,3,4,5]) AS day_of_week) d
WHERE s.business_id = '00000000-0000-0000-0000-000000000001'
ON CONFLICT DO NOTHING;

INSERT INTO staff_weekly_hours (staff_id, day_of_week, start_time, end_time)
SELECT s.id, d.day_of_week, '09:00'::TIME, '17:00'::TIME
FROM staff s
CROSS JOIN (SELECT unnest(ARRAY[1,2,3,4,5]) AS day_of_week) d
WHERE s.business_id = '00000000-0000-0000-0000-000000000002'
ON CONFLICT DO NOTHING;

-- ============================================
-- CUSTOMERS
-- ============================================
INSERT INTO customers (business_id, name, email, phone)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'Alice Customer', 'alice@example.com', '555-3001'),
  ('00000000-0000-0000-0000-000000000001', 'Bob Customer', 'bob@example.com', '555-3002'),
  ('00000000-0000-0000-0000-000000000001', 'Charlie Customer', 'charlie@example.com', '555-3003'),
  ('00000000-0000-0000-0000-000000000001', 'Diana Client', 'diana@example.com', '555-3004'),
  ('00000000-0000-0000-0000-000000000002', 'Eve User', 'eve@example.com', '555-3005')
ON CONFLICT DO NOTHING;

-- ============================================
-- APPOINTMENTS (sample past & future)
-- ============================================
-- Past appointments (for churn/recency analysis) - simple sample
INSERT INTO appointments (business_id, customer_id, service_id, staff_id, start_time, end_time, status)
SELECT
  '00000000-0000-0000-0000-000000000001',
  c.id,
  (SELECT id FROM services WHERE business_id = '00000000-0000-0000-0000-000000000001' LIMIT 1),
  (SELECT id FROM staff WHERE business_id = '00000000-0000-0000-0000-000000000001' LIMIT 1),
  (CURRENT_DATE - 14) + TIME '10:00',
  (CURRENT_DATE - 14) + TIME '11:00',
  'completed'
FROM customers c
WHERE c.business_id = '00000000-0000-0000-0000-000000000001' AND c.name = 'Alice Customer';

-- Future appointment (for reminder job)
INSERT INTO appointments (business_id, customer_id, service_id, staff_id, start_time, end_time, status)
SELECT
  '00000000-0000-0000-0000-000000000001',
  c.id,
  (SELECT id FROM services WHERE business_id = '00000000-0000-0000-0000-000000000001' LIMIT 1),
  (SELECT id FROM staff WHERE business_id = '00000000-0000-0000-0000-000000000001' LIMIT 1),
  (CURRENT_DATE + 2) + TIME '14:00',
  (CURRENT_DATE + 2) + TIME '15:00',
  'scheduled'
FROM customers c
WHERE c.business_id = '00000000-0000-0000-0000-000000000001' AND c.name = 'Alice Customer' LIMIT 1;

-- ============================================
-- REVIEWS (for AI sentiment analysis)
-- ============================================
INSERT INTO reviews (business_id, customer_id, source, rating, comment, reviewer_name, review_date, sentiment)
VALUES
  ('00000000-0000-0000-0000-000000000001', NULL, 'google', 5, 'Fast, professional service. Highly recommend!', 'Happy Customer', NOW() - INTERVAL '5 days', 'positive'),
  ('00000000-0000-0000-0000-000000000001', NULL, 'yelp', 4, 'Good experience overall. Slightly pricey but worth it.', 'John R', NOW() - INTERVAL '12 days', 'positive'),
  ('00000000-0000-0000-0000-000000000001', NULL, 'google', 3, 'Service was okay. Had to wait a bit longer than expected.', 'Anonymous', NOW() - INTERVAL '20 days', 'neutral'),
  ('00000000-0000-0000-0000-000000000001', NULL, 'facebook', 5, 'Best in town! Will definitely come back.', 'Sarah M', NOW() - INTERVAL '2 days', 'positive')
ON CONFLICT DO NOTHING;

-- ============================================
-- REVIEW SUMMARIES (AI-generated sample)
-- ============================================
INSERT INTO review_summaries (business_id, period_start, period_end, summary_text)
VALUES
  (
    '00000000-0000-0000-0000-000000000001',
    (NOW() - INTERVAL '30 days')::DATE,
    NOW()::DATE,
    'Customers generally positive. Common themes: fast service, professionalism. One mention of wait times. Average rating: 4.25.'
  )
ON CONFLICT DO NOTHING;

-- ============================================
-- CHURN SNAPSHOTS (sample for forecasting)
-- ============================================
INSERT INTO churn_snapshots (business_id, snapshot_date, customer_id, days_since_last_appointment, total_appointments, last_appointment_date, is_churned)
SELECT
  '00000000-0000-0000-0000-000000000001',
  (NOW() - INTERVAL '1 day')::DATE,
  c.id,
  CASE c.name
    WHEN 'Charlie Customer' THEN 45
    WHEN 'Diana Client' THEN 60
    ELSE 14
  END,
  CASE c.name
    WHEN 'Alice Customer' THEN 5
    WHEN 'Bob Customer' THEN 4
    ELSE 2
  END,
  (NOW() - INTERVAL '14 days')::DATE,
  CASE WHEN c.name IN ('Charlie Customer', 'Diana Client') THEN true ELSE false END
FROM customers c
WHERE c.business_id = '00000000-0000-0000-0000-000000000001'
ON CONFLICT (business_id, snapshot_date, customer_id) DO NOTHING;

-- ============================================
-- CHURN SUGGESTIONS (AI-generated sample)
-- ============================================
INSERT INTO churn_suggestions (business_id, customer_id, suggestion_text, priority)
SELECT
  '00000000-0000-0000-0000-000000000001',
  c.id,
  'Send personalized follow-up offer. Customer has not visited in 45+ days.',
  'high'
FROM customers c
WHERE c.business_id = '00000000-0000-0000-0000-000000000001' AND c.name = 'Charlie Customer';

-- ============================================
-- JOBS (sample reminder job)
-- ============================================
INSERT INTO jobs (business_id, type, run_at, status, payload)
VALUES
  (
    '00000000-0000-0000-0000-000000000001',
    'reminders.send',
    NOW() + INTERVAL '1 hour',
    'pending',
    '{"channel":"email","to":"alice@example.com","subject":"Appointment Reminder","message":"Your appointment is in 24 hours."}'::jsonb
  );
