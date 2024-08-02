const asyncHandler = async (fn) => (req, res, next) => {
    try {
        fn(req, res, next);
    } catch (error) {
        res.status(err.Code || 500).json({
            success: false,
            message: err.message
        });
    }
}

export { asyncHandler }