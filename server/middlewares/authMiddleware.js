export default function ensureAthenticated(req, res, next) {
    if(req.isAthenticated){
        return next();
    }
    res.status(401).json({ message: "Unauthorized" });
}


// use this for protected Routes like this
// router.post('/create', ensureAuthenticated, articleController.createArticle);