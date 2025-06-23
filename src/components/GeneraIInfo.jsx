import { useState } from "react";
import "/src/styles/GeneralInfo.css";

function Name({value, onChange}) {
	return (
		<input name="name" placeholder="Name" value={value} onChange={onChange}/>
	)
}

function Email({value, onChange}) {
	return (
		<input name="email" placeholder="Email" value={value} onChange={onChange}/>
	)
}

function Phone({value, onChange}) {
	return (
		<input name="phone" placeholder="Phone" value={value} onChange={onChange}/>
	)
}

export function GeneralInfo() {
	const [formData, setFormData] = useState({name: '', email: '', phone: ''});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleEdit = (e) => {
		setIsSubmit(false);
		const newFormData = { ...formData, [e.target.name]: e.target.value };
		setFormData(newFormData);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitted:", formData);
		setIsSubmit(true);
	}

	if (isSubmit) {
		return (
			<div className="submitted">
				<div><strong>Name: </strong>{formData.name}  <strong>Email: </strong> {formData.email}  <strong>Phone: </strong> {formData.phone}</div>
				<button onClick={handleEdit}>Edit</button>
			</div>
		)
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div class="inputs">
				<Name value={formData.name} onChange={handleEdit}/>
				<Email value={formData.email} onChange={handleEdit}/>
				<Phone value={formData.phone} onChange={handleEdit}/>
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}