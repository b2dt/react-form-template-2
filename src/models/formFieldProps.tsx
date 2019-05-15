export interface FormFieldProps {
	id: string
	inputType: InputType | any
	index: number
	
	classes?: string
	label?: string
}

export interface FieldProps extends FormFieldProps {
	required?: boolean
	validation?: (input: string) => boolean
	showError?: boolean
	errorMsg?: string
	defaultText?: string
	placeholder?: string
}


export enum InputType {
	FORM_SECTION = "FormSection",
	FORM = "Form",
	INPUT = "input",
	TEXTAREA = "textarea",
	CHECKBOX = "checkbox",
	BUTTON = "button",
	DROPDOWN = "dropdown",
}

export enum CheckboxState {
	CHECKED = 'CHECKED',
	UNCHECKED = 'UNCHECKED'
}

export interface UpdateObj {
	sectionIndices?: number[],
	fieldIndex: number,
	newVal: string
}

export interface FlatState {
	value: any,
	id: string,
	error: boolean
}


export interface FormFunctions {
	updateFieldVal: (input: UpdateObj) => any
}

export enum ColumnRange {
	ONE = 1,
	TWO = 2,
	THREE = 3
}