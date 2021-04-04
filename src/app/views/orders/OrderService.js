import axios from 'axios';
import http from "../../services/api"

export const getInvoiceById = (id) => {
   return http 
    .get(`/afrimash/orders/${id}`)      
}

export const getAllInvoice = () => {
    return http.get('/afrimash/orders/')
}

export const deleteInvoice = (order) => {
    return http.delete('/afrimash/orders/', order)
}
export const addInvoice = (order) => {
    return http.post('/afrimash/orders/', order)
}
export const updateInvoice = (order,id) => {
    return http.put(`/afrimash/orders/${id}`, order)
}
