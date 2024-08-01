const asyncHandler = async (fn) => (req, res, next) => {
    try {
        fn(req, res, next);
    } catch (error) {
        console.log("Error: " + error);
    }
}

export { asyncHandler }