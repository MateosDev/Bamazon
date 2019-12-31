-- Products listed below can be changed. They must be changed 
-- before running the seed file in SQL, otherwise it will have to 
-- be deleted and redone. 

-- Using Database - Use if bamazon_db is not currently selected 

-- USE bamazon_db;

-- For resetting table content only (uncomment Line 9 and run the code to delete and reset)
-- DELETE FROM products;

-- Seed info into DB (bamazon_db)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
    -- Item 01
    ( "Apple MacBook Pro (13-inch, 8GB RAM, 128GB Storage) - Space Gray", "Electronics, Computers & Office", 1199.99, 78 ), 
    -- Item 02
    ( "Drake - Care Package (2019 Compilation) - Explicit", "Movies, Music & Games", 9.49, 99 ), 
    -- Item 03
    ( "Crest 3D White Dental Kit - Whitening Strips - 44 ct", "Beauty & Health", 44.99, 42 ),
    -- Item 04
    ( "Polo Ralph Lauren Men's Classic Full Zip Fleece Hooded Sweatshirt, Grey", "Clothing, Shoes, Jewelry & Watches", 89.99, 68 ), 
    -- Item 05
    ( "dogPACER Mini Treadmill (For dogs up to 55 lbs)" ,"Pet Supplies", 528.45, 33 ), 
    -- Item 06
    ( "Cards Against Humanity, Absurd Box", "Toys, Kids & Baby", 20.00, 51), 
    -- Item 07
    ( "Samsung DV5471AEP - 7.4 Cu. Ft. Platinum Electric Dryer", "Home, Garden & Tools", 799.99, 45 ), 
    -- Item 08
    ( "Perception Access 11.5 | Sit on Top Kayak", "Sports and Outdoors", 499.00, 7 ), 
    -- Item 09
    ( "FIJI Natural Artesian Water, 16.9 Fl Oz, Pack of 24", "Food & Grocery", 18.77, 82 ), 
    -- Item 10
    ( "Innova 3130f Code Reader / Scan Tool with ABS and Bluetooth for OBD2 Vehicles", "Automotive & Industrial", 144.45, 44 );
    
   

-- Just for viewing purposes
SELECT * FROM products; 