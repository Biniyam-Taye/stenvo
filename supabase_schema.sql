-- Printora Initial Database Schema
-- Run this in the Supabase SQL Editor

-- 1. Suppliers Table
CREATE TABLE IF NOT EXISTS suppliers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  bank_account TEXT, -- Telebirr or CBE account
  status TEXT DEFAULT 'ACTIVE', -- ACTIVE, SUSPENDED
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Products Catalog Table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL, -- e.g., "Classic T-Shirt", "Magic Mug"
  category TEXT NOT NULL,
  base_price NUMERIC NOT NULL,
  description TEXT,
  available_colors TEXT[], -- Array of hex codes or names
  available_sizes TEXT[], -- S, M, L, XL
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Customers Table
CREATE TABLE IF NOT EXISTS customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL, -- Telebirr phone
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Orders Table (The core of the system)
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT UNIQUE NOT NULL, -- e.g., AMU-240301-12
  customer_id UUID REFERENCES customers(id),
  supplier_id UUID REFERENCES suppliers(id), -- Assigned manually later
  product_id UUID REFERENCES products(id),
  status TEXT NOT NULL DEFAULT 'PENDING_DEPOSIT', 
    -- PENDING_DEPOSIT, PENDING_MOCKUP, MOCKUP_REJECTED, IN_PRODUCTION, DELIVERED, COMPLETED
  quantity INTEGER NOT NULL DEFAULT 1,
  size TEXT,
  color TEXT,
  total_price NUMERIC NOT NULL,
  deposit_amount NUMERIC NOT NULL, -- 50%
  deposit_screenshot_url TEXT,
  mockup_photos_urls TEXT[],
  delivery_proof_url TEXT,
  final_payment_screenshot_url TEXT,
  delivery_address TEXT,
  customer_notes TEXT,
  supplier_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Note: In Phase 1, Printora admin links suppliers manually via Supabase Studio or Google Sheets.
