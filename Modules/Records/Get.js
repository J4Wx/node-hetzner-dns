module.exports = (context) => {
    return (RecordID) => {
        return context.Axios.get(`/records/${RecordID}`).then(r => {
            return r.data;
        })
    }
}
