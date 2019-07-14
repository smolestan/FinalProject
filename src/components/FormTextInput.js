import React from "react"
import { TextInput, View, Text } from "react-native"

const FormTextInput = ({ formikProps, formikKey, ...rest }) => {

  const inputStyles = {
    height: 40,
    borderColor: "silver",
    borderBottomWidth: 1,
    marginBottom: 20
  }
  
  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) 
  { inputStyles.borderColor = "red" } 
  
  return (
      <View>
        <TextInput
          style={inputStyles}
          selectionColor="dodgerblue"
          onChangeText={formikProps.handleChange(formikKey)}
          onBlur={formikProps.handleBlur(formikKey)}
          {...rest}
        />
        <Text style={{ color: 'red' }}>
          {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        </Text>
      </View>
  )
}

export default FormTextInput