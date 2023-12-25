export const validateForm = (values) => {
    let errors = {};

    Object.keys(values).forEach((key) => {
        if(values[key] === ""){
            errors[key] = `${key} is required`
        }
        else if(key === "password" && values[key].length < 8){
            errors[key] = "Password length should be greater than or qual to 8"
        }
    })
    
    return errors
}   