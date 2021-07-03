exports.findAll = () => {
    let retorno = false;
    
    this.model.find(function (err, results) {
        if (err) return next(err);
        retorno = results;
    });
    
    return results;
}