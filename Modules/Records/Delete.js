module.exports = (context) => {
    return (RecordID) => {
        return context.Axios.delete(`/records/${RecordID}`).then(r => {
            return r.data;
        })
    }
}
