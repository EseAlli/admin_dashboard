import React from 'react'
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  Icon,
  TableRow,
  Card,
  TextField
} from "@material-ui/core"

function CreateNew({name, toggle, fields}) {
    return (
        <div>
            <Card>
                <h2>{name}</h2>
                <form>
                <div>
                 {fields.map((field, index)=>(
                      <TextField id="outlined-basic" label={field} variant="outlined" />
                 ))}
                 </div>
                 </form>
         </Card>
        </div>
    )
}

export default CreateNew
