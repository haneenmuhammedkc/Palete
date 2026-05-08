import Table from '../models/Table.js';

// Get table status (e.g., when scanning QR code)
export const getTableStatus = async (req, res) => {
    try {
        const { tableId } = req.params;
        res.status(200).json({ message: `Status for table ${tableId} retrieved` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin: Manage tables (add/remove)
export const manageTables = async (req, res) => {
    try {
        res.status(200).json({ message: "Table list updated" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
