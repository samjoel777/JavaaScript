let value_Validation = () =>
{
    try
    {
        let value = prompt('Enter the value');
        let new_Value = +value;
        let new_Value_1 = Boolean(value);

        try
        {
            if(new_Value_1 != true)
            {
                throw error = new Error("Input is not true","error_4.js","lineNumber:7");
            }
        }
        catch(error)
        {
            console.log(error);
        }

        try
        {
            if(new_Value < 1)
            {
                throw error = new ReferenceError("value is less than 1","error_4.js", "lineNumber:6");            
            }

            else if(new_Value > 50)
            {
                throw error = new ReferenceError("value is greater than 50","error_4.js", "lineNumber:6");            
            }
        }
        catch(error)
        {
            console.log(error);
        }

        try
        {
            if(value.length < 10)
            {
                throw value_Len_Error = new Error("Input String length is less than 10","error_4.js", "lineNumber:5")
            }
    
            if(value.length > 20)
            {
                throw value_Len_Error = new Error("Input String length is greater than 20","error_4.js", "lineNumber:5")
            }
        }
        catch(error)
        {
            console.log(error);
        }
        
        if(value == null || value == undefined || value == "")
        {
            throw error = new ReferenceError("value is either empty null undefined","error_4.js", "lineNumber:5");            
        }

    }
    catch(error)
    {
        console.log(error);
    }
}

value_Validation();
