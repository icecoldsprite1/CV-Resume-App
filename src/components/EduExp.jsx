import { useState } from "react";
import "/src/styles/EduExp.css";

function SchoolName({value, onChange}) {
  return (
    <input name="name" placeholder="School Name" value={value} onChange={onChange}/>
  )
}

function StudyTitle({value, onChange}) {
  return (
    <input name="title" placeholder="Title of Study" value={value} onChange={onChange}/>
  )
}

function StudyDate({value, onChange}) {
  return (
    <input name="date" placeholder="Date of Study" value={value} onChange={onChange}/>
  )
}

export function EduExp() {
  const [formData, setFormData] = useState({name: '', title: '', date: ''});
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
        <div><strong>School: </strong>{formData.name}  <strong>Major: </strong> {formData.title}  <strong>Date: </strong> {formData.date}</div>
        <button onClick={handleEdit}>Edit</button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div class="inputs">
        <SchoolName value={formData.name} onChange={handleEdit}/>
        <StudyTitle value={formData.title} onChange={handleEdit}/>
        <StudyDate value={formData.date} onChange={handleEdit}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}