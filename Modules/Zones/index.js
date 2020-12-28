const CreateFactory = require('./Create');
const DeleteFactory = require('./Delete');
const FileFactory = require('./File');
const GetFactory = require('./Get');
const GetAllFactory = require('./GetAll');
const UpdateFactory = require('./Update');

module.exports = (context) => {
    return {
        GetAll: GetAllFactory(context),
        Create: CreateFactory(context),
        Get: GetFactory(context),
        Update: UpdateFactory(context),
        Delete: DeleteFactory(context),
        File: FileFactory(context),
    }
}
