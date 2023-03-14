
import React from 'react';
import { stringifyDate } from '../../../services/services.js'

export const ReportReagItem = (props) => {
    
    const {index, date, test, name, quan, price, userName, units} = props

    return(
        <tr>
            <td>{index+1}</td>
            <td>{stringifyDate(date)}</td>
            <td>{userName}</td>
            <td style={{minWidth:'120px'}}>{test}</td>
            <td>{name}</td>
            <td>{quan} {units}</td>
            <td>{price} руб</td>
        </tr>
    )
}
export const ReportColumnItem = (props) => {
    const {itemId, type, sn, name, userName, countInj, test, fromDate, toDate, price, index} = props
    
    const stringifyType = (type) => {
        switch (type) {
            case 'hplc': 
                return '(ВЭЖХ)';
            case 'gc': 
                return '(ГХ)';
            default:
                return '';
        }
    }

    return(
        <tr>
            <td>{index +1}</td>
            <td>{stringifyDate(fromDate)} - {stringifyDate(toDate)}</td>
            <td>{userName}</td>
            <td style={{minWidth:'120px'}}>{test}</td>
            <td>ID: {itemId}, {name}, {sn}</td>
            <td>{stringifyType(type)}</td>
            <td>{countInj}</td>
            <td>{price} руб</td>
        </tr>
    )
}

export const ReportReagDirectionItem = (props) => {
   const {name, userName, quan, units, test, date, price, destination, index} = props
   return (
    <tr>
        <td>{index+1}</td>
        <td>{stringifyDate(date)}</td>
        <td>{userName}</td>
        <td style={{minWidth:'120px'}}>{destination.code}, {destination.name}</td>
        <td style={{minWidth:'120px'}}>{test}</td>
        <td>{name}</td>
        <td>{quan} {units}</td>
        <td>{price} руб</td>
    </tr>
   )
}
export const ReportColumnDirectionItem = (props) => {
   const {name, userName, countInj, test, fromDate, toDate, price, destination, index, type, sn} = props
   
   const stringifyType = (type) => {
        switch (type) {
            case 'hplc': 
                return '(ВЭЖХ)';
            case 'gc': 
                return '(ГХ)';
            default:
                return '';
        }
    }

   return (
    <tr>
        <td>{index+1}</td>
        <td>{stringifyDate(fromDate)} - {stringifyDate(toDate)}</td>
        <td>{userName}</td>
        <td style={{minWidth:'120px'}}>{destination?.code}, {destination?.name}</td>
        <td style={{minWidth:'120px'}}>{test}</td>
        <td>{name}, s/n: {sn}</td>
        <td>{stringifyType(type) }</td>
        <td>{countInj}</td>
        <td>{price} руб</td>
    </tr>
   )
}