import Category from '../models/Category.js';
import MenuItem from '../models/menu.model.js';

// Get all categories and menu items
export const getMenu = async (req, res) => {
    try {
        res.status(200).json({ message: "Menu retrieved" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin: Add a category
export const addCategory = async (req, res) => {
    try {
        res.status(201).json({ message: "Category added" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin: Add a menu item
export const addMenuItem = async (req, res) => {
    try {
        res.status(201).json({ message: "Menu item added" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin: Update menu item
export const updateMenuItem = async (req, res) => {
    try {
        res.status(200).json({ message: "Menu item updated" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin: Delete menu item
export const deleteMenuItem = async (req, res) => {
    try {
        res.status(200).json({ message: "Menu item deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
