import { stringDateFormatter } from '../../utils'
import DatePicker from '@react-native-community/datetimepicker'
import { FC } from 'react'

type CustomDatePickerType={
    setter: Function
    dateState: Date
}


export const CustomDatePicker:FC<CustomDatePickerType> = ({setter,dateState})=> {
    return(
        <DatePicker
        style={{width:'20%'}}
        value={dateState}
        display="calendar"
        onChange={(date)=>{
            const selectedDate = new Date(date.nativeEvent.timestamp!)
            console.log(selectedDate)
            setter(selectedDate)
        }}
      />
    )
}