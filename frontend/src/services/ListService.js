import HttpService from './HttpService';

const LIST_URL = HttpService.getUrl('list')

// const resolveData = res => res.data

export default {
    query,
    saveList,
    getListById,
    getEmptyList,
    removeList,
    updateLists
}

function getListById(listId) {
    return HttpService.get(`${LIST_URL}/${listId}`)
}

function query({ boardId, archived = false }) {
    return HttpService.get(LIST_URL, { boardId, archived })
}

function updateLists(lists) {
    return Promise.all([lists.map(list => this.saveList(list))]).then(list => console.log(list)
    )
}

function saveList(list) {    
    if (list._id) {
        return HttpService.put(`${LIST_URL}/${list._id}`, list)
    } else {        
        return HttpService.post(LIST_URL, list)
    }
}

function removeList(listId) {
    return HttpService.delete(`${LIST_URL}/${listId}`)
}

function getEmptyList() {
    return {
        title: '',
        boardId: null,
        order: null,
        archived: false
    }
}