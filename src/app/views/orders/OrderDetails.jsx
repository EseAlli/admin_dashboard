import React, { useState, useEffect } from 'react'
import { Card } from '@material-ui/core'
import OrderViewer from './OrderViewer'
import OrderEditor from './OrderEditor'
import { useParams } from 'react-router-dom'

const OrderDetails = () => {
    const [showOrderEditor, setShowOrderEditor] = useState(false)
    const [isNewOrder, setIsNewOrder] = useState(false)

    const { id } = useParams()

    const toggleOrderEditor = () => {
        setShowOrderEditor(!showOrderEditor)
        setIsNewOrder(false)
    }

    useEffect(() => {
        if (id === 'add') {
            setShowOrderEditor(true)
            setIsNewOrder(true)
        }
    }, [id])

    return (
        <Card elevation={6} className="m-sm-30">
            {showOrderEditor ? (
                <OrderEditor
                    toggleOrderEditor={toggleOrderEditor}
                    isNewOrder={isNewOrder}
                />
            ) : (
                <OrderViewer toggleOrderEditor={toggleOrderEditor} />
            )}
        </Card>
    )
}

export default OrderDetails
