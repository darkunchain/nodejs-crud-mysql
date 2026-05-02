-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS crudnodejsmysql
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Usar la base de datos
USE crudnodejsmysql;

-- Crear tabla customer si no existe
CREATE TABLE IF NOT EXISTS customer (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;;

-- Datos de prueba opcionales
INSERT INTO customer (name, address, phone) VALUES
('Juan Pérez', 'Bogotá', '3001234567'),
('María Gómez', 'Medellín', '3109876543');


