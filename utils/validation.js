const validateTaskInput = (title, description, completed, priority) => {
    if (title === undefined || typeof title !== "string" || title.trim() === "") {
        return "title is required and must be a non empty string";
    }

    if (
        description === undefined ||
        typeof description !== "string" ||
        description.trim() === ""
    ) {
        return "Description is required and must be a non empty string";
    }

    if (typeof completed !== "boolean") {
        return "Completed must be boolean value";
    }

    if (priority !== undefined) {
        const allowedPriorities = ["low", "medium", "high"];
        if (!allowedPriorities.includes(priority)) {
            return "Priority must be one of: low, medium, high";
        }
    }
    
    return null;
};

module.exports = validateTaskInput;