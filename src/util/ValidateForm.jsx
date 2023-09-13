export default function ValidateForm(value) {
    if (value === undefined || value === null) {
        return true; // Value is undefined or null
    }

    if (typeof value === 'string' && value.trim() === '') {
        return true; // Value is an empty string
    }

    if (Array.isArray(value) && value.length === 0) {
        return true; // Value is an empty array
    }

    return false; // Value is not empty
}