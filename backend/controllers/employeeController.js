// Employee login (Waiters, Kitchen Staff, Admins)
export const employeeLogin = async (req, res) => {
    try {
        res.status(200).json({ message: "Employee logged in" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin: Manage employee profiles
export const manageEmployees = async (req, res) => {
    try {
        res.status(200).json({ message: "Employee profiles updated" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
