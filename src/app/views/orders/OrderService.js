import axios from 'axios';
import http from "../../services/api"

export const getInvoiceById = (id) => {
   return http 
    .get(`/afrimash/coupons/${id}`)      
}

export const getAllInvoice = () => {
    return http.get('/afrimash/coupons/')
}
// export const getInvoiceById = (id) => {
//     return axios.get('/api/invoices', { data: id })
// }
export const deleteInvoice = (invoice) => {
    return axios.post('/api/invoices/delete', invoice)
}
export const addInvoice = (invoice) => {
    return axios.post('/api/invoices/add', invoice)
}
export const updateInvoice = (invoice) => {
    return axios.post('/api/invoices/update', invoice)
}
