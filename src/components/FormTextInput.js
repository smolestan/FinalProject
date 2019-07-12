import React from "react"
import { StyleSheet, TextInput } from "react-native"

class FormTextInput extends React.Component {
    
  render() {
    const { style, ...otherProps } = this.props;
    return (
      <TextInput
        selectionColor="dodgerblue"
        style={[styles.textInput, style]}
        {...otherProps}
      />
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "silver",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
})

export default FormTextInput