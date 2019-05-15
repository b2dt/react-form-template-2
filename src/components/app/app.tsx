import * as React from 'react'
import {CheckboxState, FieldProps, InputType} from "../../models/formFieldProps";
import {Validate} from "../../utilities/validation";

export default class App extends React.Component<any, any> {
	constructor(props) {
		super(props)
		this.submitForm = this.submitForm.bind(this)
	}
	
	componentDidMount() {
	
	}
	
	componentDidUpdate(prevProps, prevState) {
	
	}
	
	submitForm(form: any) {
		/*let jsonForm = Convert.flatState.to.json(form)
		console.log(jsonForm)*/
	}
	
	render() {
		const formProps: FieldProps[] = [
			{
				index: 0,
				id: "rus-first-name",
				inputType: InputType.INPUT,
				required: true,
				placeholder: "BRONTS",
				label: "First Name"
			}, {
				index: 1,
				id: "rus-last-name",
				inputType: InputType.INPUT,
				label: "Last Name"
			}, {
				index: 2,
				id: "rus-id",
				inputType: InputType.INPUT,
				placeholder: "tso5912",
				label: "User Id"
			}, {
				index: 3,
				id: "doggos",
				inputType: InputType.CHECKBOX,
				defaultText: CheckboxState.CHECKED,
				label: "Has Dogg"
			}, {
				index: 4,
				id: "birbs",
				inputType: InputType.CHECKBOX,
				defaultText: CheckboxState.UNCHECKED,
				label: "Has Birb"
			},
		]
		const formProps2: FieldProps[] = [
			{
				index: 0,
				id: "zip",
				inputType: InputType.INPUT,
				validation: Validate.zipCode,
				errorMsg: "Please enter a Valid Zipcode",
				label: "Zip"
			}, {
				index: 1,
				id: "street",
				defaultText: "TESTING",
				inputType: InputType.INPUT,
				label: "Street"
			}, {
				index: 2,
				id: "state",
				inputType: InputType.INPUT,
				defaultText: "Missouri",
				label: "State"
			}, {
				index: 3,
				id: "city",
				inputType: InputType.INPUT,
				defaultText: "Columbia",
				label: "City"
			}
		]
		
		const formProps3: FieldProps[] = [
			{
				index: 0,
				id: "billing-info",
				placeholder: "XXXX-XXXX-XXXX-XXXX",
				required: true,
				inputType: InputType.INPUT,
				label: "Billing Info"
			}, {
				index: 1,
				id: "ccv",
				defaultText: "XXX",
				inputType: InputType.INPUT,
				label: "Billing Info"
			}, {
				index: 2,
				id: "expiration-date",
				defaultText: "MM/DD/YYYY",
				inputType: InputType.INPUT,
				label: "Billing Info"
			}
		]
		
		return (
			<div id="app">
				hello
			</div>
		)
	}
}