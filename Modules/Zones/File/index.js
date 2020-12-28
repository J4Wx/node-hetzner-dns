const ImportFactory = require('./Import');
const ExportFactory = require('./Export');
const ValidateFactory = require('./Validate');

module.exports = (context) => {
    return {
        Import: ImportFactory(context),
        Export: ExportFactory(context),
        Validate: ValidateFactory(context)
    }
}
